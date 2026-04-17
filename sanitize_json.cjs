const fs = require('fs');

const data = JSON.parse(fs.readFileSync('recovered_subtopics_fixed.json', 'utf-8'));

const cleaned = data.map(item => {
  // If inputs string contains structural JS keywords, it's corrupted
  const structuralKeywords = ['subTopics:', 'icon:', 'React.createElement', 'promptTemplate:', '},', '],'];
  
  let isCorrupted = false;
  if (typeof item.inputs === 'string') {
    if (structuralKeywords.some(kw => item.inputs.includes(kw)) || !item.inputs.trim().endsWith(']')) {
       isCorrupted = true;
    }
  }

  if (isCorrupted) {
    item.inputs = "[{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }]";
    // Also reset promptTemplate if we reset inputs
    item.promptTemplate = `${item.name} वर आधारित प्रश्न सोडवा: \${i.problem_text}`;
  } else {
    // Normalization: replace 'p' with 'problem_text' in normal strings
    if (item.inputs.includes("'p'")) {
       item.inputs = item.inputs.replace(/'p'/g, "'problem_text'");
       item.promptTemplate = item.promptTemplate.replace(/\$\{i\.p\}/g, "${i.problem_text}");
    }
  }

  // Final safety check for promptTemplate
  if (item.promptTemplate.includes('subTopics:') || item.promptTemplate.includes('React.')) {
     item.promptTemplate = `${item.name} वर आधारित प्रश्न सोडवा: \${i.problem_text}`;
  }

  // Add units where applicable (Requested)
  if (item.key.includes('perc') || item.key.includes('profit') || item.key.includes('loss')) {
     if (item.inputs.includes("type: 'number'") && !item.inputs.includes("unit:")) {
        item.inputs = item.inputs.replace(/type:\s*'number'/g, "type: 'number', unit: '%'");
     }
  }

  return item;
});

fs.writeFileSync('recovered_subtopics_clean.json', JSON.stringify(cleaned, null, 2));
console.log('Sanitized JSON. Count:', cleaned.length);

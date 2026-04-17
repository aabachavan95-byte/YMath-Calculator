const fs = require('fs');

const data = JSON.parse(fs.readFileSync('recovered_subtopics_fixed.json', 'utf-8'));

const keyMapping = {
  'p': 'problem_text',
  'prob': 'problem_text',
  'a': 'first_number',
  'b': 'second_number',
  'c': 'third_number',
  'n': 'number_val',
  'r': 'rate',
  't': 'time_period',
  'p_val': 'principal'
};

const labelMapping = {
  'पहिली संख्या': 'first_number',
  'दुसरी संख्या': 'second_number',
  'संख्या': 'number_val',
  'मुद्दल': 'principal',
  'व्याज दर': 'interest_rate',
  'कालावधी': 'time_period',
  'वेग': 'speed',
  'वेळ': 'time',
  'कास/दिवस': 'days',
  'अंतर': 'distance',
  'त्रिज्या': 'radius',
  'लांबी': 'length',
  'रुंदी': 'width',
  'उंची': 'height',
  'खरेदी किंमत': 'cost_price',
  'विक्री किंमत': 'selling_price',
  'नफा': 'profit',
  'तोटा': 'loss',
  'टक्केवारी': 'percentage'
};

const cleaned = data.map(item => {
  const structuralKeywords = ['subTopics:', 'icon:', 'React.createElement', 'promptTemplate:', '},', '],'];
  let isCorrupted = false;
  if (typeof item.inputs === 'string') {
    if (structuralKeywords.some(kw => item.inputs.includes(kw)) || !item.inputs.trim().endsWith(']')) {
       isCorrupted = true;
    }
  }

  if (isCorrupted) {
    item.inputs = "[{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }]";
    item.promptTemplate = `${item.name} वर आधारित प्रश्न सोडवा: \${i.problem_text}`;
  } else {
    // Label to Key mapping (Aggressive)
    Object.entries(labelMapping).forEach(([label, newKey]) => {
      const labelPattern = new RegExp(`label:\\s*'${label}'`, 'g');
      if (item.inputs.includes(`label: '${label}'`)) {
        // Handle conversion to number type for specific numeric labels
        const numericLabels = ['संख्या', 'पहिली संख्या', 'दुसरी संख्या', 'मुद्दल', 'व्याज दर', 'कालावधी', 'वेग', 'वेळ', 'अंतर', 'त्रिज्या', 'लांबी', 'रुंदी', 'उंची', 'खरेदी किंमत', 'विक्री किंमत', 'नफा', 'तोटा', 'टक्केवारी', 'किंमत'];
        if (numericLabels.includes(label)) {
            item.inputs = item.inputs.replace(/type:\s*'textarea'/g, "type: 'number'");
            // Reduce rows if converted to number
            item.inputs = item.inputs.replace(/rows:\s*\d+/g, ""); 
        }

        // Find the key associated with this label and replace it
        // Format: { key: 'old', label: 'Match' }
        const match = item.inputs.match(new RegExp(`{\\s*key:\\s*'([^']+)',\\s*label:\\s*'${label}'`));
        if (match) {
           const oldKey = match[1];
           if (oldKey !== newKey) {
             item.inputs = item.inputs.replace(new RegExp(`key:\\s*'${oldKey}'`, 'g'), `key: '${newKey}'`);
             item.promptTemplate = item.promptTemplate.replace(new RegExp(`\\$\{i\\.${oldKey}\\}`, 'g'), `\${i.${newKey}}`);
           }
        }
      }
    });

    // Remainder Key Renaming
    Object.entries(keyMapping).forEach(([oldKey, newKey]) => {
      const oldKeyPattern = new RegExp(`key:\\s*'${oldKey}'`, 'g');
      if (item.inputs.includes(`key: '${oldKey}'`)) {
        item.inputs = item.inputs.replace(oldKeyPattern, `key: '${newKey}'`);
        item.promptTemplate = item.promptTemplate.replace(new RegExp(`\\$\{i\\.${oldKey}\\}`, 'g'), `\${i.${newKey}}`);
      }
    });

    // 3. Adding Units
    let unit = "";
    const lowerName = item.name.toLowerCase();
    const lowerKey = item.key.toLowerCase();
    
    if (lowerName.includes('टक्के') || lowerKey.includes('perc') || lowerName.includes('नफा') || lowerName.includes('तोटा') || lowerName.includes('व्याज') || lowerName.includes('दर')) {
      unit = "%";
    } else if (lowerName.includes('वेळ') || lowerName.includes('काळ')) {
      unit = "दिवस/तास";
    } else if (lowerName.includes('वेग')) {
      unit = "किमी/तास";
    } else if (lowerName.includes('अंतर')) {
      unit = "किमी/मीटर";
    } else if (lowerName.includes('क्षेत्रफळ') || lowerName.includes('पृष्ठफळ')) {
      unit = "चौ.एकक";
    } else if (lowerName.includes('घनफळ') || lowerName.includes('धारकता')) {
      unit = "घन एकक";
    } else if (lowerName.includes('किंमत') || lowerName.includes('रुपये') || lowerName.includes('मुद्दल')) {
      unit = "₹";
    }

    if (unit && item.inputs.includes("type: 'number'") && !item.inputs.includes("unit:")) {
      item.inputs = item.inputs.replace(/type:\s*'number'/g, `type: 'number', unit: '${unit}'`);
    }
  }

  // 4. Ensure promptTemplate refers to problem_text if that's all we have
  if (item.inputs.includes("key: 'problem_text'") && !item.promptTemplate.includes("${i.problem_text}")) {
      // Fallback if the replacement missed it or it was already problem_text but template was old
      if (item.promptTemplate.includes("${i.p}")) {
          item.promptTemplate = item.promptTemplate.replace(/\$\{i\.p\}/g, "${i.problem_text}");
      } else if (!item.promptTemplate.includes("${i.")) {
          item.promptTemplate = `${item.promptTemplate} : \${i.problem_text}`;
      }
  }

  return item;
});

fs.writeFileSync('recovered_subtopics_clean_v2.json', JSON.stringify(cleaned, null, 2));
console.log('Sanitized V2 JSON. Count:', cleaned.length);

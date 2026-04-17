const fs = require('fs');

const data = JSON.parse(fs.readFileSync('recovered_subtopics_fixed.json', 'utf-8'));

const cleaned = data.map(item => {
  // If inputs has garbage like subTopics:, try to cut it off or use a default
  if (item.inputs && item.inputs.includes('subTopics:')) {
    item.inputs = "[{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ' }]";
  }
  
  // Basic cleanup of name
  item.name = item.name.trim();
  
  return item;
}).filter(item => {
    // Remove extremely broken ones
    if (item.key.length > 50) return false;
    if (!item.name || item.name.length > 200) return false;
    return true;
});

fs.writeFileSync('recovered_subtopics_clean.json', JSON.stringify(cleaned, null, 2));
console.log('Cleaned JSON. Original:', data.length, 'Cleaned:', cleaned.length);

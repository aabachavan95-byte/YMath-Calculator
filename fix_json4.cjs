const fs = require('fs');

const data = JSON.parse(fs.readFileSync('recovered_subtopics.json', 'utf8'));
const keys = new Set();
const duplicates = [];
const malformed = [];

const newData = [];

data.forEach((item, index) => {
  let isBad = false;
  if (keys.has(item.key)) {
    duplicates.push(item.key);
    isBad = true;
  }
  keys.add(item.key);
  
  if (item.inputs && item.inputs.includes('React.createElement')) {
    malformed.push({index, key: item.key});
    isBad = true;
  }
  
  if (!isBad) {
    newData.push(item);
  }
});

console.log('Duplicates removed:', duplicates);
console.log('Malformed removed:', malformed);

fs.writeFileSync('recovered_subtopics.json', JSON.stringify(newData, null, 2));
console.log('Saved cleaned recovered_subtopics.json');

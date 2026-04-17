const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
let path = [];
let indentLevel = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^(\s*)key:\s*'([^']+)'/);
  if (match) {
    const indent = match[1].length;
    console.log(`${i + 1}: ${' '.repeat(indent)}${match[2]}`);
  }
}

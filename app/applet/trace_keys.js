const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
let stack = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '{' || line[j] === '[') {
      stack.push({ char: line[j], line: i + 1 });
    } else if (line[j] === '}' || line[j] === ']') {
      stack.pop();
    }
    
    if (line.includes("key: 'percentage'") && j === line.indexOf("key: 'percentage'")) {
      console.log(`Found percentage at line ${i + 1}. Stack depth: ${stack.length}`);
      console.log('Stack:', stack.map(s => `${s.char}@${s.line}`).join(' -> '));
    }
  }
}

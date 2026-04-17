const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
let openBraces = 0;
let openBrackets = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '{') openBraces++;
    if (line[j] === '}') openBraces--;
    if (line[j] === '[') openBrackets++;
    if (line[j] === ']') openBrackets--;
  }
  if (i + 1 >= 1000 && i + 1 <= 1400) {
    console.log(`Line ${i + 1}: Braces=${openBraces}, Brackets=${openBrackets}`);
  }
}

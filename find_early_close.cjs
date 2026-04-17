const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');

let bracketLevel = 0;
let braceLevel = 0;

for (let i = 0; i < 1362; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '[') bracketLevel++;
    if (char === ']') bracketLevel--;
    if (char === '{') braceLevel++;
    if (char === '}') braceLevel--;
  }
  if (i >= 1050 && i <= 1362) {
     if (braceLevel === 0 && bracketLevel === 1) {
       console.log(`Brace level reached 0 at line ${i + 1}: ${line}`);
     }
  }
}

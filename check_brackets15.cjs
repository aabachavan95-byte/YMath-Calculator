const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
let openBraces = 0;
let openBrackets = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  openBraces += (line.match(/\{/g) || []).length;
  openBraces -= (line.match(/\}/g) || []).length;
  openBrackets += (line.match(/\[/g) || []).length;
  openBrackets -= (line.match(/\]/g) || []).length;
  
  if (i >= 490 && i <= 500) {
    console.log(`Line ${i}: Braces=${openBraces}, Brackets=${openBrackets} | ${line}`);
  }
}

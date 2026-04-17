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
  
  if (i === lines.length - 1) {
    console.log(`Final: Braces=${openBraces}, Brackets=${openBrackets}`);
  }
}

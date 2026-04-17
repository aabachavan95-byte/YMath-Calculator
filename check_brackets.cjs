const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
let openBraces = 0;
let openBrackets = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Ignore comments and strings for a naive check, but let's just do a simple count
  // Actually, let's just count them and print the state every 100 lines
  openBraces += (line.match(/\{/g) || []).length;
  openBraces -= (line.match(/\}/g) || []).length;
  openBrackets += (line.match(/\[/g) || []).length;
  openBrackets -= (line.match(/\]/g) || []).length;
  
  if (i > 0 && i % 500 === 0) {
    console.log(`Line ${i}: Braces=${openBraces}, Brackets=${openBrackets}`);
  }
}
console.log(`Final: Braces=${openBraces}, Brackets=${openBrackets}`);

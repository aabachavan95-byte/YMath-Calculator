const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
let openBraces = 0;
let openBrackets = 0;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') openBraces--;
  if (content[i] === '[') openBrackets++;
  if (content[i] === ']') openBrackets--;
}
console.log(`Total Open Braces: ${openBraces}`);
console.log(`Total Open Brackets: ${openBrackets}`);

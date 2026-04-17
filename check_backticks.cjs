const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
let backticks = 0;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '\`') backticks++;
}
console.log('Total backticks:', backticks);

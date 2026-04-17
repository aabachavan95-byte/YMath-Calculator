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
      const last = stack.pop();
      if ((line[j] === '}' && last.char !== '{') || (line[j] === ']' && last.char !== '[')) {
        console.log(`Mismatched ${line[j]} at line ${i + 1}, expected matching for ${last.char} from line ${last.line}`);
      }
    }
  }
}
console.log('Unclosed:');
stack.forEach(s => console.log(`${s.char} at line ${s.line}`));

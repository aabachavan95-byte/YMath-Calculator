const fs = require('fs');
const lines = fs.readFileSync('constants.ts', 'utf8').split('\n');
let inString = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '\`') {
      // check if escaped
      if (j > 0 && line[j-1] === '\\') continue;
      inString = !inString;
    }
  }
  if (inString) {
    console.log('Unclosed backtick at line', i + 1, line);
    break;
  }
}

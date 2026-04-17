const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("name: ") && lines[i].match(/^\s{4}name: /)) {
    console.log(i + 1, lines[i]);
  }
}

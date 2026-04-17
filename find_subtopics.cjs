const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
for (let i = 1424; i < 1845; i++) {
  if (lines[i].includes("name: ") && lines[i].match(/^\s{8}name: /)) {
    console.log(i + 1, lines[i]);
  }
}

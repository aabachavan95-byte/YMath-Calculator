const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("key: 'percentage'")) {
    console.log("Found percentage at line", i + 1);
  }
  if (lines[i].includes("key: 'profit_loss'")) {
    console.log("Found profit_loss at line", i + 1);
  }
}

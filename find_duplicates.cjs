const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
const keys = {};
lines.forEach((line, i) => {
  const match = line.match(/key:\s*'([^']+)'/);
  if (match) {
    const key = match[1];
    if (!keys[key]) {
      keys[key] = [];
    }
    keys[key].push(i + 1);
  }
});

for (const key in keys) {
  if (keys[key].length > 1) {
    console.log(`Duplicate key '${key}' found at lines: ${keys[key].join(', ')}`);
  }
}

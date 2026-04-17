const fs = require('fs');
// We need to be careful with parsing.
// Let's just look for lines with 4 spaces indentation and 'key:'
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
const topLevelKeys = [];
lines.forEach((line, i) => {
  if (line.startsWith('    key:')) {
    topLevelKeys.push({ key: line.match(/key:\s*'([^']+)'/)[1], line: i + 1 });
  }
});

const counts = {};
topLevelKeys.forEach(item => {
  if (!counts[item.key]) counts[item.key] = [];
  counts[item.key].push(item.line);
});

for (const key in counts) {
  if (counts[key].length > 1) {
    console.log(`Top-level duplicate key '${key}' found at lines: ${counts[key].join(', ')}`);
  }
}

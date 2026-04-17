const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');

// Find all key: '...' and their line numbers
const regex = /key:\s*'([^']+)'/g;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
    keys.push({ key: match[1], index: match.index, line: content.substring(0, match.index).split('\n').length });
}

// Group by key
const grouped = {};
keys.forEach(k => {
    if (!grouped[k.key]) grouped[k.key] = [];
    grouped[k.key].push(k.line);
});

// Print duplicates
for (const key in grouped) {
    if (grouped[key].length > 1) {
        console.log(`Key '${key}' is used ${grouped[key].length} times at lines: ${grouped[key].join(', ')}`);
    }
}

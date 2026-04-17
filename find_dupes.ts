
import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const keyRegex = /key:\s*'([^']*)'/g;
const keys: Record<string, number[]> = {};

let match;
while ((match = keyRegex.exec(content)) !== null) {
  const key = match[1];
  const line = content.substring(0, match.index).split('\n').length;
  if (!keys[key]) {
    keys[key] = [];
  }
  keys[key].push(line);
}

console.log('Duplicate Keys:');
for (const [key, lines] of Object.entries(keys)) {
  if (lines.length > 1) {
    console.log(`${key}: lines ${lines.join(', ')}`);
  }
}

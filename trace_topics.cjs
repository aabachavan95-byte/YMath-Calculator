const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');

let inTopics = false;
let bracketLevel = 0;
let braceLevel = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('export const TOPICS')) {
    inTopics = true;
  }
  if (!inTopics) continue;

  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '[') bracketLevel++;
    if (char === ']') bracketLevel--;
    if (char === '{') braceLevel++;
    if (char === '}') braceLevel--;

    if (bracketLevel === 1 && braceLevel === 1 && line.includes('key:')) {
       const match = line.match(/key:\s*'([^']+)'/);
       if (match) {
         console.log(`Top-level topic key: ${match[1]} at line ${i + 1}`);
       }
       break; // Move to next line
    }
  }
  if (inTopics && bracketLevel === 0 && i > 100) break;
}

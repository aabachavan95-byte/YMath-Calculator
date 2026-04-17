const fs = require('fs');

// We'll use a simple regex approach to find all keys in the file and see if they are duplicates within the same array
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');

let stack = []; // To keep track of arrays/objects
let currentArrayKeys = [new Set()];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for array start/end
    if (line.includes('[')) {
        currentArrayKeys.push(new Set());
    }
    
    const keyMatch = line.match(/key:\s*'([^']+)'/);
    if (keyMatch) {
        const key = keyMatch[1];
        const currentSet = currentArrayKeys[currentArrayKeys.length - 1];
        if (currentSet.has(key)) {
            console.log(`Duplicate key '${key}' found at line ${i + 1}`);
        }
        currentSet.add(key);
    }
    
    if (line.includes(']')) {
        currentArrayKeys.pop();
    }
}

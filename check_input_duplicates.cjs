const fs = require('fs');

const content = fs.readFileSync('constants.ts', 'utf8');

// This is a bit complex because we need to parse the nested structure.
// We'll use a regex to find all topics and their inputs.

const topicRegex = /key:\s*'([^']+)',[\s\S]*?inputs:\s*\[([\s\S]*?)\]/g;
let match;

while ((match = topicRegex.exec(content)) !== null) {
    const topicKey = match[1];
    const inputsContent = match[2];
    
    const inputKeyRegex = /key:\s*'([^']+)'/g;
    let inputMatch;
    const inputKeys = [];
    
    while ((inputMatch = inputKeyRegex.exec(inputsContent)) !== null) {
        const inputKey = inputMatch[1];
        if (inputKeys.includes(inputKey)) {
            console.log(`Duplicate input key '${inputKey}' in topic '${topicKey}'`);
        }
        inputKeys.push(inputKey);
    }
}

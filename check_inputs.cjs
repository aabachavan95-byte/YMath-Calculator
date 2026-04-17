
const fs = require('fs');

const content = fs.readFileSync('constants.ts', 'utf8');

// Simple regex to find input objects
const inputRegex = /\{[^}]*key:[^}]*\}/g;
const inputs = content.match(inputRegex);

if (inputs) {
    inputs.forEach((input, index) => {
        if (input.includes('key:')) {
            const hasLabel = input.includes('label:');
            const hasPlaceholder = input.includes('placeholder:');
            const hasType = input.includes('type:');
            
            if (!hasLabel || !hasPlaceholder || !hasType) {
                console.log(`Input ${index} might be missing fields: ${input}`);
            }
        }
    });
}

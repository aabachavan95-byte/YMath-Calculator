const fs = require('fs');

const content = fs.readFileSync('constants.ts', 'utf-8');

// Regex to find subtopics
// A subtopic looks like: { key: '...', name: '...', icon: React.createElement(...), inputs: [...], promptTemplate: (i) => `...` }
const regex = /{[\s]*key:\s*'([^']+)',[\s]*name:\s*'([^']+)',[\s]*icon:\s*React\.createElement\(([^)]+)\),[\s]*inputs:\s*(\[.*?\]),[\s]*promptTemplate:\s*\([^)]+\)\s*=>\s*`([^`]+)`[\s]*}/gs;

let match;
const subTopics = [];

while ((match = regex.exec(content)) !== null) {
    subTopics.push({
        key: match[1],
        name: match[2],
        icon: match[3],
        inputs: match[4],
        promptTemplate: match[5]
    });
}

console.log(`Found ${subTopics.length} subtopics.`);
fs.writeFileSync('recovered_subtopics.json', JSON.stringify(subTopics, null, 2));

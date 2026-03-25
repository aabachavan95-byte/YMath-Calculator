const fs = require('fs');

const data = JSON.parse(fs.readFileSync('recovered_subtopics.json', 'utf-8'));

const newSubtopics = [];

// Regex to find subtopics inside the corrupted inputs string
const regex = /{[\s]*key:\s*'([^']+)',[\s]*name:\s*'([^']+)',[\s]*icon:\s*React\.createElement\(([^)]+)\),[\s]*inputs:\s*(\[.*?\]),[\s]*promptTemplate:\s*\([^)]+\)\s*=>\s*`([^`]+)`[\s]*}/gs;

data.forEach(item => {
    if (item.inputs && item.inputs.includes('subTopics:')) {
        console.log('Fixing corrupted entry:', item.key);
        
        // Extract the swallowed subtopics
        let match;
        while ((match = regex.exec(item.inputs)) !== null) {
            newSubtopics.push({
                key: match[1],
                name: match[2],
                icon: match[3],
                inputs: match[4],
                promptTemplate: match[5]
            });
            console.log('  Extracted:', match[1]);
        }
        
        // Fix the current item's inputs
        // The inputs string starts with the actual inputs array, then has a closing bracket ], then promptTemplate, etc.
        const inputsMatch = item.inputs.match(/^(\[\s*{.*?}\s*\])/s);
        if (inputsMatch) {
            item.inputs = inputsMatch[1];
        } else {
            // Try to find just an empty array or simple array
            const simpleMatch = item.inputs.match(/^(\[.*?\])/s);
            if (simpleMatch) {
                item.inputs = simpleMatch[1];
            } else {
                item.inputs = "[]";
            }
        }
        console.log('  Fixed inputs for', item.key, 'to', item.inputs);
        
        // Wait, the promptTemplate of the current item belongs to the LAST swallowed subtopic!
        // Let's see: the regex in recover.cjs matched the promptTemplate at the very end.
        // So item.promptTemplate is actually the promptTemplate of the last swallowed subtopic.
        // And the current item's promptTemplate is inside item.inputs!
        const ptMatch = item.inputs.match(/promptTemplate:\s*\([^)]+\)\s*=>\s*`([^`]+)`/);
        if (ptMatch) {
            const currentItemPT = ptMatch[1];
            
            // The last swallowed subtopic's promptTemplate is item.promptTemplate
            const lastSwallowedPT = item.promptTemplate;
            
            item.promptTemplate = currentItemPT;
            
            // We need to assign lastSwallowedPT to the last extracted subtopic, but wait, the last extracted subtopic might not have been matched by our regex if its promptTemplate was outside the inputs string!
            // Actually, the last swallowed subtopic's promptTemplate is exactly `item.promptTemplate`.
            // So we should create a subtopic for it.
            
            // Let's find the last subtopic definition in the inputs string
            const lastSubtopicMatch = item.inputs.match(/{[\s]*key:\s*'([^']+)',[\s]*name:\s*'([^']+)',[\s]*icon:\s*React\.createElement\(([^)]+)\),[\s]*inputs:\s*(\[.*?\])$/s);
            if (lastSubtopicMatch) {
                newSubtopics.push({
                    key: lastSubtopicMatch[1],
                    name: lastSubtopicMatch[2],
                    icon: lastSubtopicMatch[3],
                    inputs: lastSubtopicMatch[4],
                    promptTemplate: lastSwallowedPT
                });
                console.log('  Extracted last:', lastSubtopicMatch[1]);
            }
        }
    }
});

console.log('Total extracted:', newSubtopics.length);
// Append new subtopics
data.push(...newSubtopics);

fs.writeFileSync('recovered_subtopics_fixed.json', JSON.stringify(data, null, 2));

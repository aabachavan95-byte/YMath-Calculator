const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');

const TOPICS = eval(content.replace('export const TOPICS', 'const TOPICS =').replace('import React from \'react\';', 'const React = { createElement: () => ({}) };') + '; TOPICS');

function checkDuplicates(items, path) {
    const keys = new Set();
    items.forEach((item, index) => {
        if (keys.has(item.key)) {
            console.log(`Duplicate key '${item.key}' in ${path} at index ${index}`);
        }
        keys.add(item.key);
        if (item.subTopics) {
            checkDuplicates(item.subTopics, `${path} -> ${item.key}`);
        }
    });
}

checkDuplicates(TOPICS, 'TOPICS');

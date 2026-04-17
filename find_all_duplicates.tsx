import { TOPICS } from './constants';

function findDuplicates(topics, path = '') {
    const keys = new Set();
    const duplicates = [];

    function traverse(items, currentPath) {
        const localKeys = new Set();
        items.forEach((item, index) => {
            if (localKeys.has(item.key)) {
                duplicates.push(`Duplicate key '${item.key}' at ${currentPath}[${index}]`);
            }
            localKeys.add(item.key);
            
            if (item.subTopics) {
                traverse(item.subTopics, `${currentPath}${item.key}.subTopics`);
            }
        });
    }

    // Check top-level TOPICS
    const topLevelKeys = new Set();
    topics.forEach((topic, index) => {
        if (topLevelKeys.has(topic.key)) {
            duplicates.push(`Duplicate top-level key '${topic.key}' at TOPICS[${index}]`);
        }
        topLevelKeys.add(topic.key);
        if (topic.subTopics) {
            traverse(topic.subTopics, `TOPICS[${index}].subTopics`);
        }
    });

    return duplicates;
}

const duplicates = findDuplicates(TOPICS);
if (duplicates.length > 0) {
    console.log('Found duplicates:');
    duplicates.forEach(d => console.log(d));
} else {
    console.log('No duplicates found.');
}

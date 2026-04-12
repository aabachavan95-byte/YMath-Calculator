const fs = require('fs');

const content = fs.readFileSync('constants.ts', 'utf8');

// Find the number_system subTopics array
const nsStart = content.indexOf("key: 'number_system',");
if (nsStart === -1) {
    console.error("Could not find number_system");
    process.exit(1);
}
const subTopicsStart = content.indexOf("subTopics: [", nsStart);
if (subTopicsStart === -1) {
    console.error("Could not find subTopics for number_system");
    process.exit(1);
}

// We need to find the balance of brackets for subTopics
let bracketCount = 0;
let subTopicsEnd = -1;
for (let i = subTopicsStart + 11; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') {
        if (bracketCount === 0) {
            subTopicsEnd = i + 1;
            break;
        }
        bracketCount--;
    }
}

if (subTopicsEnd === -1) {
    console.error("Could not find end of subTopics");
    process.exit(1);
}

const subTopicsContent = content.substring(subTopicsStart, subTopicsEnd);

function splitObjects(str) {
    const result = [];
    let current = "";
    let depth = 0;
    let inArray = 0;
    
    // Remove the outer subTopics: [ and ]
    const inner = str.trim().substring(12, str.trim().length - 1).trim();
    
    for (let i = 0; i < inner.length; i++) {
        const char = inner[i];
        if (char === '{') depth++;
        if (char === '}') depth--;
        if (char === '[') inArray++;
        if (char === ']') inArray--;
        
        if (char === ',' && depth === 0 && inArray === 0) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    if (current.trim()) result.push(current.trim());
    return result;
}

const categories = splitObjects(subTopicsContent);
console.log("Found categories:", categories.length);

if (categories.length >= 3) {
    const visible = categories.slice(0, 2);
    const hidden = categories.slice(2);
    
    const newSubTopics = `subTopics: [
      ${visible[0]},
      ${visible[1]},
      {
        key: 'ns_cat_more',
        name: 'आणखी विषय',
        icon: React.createElement(NumberSystemIcon),
        subTopics: [
          ${hidden.join(',\n          ')}
        ]
      }
    ]`;
    
    const newContent = content.substring(0, subTopicsStart) + newSubTopics + content.substring(subTopicsEnd);
    fs.writeFileSync('constants.ts', newContent);
    console.log("Successfully updated constants.ts");
} else {
    console.log("Not enough categories to group (found " + categories.length + ")");
}

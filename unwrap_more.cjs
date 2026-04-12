const fs = require('fs');
const content = fs.readFileSync('constants_new.ts', 'utf8');

// Find ns_cat_more
const moreStart = content.indexOf("key: 'ns_cat_more',");
if (moreStart === -1) {
    console.error("Could not find ns_cat_more");
    process.exit(1);
}

// Find the start of ns_cat_more object
let objStart = -1;
for (let i = moreStart; i >= 0; i--) {
    if (content[i] === '{') {
        objStart = i;
        break;
    }
}

// Find the end of ns_cat_more object
let bracketCount = 0;
let objEnd = -1;
for (let i = objStart; i < content.length; i++) {
    if (content[i] === '{') bracketCount++;
    if (content[i] === '}') {
        bracketCount--;
        if (bracketCount === 0) {
            objEnd = i + 1;
            break;
        }
    }
}

const moreObj = content.substring(objStart, objEnd);

// Extract subTopics from moreObj
const subTopicsStart = moreObj.indexOf("subTopics: [");
const subTopicsEnd = moreObj.lastIndexOf("]");
const innerSubTopics = moreObj.substring(subTopicsStart + 12, subTopicsEnd).trim();

// Now replace the moreObj in the original content with innerSubTopics
// We need to be careful about commas.
// moreObj was likely preceded by a comma.
const newContent = content.substring(0, objStart) + innerSubTopics + content.substring(objEnd);

fs.writeFileSync('constants.ts', newContent);
console.log("Successfully unwrapped ns_cat_more");

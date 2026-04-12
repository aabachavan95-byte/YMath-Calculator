const fs = require('fs');
const content = fs.readFileSync('constants_new.ts', 'utf8');
// Remove the stray commas on their own lines
// They look like:
// 31:       },
// 32: ,
// 33:       {
const cleaned = content.replace(/\n,\n/g, '\n');
fs.writeFileSync('constants.ts', cleaned);
console.log("Successfully restored constants.ts from constants_new.ts and cleaned up commas.");

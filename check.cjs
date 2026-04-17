const fs = require('fs');
const lines = fs.readFileSync('constants.ts', 'utf8').split('\n');
console.log(lines[1362].split('').map(c => c.charCodeAt(0)));

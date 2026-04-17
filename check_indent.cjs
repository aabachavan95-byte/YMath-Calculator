const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
[1360, 1361, 1362, 2138, 2139].forEach(ln => {
  const line = lines[ln - 1];
  console.log(`Line ${ln}: '${line}' (Indentation: ${line.search(/\S/)} spaces)`);
});

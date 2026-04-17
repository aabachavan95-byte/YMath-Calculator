const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
lines.splice(1341, 7,
  '      }',
  '    ]',
  '  },'
);
fs.writeFileSync('constants.ts', lines.join('\n'));

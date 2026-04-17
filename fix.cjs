const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');
const lines = content.split('\n');
lines.splice(1045, 5,
  '          {',
  '            key: "fact_simple",',
  '            name: "साधे घटक (Simple Factors)",',
  '            icon: React.createElement(QuestionIcon),',
  '            inputs: [{ key: "p", label: "प्रश्न", type: "textarea", placeholder: "उदा. १२ चे साधे घटक कोणते?" }],',
  '            promptTemplate: (i) => `साधे घटक (Simple Factors) वर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.p}`',
  '          }',
  '        ]',
  '      },'
);
fs.writeFileSync('constants.ts', lines.join('\n'));

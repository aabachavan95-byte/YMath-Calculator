const fs = require('fs');

let data = JSON.parse(fs.readFileSync('recovered_subtopics.json', 'utf-8'));

// Remove the corrupted entries
data = data.filter(item => !['int_ops', 'mixed_digit_rearrange', 'simplify', 'conv_1_2', 'a_and_b'].includes(item.key));

// Add the fixed entries
const fixedEntries = [
  {
    "key": "int_ops",
    "name": "पूर्णांकांची बेरीज, वजाबाकी, गुणाकार, भागाकार",
    "icon": "AlgebraIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. -५ + ८ ची बेरीज किती?' }]",
    "promptTemplate": "पूर्णांकांच्या बेरीज, वजाबाकी, गुणाकार, भागाकारावर आधारित प्रश्न सोडवा: ${i.p}"
  },
  {
    "key": "prime_num",
    "name": "मूळ संख्या (Prime Numbers)",
    "icon": "NumberSystemIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मूळ संख्या म्हणजे काय?' }]",
    "promptTemplate": "मूळ संख्यांवर (Prime Numbers) आधारित प्रश्न सोडवा: ${i.p}"
  },
  {
    "key": "mixed_digit_rearrange",
    "name": "अंकांची रचना बदलल्यावर HCF/LCM शोधणे",
    "icon": "ExamIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन अंकी लहानात लहान संख्या कोणती जिला ४, ६, ८ आणि १२ ने भागल्यावर प्रत्येक वेळी २ बाकी उरते?' }]",
    "promptTemplate": "अंकांची रचना बदलल्यावर HCF/LCM शोधण्यावर आधारित प्रश्न सोडवा: ${i.p}"
  },
  {
    "key": "abc_ratio",
    "name": "a : b : c प्रकार",
    "icon": "RatioIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर A:B = २:३ आणि B:C = ४:५ असेल, तर A:B:C चे प्रमाण किती?' }]",
    "promptTemplate": "a : b : c प्रकारचे प्रमाण काढा: ${i.p}"
  },
  {
    "key": "simplify",
    "name": "प्रमाण सोपे करणे",
    "icon": "RatioIcon",
    "inputs": "[\n              { key: 'a', label: 'पहिली संख्या', type: 'number', placeholder: '15' },\n              { key: 'b', label: 'दुसरी संख्या', type: 'number', placeholder: '20' }\n            ]",
    "promptTemplate": "Simplify ratio ${i.a}:${i.b} in Marathi."
  },
  {
    "key": "combine",
    "name": "प्रमाण एकत्र करणे",
    "icon": "RatioIcon",
    "inputs": "[{ key: 'prob', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर A:B = २:३ आणि B:C = ४:५ असेल, तर A:B:C चे प्रमाण किती?' }]",
    "promptTemplate": "Solve ratio combination ${i.prob} in Marathi."
  },
  {
    "key": "partnership_old",
    "name": "5) भागीदारी (Partnership)",
    "icon": "WagesIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ आणि ब यांनी अनुक्रमे १०,००० आणि १५,००० रुपयांची गुंतवणूक करून व्यवसाय सुरू केला, तर नफ्याचे प्रमाण काय असेल?' }]",
    "promptTemplate": "Solve partnership problem in Marathi: ${i.p}"
  },
  {
    "key": "per_hundred",
    "name": "शेकडा (Per Hundred) संकल्पना",
    "icon": "NumberSystemIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शेकडा म्हणजे काय?' }]",
    "promptTemplate": "शेकडा (Per Hundred) संकल्पना स्पष्ट करा: ${i.p}"
  },
  {
    "key": "conv_1_2",
    "name": "1/2 = 50%",
    "icon": "ConversionIcon",
    "inputs": "[]",
    "promptTemplate": "1/2 = 50% हे कसे येते ते स्पष्ट करा."
  },
  {
    "key": "conv_1_4",
    "name": "1/4 = 25%",
    "icon": "ConversionIcon",
    "inputs": "[]",
    "promptTemplate": "1/4 = 25% हे कसे येते ते स्पष्ट करा."
  },
  {
    "key": "conv_0_75",
    "name": "0.75 = 75%",
    "icon": "ConversionIcon",
    "inputs": "[]",
    "promptTemplate": "0.75 = 75% हे कसे येते ते स्पष्ट करा."
  },
  {
    "key": "conv_1_8",
    "name": "12.5% = 1/8",
    "icon": "ConversionIcon",
    "inputs": "[]",
    "promptTemplate": "12.5% = 1/8 हे कसे येते ते स्पष्ट करा."
  },
  {
    "key": "inc_on_orig",
    "name": "मूळ किमतीवर वाढ काढणे",
    "icon": "IncreaseDecreaseIcon",
    "inputs": "[{ key: 'orig', label: 'मूळ किंमत', type: 'number', placeholder: '100' }, { key: 'perc', label: 'वाढ (%)', type: 'number', placeholder: '20' }]",
    "promptTemplate": "${i.orig} वर ${i.perc}% वाढ काढण्याची पद्धत स्पष्ट करा."
  },
  {
    "key": "a_and_b",
    "name": "A आणि B मिळून काम पूर्ण करण्यास लागणारा वेळ",
    "icon": "TimeWorkIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ एक काम १० दिवसात आणि ब तेच काम १५ दिवसात करतो, तर दोघे मिळून ते काम किती दिवसात करतील?' }]",
    "promptTemplate": "A आणि B मिळून काम पूर्ण करण्यास लागणाऱ्या वेळेवर आधारित प्रश्न सोडवा: ${i.p}"
  },
  {
    "key": "random_exp",
    "name": "अनियमित प्रयोग (Random Experiment)",
    "icon": "QuestionIcon",
    "inputs": "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अनियमित प्रयोग म्हणजे काय?' }]",
    "promptTemplate": "अनियमित प्रयोग (Random Experiment) संकल्पना स्पष्ट करा: ${i.p}"
  }
];

data.push(...fixedEntries);

fs.writeFileSync('recovered_subtopics.json', JSON.stringify(data, null, 2));

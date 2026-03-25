const fs = require('fs');
let data = JSON.parse(fs.readFileSync('recovered_subtopics.json', 'utf-8'));

data.forEach(item => {
    if (item.key === 'int_ops') {
        item.inputs = "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. -५ + ८ ची बेरीज किती?' }]";
        item.promptTemplate = "पूर्णांकांच्या बेरीज, वजाबाकी, गुणाकार, भागाकारावर आधारित प्रश्न सोडवा: ${i.p}";
    }
    if (item.key === 'three_more_ratio') {
        item.inputs = "[]";
    }
    if (item.key === 'abc_ratio') {
        item.inputs = "[{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर A:B = २:३ आणि B:C = ४:५ असेल, तर A:B:C चे प्रमाण किती?' }]";
    }
    if (item.inputs && item.inputs.includes('subTopics:')) {
        console.log('Found corrupted inputs in:', item.key);
        // We will fix them manually below
    }
});

fs.writeFileSync('recovered_subtopics_fixed.json', JSON.stringify(data, null, 2));

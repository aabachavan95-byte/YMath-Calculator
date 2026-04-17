const fs = require('fs');

const subtopics = JSON.parse(fs.readFileSync('recovered_subtopics_clean_v2.json', 'utf-8'));

const mainTopics = [
  { key: 'number_system', name: 'संख्या प्रणाली', englishName: 'Number System', icon: 'NumberSystemIcon', keywords: ['nat', 'whole', 'int', 'even', 'odd', 'prime', 'composite', 'div', 'twin', 'co', 'real', 'num', 'bodmas', 'frac', 'dec', 'rat', 'irrat', 'add', 'mul', 'zero', 'digit', 'mixed_high_level'] },
  { key: 'factors_lcm_hcf', name: 'घटक, लसावि आणि मसावि', englishName: 'Factors, LCM & HCF', icon: 'LcmHcfIcon', keywords: ['fact', 'lcm', 'hcf', 'multiple'] },
  { key: 'exponents', name: 'घातांक आणि करणी', englishName: 'Exponents & Roots', icon: 'ExponentIcon', keywords: ['exp', 'root', 'surd', 'sq', 'cube'] },
  { key: 'ratio_proportion', name: 'प्रमाण आणि समानुपात', englishName: 'Ratio & Proportion', icon: 'RatioIcon', keywords: ['ratio', 'prop', 'simplify', 'combine', 'share', 'mixture', 'alligation'] },
  { key: 'percentage', name: 'टक्केवारी', englishName: 'Percentage', icon: 'PercentageIcon', keywords: ['perc', 'what_is_perc', 'imp_conversions', 'inc', 'dec', 'pop', 'salary', 'marks', 'pass', 'boy', 'census', 'vote', 'exam', 'tax', 'price', 'per_'] },
  { key: 'profit_loss', name: 'नफा आणि तोटा', englishName: 'Profit & Loss', icon: 'ProfitLossIcon', keywords: ['pl', 'profit', 'loss', 'discount', 'mp', 'cp', 'sp', 'dishonest', 'succ', 'dealer', 'sell', 'buy', 'cost'] },
  { key: 'interest', name: 'सरळव्याज आणि चक्रवाढ व्याज', englishName: 'Simple & Compound Interest', icon: 'InterestIcon', keywords: ['interest', 'simple', 'compound', 'si', 'ci', 'amount', 'annual', 'rate', 'principal', 'loan', 'diff_2', 'diff_3', 'find_p', 'find_r', 'investment'] },
  { key: 'average', name: 'सरासरी', englishName: 'Average', icon: 'AverageIcon', keywords: ['avg', 'mean', 'weighted', 'age', 'score', 'run', 'temp', 'diff_groups'] },
  { key: 'time_work', name: 'वेळ आणि काम', englishName: 'Time & Work', icon: 'TimeWorkIcon', keywords: ['tw', 'time', 'work', 'pipe', 'wage', 'efficiency', 'man', 'woman', 'child', 'day', 'hour', 'tank', 'cistern', 'a_alone', 'a_and_b'] },
  { key: 'speed_time_distance', name: 'वेग, वेळ आणि अंतर', englishName: 'Speed, Time & Distance', icon: 'SpeedIcon', keywords: ['std', 'speed', 'dist', 'train', 'boat', 'race', 'stream', 'car', 'bus', 'walk', 'run', 'dir', 'overtaking', 'water', 'stop', 'turn', 'reach'] },
  { key: 'area_volume', name: 'क्षेत्रफळ आणि घनफळ', englishName: 'Area & Volume', icon: 'AreaVolumeIcon', keywords: ['av', 'area', 'vol', 'square', 'rect', 'circle', 'triangle', 'sphere', 'cylinder', 'cone', 'cube', 'cuboid', 'rhombus', 'trap', 'poly', 'tri_', 'para_', 'rhom_', 'cyl_', 'hemi_'] },
  { key: 'perimeter', name: 'परिमिती', englishName: 'Perimeter', icon: 'PerimeterIcon', keywords: ['perim', 'circum', 'wp_fence', 'wp_money'] },
  { key: 'algebra', name: 'बीजगणित', englishName: 'Algebra', icon: 'AlgebraIcon', keywords: ['alg', 'lin', 'var', 'const', 'eq', 'poly', 'quad', 'root', 'x_more', 'form_words', 'ver_check_ans'] },
  { key: 'series', name: 'मालिका', englishName: 'Series', icon: 'APIcon', keywords: ['ap', 'gp', 'hp', 'series', 'prog', 'seq', 'ss_sum_n'] },
  { key: 'probability', name: 'संभाव्यता', englishName: 'Probability', icon: 'ProbabilityIcon', keywords: ['prob', 'perm', 'comb', 'arr', 'sel', 'coin', 'dice', 'card', 'ball', 'chance', 'event', 'mut', 'indep', 'group_form'] }
];

const subTopicKeys = new Set();
const grouped = {};
mainTopics.forEach(t => grouped[t.key] = []);

subtopics.forEach(sub => {
  // Ensure unique key
  let finalKey = sub.key;
  let counter = 1;
  while (subTopicKeys.has(finalKey)) {
    finalKey = `${sub.key}_${counter++}`;
  }
  subTopicKeys.add(finalKey);
  sub.key = finalKey;

  // Standardization (all problem inputs to 'problem_text')
  // And fix input syntax if needed
  if (sub.inputs.includes("key: 'p'")) {
    sub.inputs = sub.inputs.replace(/key:\s*'p'/g, "key: 'problem_text'");
    sub.promptTemplate = sub.promptTemplate.replace(/\${i\.p}/g, "${i.problem_text}");
  }

  // Assign to group
  let matched = false;
  
  // Specific overrides based on subtopic key
  const nameLower = sub.name.toLowerCase();
  const keyLower = sub.key.toLowerCase();
  
  if (keyLower.includes('prob') || keyLower.includes('coin') || keyLower.includes('dice') || keyLower.includes('card') || keyLower.includes('ball')) {
    grouped['probability'].push(sub);
    matched = true;
  } else if (keyLower.includes('area') || keyLower.includes('vol') || keyLower.includes('peri')) {
    grouped['area_volume'].push(sub);
    matched = true;
  } else if (keyLower.includes('train') || keyLower.includes('boat') || keyLower.includes('speed')) {
    grouped['speed_time_distance'].push(sub);
    matched = true;
  }

  if (!matched) {
    for (const topic of mainTopics) {
      if (topic.keywords.some(kw => sub.key.startsWith(kw) || sub.key.includes(kw))) {
        grouped[topic.key].push(sub);
        matched = true;
        break;
      }
    }
  }
  if (!matched) {
    grouped['number_system'].push(sub); // Default to number system
  }
});

let out = `import React from 'react';
import type { Topic } from './types';
import {
  PercentageIcon, RatioIcon, InterestIcon, ProfitLossIcon, TimeWorkIcon, SpeedIcon,
  AverageIcon, AreaVolumeIcon, PerimeterIcon, AlgebraIcon, APIcon, ExponentIcon,
  GPIcon, NumberSystemIcon, LcmHcfIcon, ProbabilityIcon, IncreaseDecreaseIcon, DiscountIcon, ExamIcon, MixtureIcon, ComparisonIcon, WagesIcon, PipeIcon, TrainIcon, BoatIcon, ConversionIcon, TriangleIcon, SphereIcon, CylinderConeIcon, SetTheoryIcon, CoinIcon, DiceIcon, CardsIcon, BallsIcon, LightbulbIcon, SearchIcon, QuestionIcon, ClockIcon
} from './components/Icons';

export const expertPromptGenerator = (topicName: string) => {
    return () => \`Generate a single, challenging, multi-step math problem based on the topic of '\${topicName}', suitable for a competitive exam like UPSC or MPSC in India. The problem must be in Marathi. Then provide the final answer and a detailed explanation. The explanation must be in Marathi and formatted with markdown. It must include the following sections in order: the problem statement under the heading '**प्रश्न:**', a detailed step-by-step solution under '**सविस्तर स्पष्टीकरण:**' (this section MUST be a numbered list, e.g., 1. Step one... 2. Step two...), an explanation of any advanced concepts used under '**प्रगत संकल्पना:**', any relevant shortcuts under '**शॉर्टकट पद्धत:**', and finally, a section on common mistakes related to this type of problem under the heading '**टाळण्यायोग्य चुका:**'.\`;
};

export const TOPICS: Topic[] = [
`;

mainTopics.forEach((topic, index) => {
  out += `  {
    key: '${topic.key}',
    name: '${topic.name}',
    englishName: '${topic.englishName}',
    icon: React.createElement(${topic.icon}),
    subTopics: [
`;
  
  const subs = grouped[topic.key];
  subs.forEach((sub, subIndex) => {
    out += `      {
        key: '${sub.key}',
        name: '${sub.name.replace(/'/g, "\\'")}',
        icon: React.createElement(${sub.icon}),
        inputs: ${sub.inputs},
        promptTemplate: (i) => \`${sub.promptTemplate}\`,
        mcqPromptTemplate: (diff) => \`Generate a challenging multiple choice question about '${sub.name.replace(/'/g, "\\'")}' in Marathi for MPSC exam at $\{diff\} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.\`,
        expertPromptTemplate: expertPromptGenerator('${sub.name.replace(/'/g, "\\'")}')
      }${subIndex < subs.length - 1 ? ',' : ''}\n`;
  });

  out += `    ]
  }${index < mainTopics.length - 1 ? ',' : ''}\n`;
});

out += `];\n`;

fs.writeFileSync('constants.ts', out);
console.log('Successfully restructured constants.ts');

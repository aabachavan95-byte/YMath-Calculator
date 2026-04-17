import React from 'react';
import type { Topic } from './types';
import {
  PercentageIcon, RatioIcon, InterestIcon, ProfitLossIcon, TimeWorkIcon, SpeedIcon,
  AverageIcon, AreaVolumeIcon, PerimeterIcon, AlgebraIcon, APIcon, ExponentIcon,
  GPIcon, NumberSystemIcon, LcmHcfIcon, ProbabilityIcon, IncreaseDecreaseIcon, DiscountIcon, ExamIcon, MixtureIcon, ComparisonIcon, WagesIcon, PipeIcon, TrainIcon, BoatIcon, ConversionIcon, TriangleIcon, SphereIcon, CylinderConeIcon, SetTheoryIcon, CoinIcon, DiceIcon, CardsIcon, BallsIcon, LightbulbIcon, SearchIcon, QuestionIcon, ClockIcon
} from './components/Icons';

export const expertPromptGenerator = (topicName: string) => {
    return () => `Generate a single, challenging, multi-step math problem based on the topic of '${topicName}', suitable for a competitive exam like UPSC or MPSC in India. The problem must be in Marathi. Then provide the final answer and a detailed explanation. The explanation must be in Marathi and formatted with markdown. It must include the following sections in order: the problem statement under the heading '**प्रश्न:**', a detailed step-by-step solution under '**सविस्तर स्पष्टीकरण:**' (this section MUST be a numbered list, e.g., 1. Step one... 2. Step two...), an explanation of any advanced concepts used under '**प्रगत संकल्पना:**', any relevant shortcuts under '**शॉर्टकट पद्धत:**', and finally, a section on common mistakes related to this type of problem under the heading '**टाळण्यायोग्य चुका:**'.`;
};

export const TOPICS: Topic[] = [
  {
    key: 'number_system',
    name: 'संख्या प्रणाली',
    englishName: 'Number System',
    icon: React.createElement(NumberSystemIcon),
    subTopics: [
      {
        key: 'nat_def',
        name: 'नैसर्गिक संख्यांची व्याख्या',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नैसर्गिक संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `नैसर्गिक संख्यांच्या व्याख्येवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नैसर्गिक संख्यांची व्याख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नैसर्गिक संख्यांची व्याख्या')
      },
      {
        key: 'nat_prop',
        name: 'नैसर्गिक संख्यांचे गुणधर्म',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नैसर्गिक संख्यांचे गुणधर्म सांगा' }],
        promptTemplate: (i) => `नैसर्गिक संख्यांच्या गुणधर्मांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नैसर्गिक संख्यांचे गुणधर्म' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नैसर्गिक संख्यांचे गुणधर्म')
      },
      {
        key: 'nat_sum_avg',
        name: 'नैसर्गिक संख्यांची बेरीज व सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या १० नैसर्गिक संख्यांची बेरीज आणि सरासरी किती होईल?' }],
        promptTemplate: (i) => `नैसर्गिक संख्यांची बेरीज व सरासरी काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नैसर्गिक संख्यांची बेरीज व सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नैसर्गिक संख्यांची बेरीज व सरासरी')
      },
      {
        key: 'nat_consec',
        name: 'सलग नैसर्गिक संख्या (Consecutive Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन सलग नैसर्गिक संख्यांची बेरीज ३३ आहे, तर त्या संख्या कोणत्या?' }],
        promptTemplate: (i) => `सलग नैसर्गिक संख्यांवर (Consecutive Numbers) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग नैसर्गिक संख्या (Consecutive Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग नैसर्गिक संख्या (Consecutive Numbers)')
      },
      {
        key: 'nat_consec_even_odd',
        name: 'सलग सम व विषम संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पाच सलग सम संख्यांची बेरीज १०० आहे, तर सर्वात मोठी संख्या कोणती?' }],
        promptTemplate: (i) => `सलग सम व विषम संख्यांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग सम व विषम संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग सम व विषम संख्या')
      },
      {
        key: 'whole_def',
        name: 'पूर्ण संख्यांची व्याख्या',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पूर्ण संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `पूर्ण संख्यांच्या व्याख्येवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पूर्ण संख्यांची व्याख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पूर्ण संख्यांची व्याख्या')
      },
      {
        key: 'whole_diff',
        name: 'नैसर्गिक व पूर्ण संख्यांमधील फरक',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नैसर्गिक आणि पूर्ण संख्यांमधील फरक सांगा' }],
        promptTemplate: (i) => `नैसर्गिक व पूर्ण संख्यांमधील फरकावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नैसर्गिक व पूर्ण संख्यांमधील फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नैसर्गिक व पूर्ण संख्यांमधील फरक')
      },
      {
        key: 'whole_prop',
        name: 'पूर्ण संख्यांचे गुणधर्म',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पूर्ण संख्यांच्या बेरीज आणि गुणाकाराचे गुणधर्म स्पष्ट करा.' }],
        promptTemplate: (i) => `पूर्ण संख्यांच्या गुणधर्मांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पूर्ण संख्यांचे गुणधर्म' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पूर्ण संख्यांचे गुणधर्म')
      },
      {
        key: 'int_pos_neg',
        name: 'सकारात्मक व नकारात्मक संख्या',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. -५ आणि +३ यांची बेरीज किती होईल?' }],
        promptTemplate: (i) => `सकारात्मक व नकारात्मक संख्यांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सकारात्मक व नकारात्मक संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सकारात्मक व नकारात्मक संख्या')
      },
      {
        key: 'int_ops',
        name: 'पूर्णांकांची बेरीज, वजाबाकी, गुणाकार, भागाकार',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `पूर्णांकांची बेरीज, वजाबाकी, गुणाकार, भागाकार वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पूर्णांकांची बेरीज, वजाबाकी, गुणाकार, भागाकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पूर्णांकांची बेरीज, वजाबाकी, गुणाकार, भागाकार')
      },
      {
        key: 'composite_num',
        name: 'संयुक्त संख्या (Composite Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संयुक्त संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `संयुक्त संख्यांवर (Composite Numbers) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संयुक्त संख्या (Composite Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संयुक्त संख्या (Composite Numbers)')
      },
      {
        key: 'even_num',
        name: 'सम संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सम संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `सम संख्यांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सम संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सम संख्या')
      },
      {
        key: 'odd_num',
        name: 'विषम संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विषम संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `विषम संख्यांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विषम संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विषम संख्या')
      },
      {
        key: 'even_odd_rules_add',
        name: 'सम + सम, सम + विषम, विषम + विषम नियम',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सम आणि विषम संख्येची बेरीज काय येते?' }],
        promptTemplate: (i) => `सम व विषम संख्यांच्या बेरजेच्या नियमांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सम + सम, सम + विषम, विषम + विषम नियम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सम + सम, सम + विषम, विषम + विषम नियम')
      },
      {
        key: 'even_odd_rules_mul',
        name: 'सम × विषम नियम',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका सम आणि एका विषम संख्येचा गुणाकार नेहमी सम असतो की विषम?' }],
        promptTemplate: (i) => `सम व विषम संख्यांच्या गुणाकाराच्या नियमांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सम × विषम नियम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सम × विषम नियम')
      },
      {
        key: 'div_9',
        name: '9 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ७२९ या संख्येला ९ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 9 ने भाग जातो का? 9 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '9 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('9 ने विभाज्यता')
      },
      {
        key: 'div_10',
        name: '10 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ५०० या संख्येला १० ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 10 ने भाग जातो का? 10 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '10 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('10 ने विभाज्यता')
      },
      {
        key: 'div_11',
        name: '11 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १३३१ या संख्येला ११ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 11 ने भाग जातो का? 11 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '11 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('11 ने विभाज्यता')
      },
      {
        key: 'prime_1_100',
        name: '1 ते 100 पर्यंतच्या मूळ संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1 ते 100 मध्ये किती मूळ संख्या आहेत?' }],
        promptTemplate: (i) => `1 ते 100 पर्यंतच्या मूळ संख्यांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1 ते 100 पर्यंतच्या मूळ संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1 ते 100 पर्यंतच्या मूळ संख्या')
      },
      {
        key: 'twin_prime',
        name: 'Twin Prime Numbers',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जोडमूळ संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `Twin Prime Numbers (जोडमूळ संख्या) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Twin Prime Numbers' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Twin Prime Numbers')
      },
      {
        key: 'co_prime',
        name: 'Co-prime Numbers',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सहमूळ संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `Co-prime Numbers (सहमूळ संख्या) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Co-prime Numbers' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Co-prime Numbers')
      },
      {
        key: 'div_2',
        name: '2 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १२४ या संख्येला २ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 2 ने भाग जातो का? 2 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2 ने विभाज्यता')
      },
      {
        key: 'div_3',
        name: '3 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १२३ या संख्येला ३ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 3 ने भाग जातो का? 3 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3 ने विभाज्यता')
      },
      {
        key: 'div_4',
        name: '4 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ५१२ या संख्येला ४ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 4 ने भाग जातो का? 4 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4 ने विभाज्यता')
      },
      {
        key: 'div_5',
        name: '5 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. २५५ या संख्येला ५ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 5 ने भाग जातो का? 5 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5 ने विभाज्यता')
      },
      {
        key: 'div_6',
        name: '6 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. २१६ या संख्येला ६ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 6 ने भाग जातो का? 6 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '6 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('6 ने विभाज्यता')
      },
      {
        key: 'div_7',
        name: '7 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ३४३ या संख्येला ७ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 7 ने भाग जातो का? 7 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '7 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('7 ने विभाज्यता')
      },
      {
        key: 'div_8',
        name: '8 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १०२४ या संख्येला ८ ने पूर्ण भाग जातो का?' }],
        promptTemplate: (i) => `${i.number_val} ला 8 ने भाग जातो का? 8 ची कसोटी स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '8 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('8 ने विभाज्यता')
      },
      {
        key: 'div_9_1',
        name: '9 ने विभाज्यता',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `9 ने विभाज्यता वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '9 ने विभाज्यता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('9 ने विभाज्यता')
      },
      {
        key: 'real_prop',
        name: 'वास्तविक संख्यांचे गुणधर्म',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वास्तविक संख्यांच्या क्रमाने येणाऱ्या गुणधर्मांचे उदाहरण द्या.' }],
        promptTemplate: (i) => `वास्तविक संख्यांच्या गुणधर्मांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वास्तविक संख्यांचे गुणधर्म' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वास्तविक संख्यांचे गुणधर्म')
      },
      {
        key: 'bodmas',
        name: 'BODMAS Rule',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 + 5 * 2' }],
        promptTemplate: (i) => `BODMAS नियमाचा वापर करून खालील पदावली सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'BODMAS Rule' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('BODMAS Rule')
      },
      {
        key: 'multiples',
        name: 'गुणक (Multiples)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ७ चे पहिले पाच गुणक (Multiples) शोधा.' }],
        promptTemplate: (i) => `${i.number_val} चे पहिले पाच गुणक (Multiples) शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'गुणक (Multiples)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('गुणक (Multiples)')
      },
      {
        key: 'prime_fact',
        name: 'Prime Factorization Method',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ६० चे मूळ अवयव (Prime Factors) पाडा.' }],
        promptTemplate: (i) => `${i.number_val} चे मूळ अवयव (Prime Factors) पाडा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Prime Factorization Method' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Prime Factorization Method')
      },
      {
        key: 'simple_frac',
        name: 'साधे अपूर्णांक',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ३/४ + १/२ ची बेरीज किती होईल?' }],
        promptTemplate: (i) => `साध्या अपूर्णांकांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधे अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधे अपूर्णांक')
      },
      {
        key: 'mixed_frac',
        name: 'मिश्र अपूर्णांक',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २ पूर्णांक १/२ चे अंशाधिक अपूर्णांकात रूपांतर करा.' }],
        promptTemplate: (i) => `मिश्र अपूर्णांकांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मिश्र अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मिश्र अपूर्णांक')
      },
      {
        key: 'equiv_frac',
        name: 'समतुल्य अपूर्णांक',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २/३ चे दोन समतुल्य अपूर्णांक लिहा.' }],
        promptTemplate: (i) => `समतुल्य अपूर्णांकांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समतुल्य अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समतुल्य अपूर्णांक')
      },
      {
        key: 'decimal_frac',
        name: 'दशांश अपूर्णांक',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ०.७५ + ०.२५ ची बेरीज किती?' }],
        promptTemplate: (i) => `दशांश अपूर्णांकांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दशांश अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दशांश अपूर्णांक')
      },
      {
        key: 'frac_to_dec',
        name: 'अपूर्णांक ते दशांश रूपांतरण',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'अपूर्णांक', type: 'text', placeholder: 'उदा. ३/४ चे दशांश अपूर्णांकात रूपांतर करा.' }],
        promptTemplate: (i) => `${i.problem_text} चे दशांश अपूर्णांकात रूपांतर करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपूर्णांक ते दशांश रूपांतरण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपूर्णांक ते दशांश रूपांतरण')
      },
      {
        key: 'rational_num',
        name: 'परिमेय संख्या (Rational Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमेय संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `परिमेय संख्यांवर (Rational Numbers) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमेय संख्या (Rational Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमेय संख्या (Rational Numbers)')
      },
      {
        key: 'irrational_num',
        name: 'अपरिमेय संख्या (Irrational Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अपरिमेय संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `अपरिमेय संख्यांवर (Irrational Numbers) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपरिमेय संख्या (Irrational Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपरिमेय संख्या (Irrational Numbers)')
      },
      {
        key: 'rat_irrat_diff',
        name: 'उदाहरणे व फरक',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमेय आणि अपरिमेय संख्यांमधील फरक' }],
        promptTemplate: (i) => `परिमेय आणि अपरिमेय संख्यांमधील फरक आणि उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उदाहरणे व फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उदाहरणे व फरक')
      },
      {
        key: 'real_def',
        name: 'परिमेय + अपरिमेय संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वास्तविक संख्या म्हणजे काय?' }],
        promptTemplate: (i) => `वास्तविक संख्यांच्या (परिमेय + अपरिमेय) व्याख्येवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमेय + अपरिमेय संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमेय + अपरिमेय संख्या')
      },
      {
        key: 'num_sys_class',
        name: 'संख्या प्रणालीचे वर्गीकरण',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `संख्या प्रणालीचे वर्गीकरण वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संख्या प्रणालीचे वर्गीकरण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संख्या प्रणालीचे वर्गीकरण')
      },
      {
        key: 'fact_twin_prime',
        name: 'जोडमूळ संख्या (Twin Prime Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. ५ आणि ७ या जोडमूळ संख्या (Twin Prime Numbers) आहेत का?' }],
        promptTemplate: (i) => `${i.number_val} या जोडमूळ संख्या (Twin Prime Numbers) आहेत का ते तपासा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'जोडमूळ संख्या (Twin Prime Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('जोडमूळ संख्या (Twin Prime Numbers)')
      },
      {
        key: 'bodmas_1',
        name: 'BODMAS Rule',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 + 5 * 2' }],
        promptTemplate: (i) => `BODMAS नियमाचा वापर करून खालील पदावली सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'BODMAS Rule' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('BODMAS Rule')
      },
      {
        key: 'add_mul_rules',
        name: 'संख्यांची बेरीज व गुणाकाराचे नियम',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५ + (३ + २) = (५ + ३) + २ हा कोणता नियम आहे?' }],
        promptTemplate: (i) => `संख्यांच्या बेरीज व गुणाकाराच्या नियमांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संख्यांची बेरीज व गुणाकाराचे नियम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संख्यांची बेरीज व गुणाकाराचे नियम')
      },
      {
        key: 'zero_rules',
        name: 'शून्याचे नियम',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणत्याही संख्येला शून्याने गुणल्यास उत्तर काय येते?' }],
        promptTemplate: (i) => `शून्याच्या नियमांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शून्याचे नियम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शून्याचे नियम')
      },
      {
        key: 'neg_num_rules',
        name: 'नकारात्मक संख्यांचे नियम',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (-४) × (-३) चे उत्तर काय येईल?' }],
        promptTemplate: (i) => `नकारात्मक (ऋण) संख्यांच्या नियमांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नकारात्मक संख्यांचे नियम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नकारात्मक संख्यांचे नियम')
      },
      {
        key: 'ex_prime_id',
        name: 'मूळ संख्या ओळखा',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. खालीलपैकी मूळ संख्या कोणती?' }],
        promptTemplate: (i) => `मूळ संख्या ओळखण्यावर आधारित स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मूळ संख्या ओळखा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मूळ संख्या ओळखा')
      },
      {
        key: 'fact_mul_div',
        name: 'गुणाकार व भागाकार संबंध',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १२ चे सर्व विभाजक (Factors) लिहा.' }],
        promptTemplate: (i) => `घटक काढताना गुणाकार व भागाकार यांच्यातील संबंध स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'गुणाकार व भागाकार संबंध' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('गुणाकार व भागाकार संबंध')
      },
      {
        key: 'fact_prime_comp',
        name: 'अभाज्य व संयुक्त संख्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १ ते २० मधील सर्व मूळ (Prime) संख्यांची यादी करा.' }],
        promptTemplate: (i) => `अभाज्य (Prime) व संयुक्त (Composite) संख्यांमधील फरक आणि घटकांशी संबंध स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अभाज्य व संयुक्त संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अभाज्य व संयुक्त संख्या')
      },
      {
        key: 'fact_div_method',
        name: 'साधी भागाकार पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ३६ चे सर्व घटक साध्या भागाकार पद्धतीने शोधा.' }],
        promptTemplate: (i) => `साध्या भागाकार पद्धतीने ${i.number_val} चे घटक शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधी भागाकार पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधी भागाकार पद्धत')
      },
      {
        key: 'fact_prime_fact',
        name: 'अभाज्य गुणाकार पद्धत (Prime Factorization)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ६० चे अभाज्य गुणाकार पद्धतीने (Prime Factorization) घटक पाडा.' }],
        promptTemplate: (i) => `अभाज्य गुणाकार पद्धतीने (Prime Factorization) ${i.number_val} चे घटक पाडा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अभाज्य गुणाकार पद्धत (Prime Factorization)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अभाज्य गुणाकार पद्धत (Prime Factorization)')
      },
      {
        key: 'fact_prime',
        name: 'अभाज्य घटक (Prime Factors)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १२ चे अभाज्य घटक (Prime Factors) शोधा.' }],
        promptTemplate: (i) => `${i.number_val} चे अभाज्य घटक (Prime Factors) शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अभाज्य घटक (Prime Factors)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अभाज्य घटक (Prime Factors)')
      },
      {
        key: 'fact_common',
        name: 'समान घटक (Common Factors)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२ आणि १८ मधील समान घटक (Common Factors) कोणते आहेत?' }],
        promptTemplate: (i) => `${i.number_val} मधील समान घटक (Common Factors) शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान घटक (Common Factors)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान घटक (Common Factors)')
      },
      {
        key: 'fact_count',
        name: 'सर्व घटकांची संख्या काढणे',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १०० च्या एकूण घटकांची संख्या किती आहे?' }],
        promptTemplate: (i) => `${i.number_val} च्या एकूण घटकांची संख्या (Total Number of Factors) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सर्व घटकांची संख्या काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सर्व घटकांची संख्या काढणे')
      },
      {
        key: 'fact_coprime',
        name: 'सह-अभाज्य संख्या (Co-prime Numbers)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. ८ आणि १५ या सह-अभाज्य संख्या (Co-prime Numbers) आहेत का?' }],
        promptTemplate: (i) => `${i.number_val} या सह-अभाज्य संख्या (Co-prime Numbers) आहेत का ते तपासा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सह-अभाज्य संख्या (Co-prime Numbers)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सह-अभाज्य संख्या (Co-prime Numbers)')
      },
      {
        key: 'mixed_digit_rearrange',
        name: 'अंकांची रचना बदलल्यावर HCF/LCM शोधणे',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन अंकी लहानात लहान संख्या कोणती जिला ४, ६, ८ आणि १२ ने भागल्यावर प्रत्येक वेळी २ बाकी उरते?' }],
        promptTemplate: (i) => `अंकांची रचना बदलल्यावर HCF/LCM शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अंकांची रचना बदलल्यावर HCF/LCM शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अंकांची रचना बदलल्यावर HCF/LCM शोधणे')
      },
      {
        key: 'lcm_mul_method',
        name: 'साधी गुणाकार पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. ३ आणि ४ चा साध्या गुणाकार पद्धतीने LCM काढा.' }],
        promptTemplate: (i) => `साध्या गुणाकार पद्धतीने ${i.number_val} चा LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधी गुणाकार पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधी गुणाकार पद्धत')
      },
      {
        key: 'lcm_prime_method',
        name: 'अभाज्य घटक पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२ आणि १५ चा अभाज्य घटक पद्धतीने LCM काढा.' }],
        promptTemplate: (i) => `अभाज्य घटक पद्धतीने ${i.number_val} चा LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अभाज्य घटक पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अभाज्य घटक पद्धत')
      },
      {
        key: 'lcm_div_method',
        name: 'विभागणी पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. २०, ३० आणि ४० चा विभागणी पद्धतीने LCM काढा.' }],
        promptTemplate: (i) => `विभागणी पद्धतीने ${i.number_val} चा LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विभागणी पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विभागणी पद्धत')
      },
      {
        key: 'lcm_frac',
        name: 'अपूर्णांकांचा LCM',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'अपूर्णांक', type: 'text', placeholder: 'उदा. १/२ आणि ३/४ या अपूर्णांकांचा LCM किती होईल?' }],
        promptTemplate: (i) => `अपूर्णांकांचा (${i.problem_text}) LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपूर्णांकांचा LCM' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपूर्णांकांचा LCM')
      },
      {
        key: 'lcm_dec',
        name: 'दशांश संख्यांचा LCM',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'दशांश संख्या', type: 'text', placeholder: 'उदा. ०.६ आणि १.२ या दशांश संख्यांचा LCM काढा.' }],
        promptTemplate: (i) => `दशांश संख्यांचा (${i.problem_text}) LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दशांश संख्यांचा LCM' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दशांश संख्यांचा LCM')
      },
      {
        key: 'hcf_gcd_concept',
        name: 'GCD संकल्पना',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १८ आणि २४ चा मोठ्यात मोठा सामाईक विभाजक (GCD) कोणता?' }],
        promptTemplate: (i) => `Greatest Common Divisor (GCD) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'GCD संकल्पना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('GCD संकल्पना')
      },
      {
        key: 'hcf_prime_method',
        name: 'अभाज्य घटक पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. २४ आणि ३६ चा अभाज्य घटक पद्धतीने HCF काढा.' }],
        promptTemplate: (i) => `अभाज्य घटक पद्धतीने ${i.number_val} चा HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अभाज्य घटक पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अभाज्य घटक पद्धत')
      },
      {
        key: 'hcf_common_method',
        name: 'सामान्य घटक पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२, १८ आणि २४ चा सामान्य घटक पद्धतीने HCF काढा.' }],
        promptTemplate: (i) => `सामान्य घटक पद्धतीने ${i.number_val} चा HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सामान्य घटक पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सामान्य घटक पद्धत')
      },
      {
        key: 'hcf_frac',
        name: 'अपूर्णांकांचा HCF',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'अपूर्णांक', type: 'text', placeholder: 'उदा. २/३ आणि ४/९ या अपूर्णांकांचा HCF किती होईल?' }],
        promptTemplate: (i) => `अपूर्णांकांचा (${i.problem_text}) HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपूर्णांकांचा HCF' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपूर्णांकांचा HCF')
      },
      {
        key: 'lcm_hcf_formula',
        name: 'सूत्र: LCM × HCF = दोन संख्यांचा गुणाकार',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचा गुणाकार २०० आहे आणि त्यांचा मसावि (HCF) ५ आहे, तर त्यांचा लसावि (LCM) किती असेल?' }],
        promptTemplate: (i) => `LCM × HCF = दोन संख्यांचा गुणाकार या सूत्रावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सूत्र: LCM × HCF = दोन संख्यांचा गुणाकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सूत्र: LCM × HCF = दोन संख्यांचा गुणाकार')
      },
      {
        key: 'mixed_coprime',
        name: 'सह-अभाज्य संख्यांवरील प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन सह-अभाज्य संख्यांचा गुणाकार ११७ आहे, तर त्यांचा लसावि (LCM) किती असेल?' }],
        promptTemplate: (i) => `सह-अभाज्य संख्यांवरील स्पर्धा परीक्षेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सह-अभाज्य संख्यांवरील प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सह-अभाज्य संख्यांवरील प्रश्न')
      },
      {
        key: 'mixed_digit_rearrange_1',
        name: 'अंकांची रचना बदलल्यावर HCF/LCM शोधणे',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `अंकांची रचना बदलल्यावर HCF/LCM शोधणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अंकांची रचना बदलल्यावर HCF/LCM शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अंकांची रचना बदलल्यावर HCF/LCM शोधणे')
      },
      {
        key: 'divide_amount',
        name: 'एकूण रक्कम दिली असल्यास भाग काढणे',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १००० रुपये अ आणि ब मध्ये २:३ या प्रमाणात वाटल्यास प्रत्येकाला किती रुपये मिळतील?' }],
        promptTemplate: (i) => `एकूण रक्कम दिली असल्यास प्रत्येक भाग काढा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकूण रक्कम दिली असल्यास भाग काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकूण रक्कम दिली असल्यास भाग काढणे')
      },
      {
        key: 'exp_div_pow',
        name: '(a/b)ⁿ = aⁿ/bⁿ',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (४/५)^२ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `भागाकाराचा घात नियमावर ((a/b)ⁿ = aⁿ/bⁿ) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '(a/b)ⁿ = aⁿ/bⁿ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('(a/b)ⁿ = aⁿ/bⁿ')
      },
      {
        key: 'exp_zero',
        name: 'a⁰ = 1',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १००^० चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `शून्य घातांक नियमावर (a⁰ = 1) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'a⁰ = 1' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('a⁰ = 1')
      },
      {
        key: 'exp_frac_conv',
        name: 'भिन्न घातांकांचे रूपांतर',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ४^१.५ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `भिन्न घातांकांच्या रूपांतरावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भिन्न घातांकांचे रूपांतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भिन्न घातांकांचे रूपांतर')
      },
      {
        key: 'exp_complex',
        name: 'संमिश्र उदाहरणे',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (२^३ × ४^२) ÷ ८^२ चे साधीकरण करा.' }],
        promptTemplate: (i) => `घातांकाच्या संमिश्र उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संमिश्र उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संमिश्र उदाहरणे')
      },
      {
        key: 'exp_frac_simp',
        name: 'घातांक असलेले अपूर्णांक',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (२/३)^२ × (३/२)^-१ चे साधीकरण करा.' }],
        promptTemplate: (i) => `घातांक असलेल्या अपूर्णांकांच्या साधीकरणावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घातांक असलेले अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घातांक असलेले अपूर्णांक')
      },
      {
        key: 'exp_large_num',
        name: 'मोठ्या संख्यांचे स्वरूप (10ⁿ)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1000000 ला घातांक रूपात लिहा' }],
        promptTemplate: (i) => `मोठ्या संख्यांच्या घातांक स्वरूपावर (10ⁿ) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मोठ्या संख्यांचे स्वरूप (10ⁿ)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मोठ्या संख्यांचे स्वरूप (10ⁿ)')
      },
      {
        key: 'exp_growth_decay',
        name: 'वाढ-घट समस्यांमध्ये घातांक',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या दरवर्षी १०% ने वाढते, तर ३ वर्षांनंतर ती किती होईल?' }],
        promptTemplate: (i) => `वाढ-घट समस्यांमधील घातांकाच्या उपयोगावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वाढ-घट समस्यांमध्ये घातांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वाढ-घट समस्यांमध्ये घातांक')
      },
      {
        key: 'sq_long_div',
        name: 'लांब पद्धतीने वर्गमूळ काढणे',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 625 चे वर्गमूळ लांब पद्धतीने काढा' }],
        promptTemplate: (i) => `लांब पद्धतीने वर्गमूळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लांब पद्धतीने वर्गमूळ काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लांब पद्धतीने वर्गमूळ काढणे')
      },
      {
        key: 'surd_conv',
        name: '√50 = 5√2 सारखे रूपांतर',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √72' }],
        promptTemplate: (i) => `करणीच्या रूपांतरावर (उदा. √50 = 5√2) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '√50 = 5√2 सारखे रूपांतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('√50 = 5√2 सारखे रूपांतर')
      },
      {
        key: 'surd_add_sub',
        name: 'करणींची बेरीज-वजाबाकी',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 3√2 + 5√2' }],
        promptTemplate: (i) => `करणींच्या बेरीज-वजाबाकीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'करणींची बेरीज-वजाबाकी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('करणींची बेरीज-वजाबाकी')
      },
      {
        key: 'surd_mul_div',
        name: 'करणींचे गुणाकार-भागाकार',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √2 * √8' }],
        promptTemplate: (i) => `करणींच्या गुणाकार-भागाकारावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'करणींचे गुणाकार-भागाकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('करणींचे गुणाकार-भागाकार')
      },
      {
        key: 'rat_simple',
        name: '1/√a',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १/√२ या संख्येच्या छेदाचे परिमेयकरण (Rationalization) करा.' }],
        promptTemplate: (i) => `1/√a स्वरूपातील करणीच्या Rationalization वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1/√a' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1/√a')
      },
      {
        key: 'rat_conj',
        name: '1/(a + √b)',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १/(२ + √३) या संख्येच्या छेदाचे परिमेयकरण करा.' }],
        promptTemplate: (i) => `1/(a + √b) स्वरूपातील करणीच्या Rationalization वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1/(a + √b)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1/(a + √b)')
      },
      {
        key: 'rat_complex',
        name: 'संमिश्र करणीचे Rationalization',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (√३ + √२) / (√३ - √२) चे साधीकरण करा.' }],
        promptTemplate: (i) => `संमिश्र करणीच्या Rationalization वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संमिश्र करणीचे Rationalization' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संमिश्र करणीचे Rationalization')
      },
      {
        key: 'surd_real',
        name: 'वास्तविक जीवनातील उदाहरणे',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १० मीटर लांब शिडी भिंतीला टेकवली आहे, जर तिचे खालचे टोक भिंतीपासून ६ मीटर लांब असेल, तर ती भिंतीवर किती उंचीवर पोहचेल?' }],
        promptTemplate: (i) => `करणीच्या वास्तविक जीवनातील उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वास्तविक जीवनातील उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वास्तविक जीवनातील उदाहरणे')
      },
      {
        key: 'mixed_frac_exp',
        name: 'भिन्न + घातांक',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (1/2)^2 + (1/4)^1/2' }],
        promptTemplate: (i) => `भिन्न आणि घातांक एकत्रित असलेल्या उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भिन्न + घातांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भिन्न + घातांक')
      },
      {
        key: 'mixed_surd_frac',
        name: 'करणी + अपूर्णांक',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √2 + 1/2' }],
        promptTemplate: (i) => `करणी आणि अपूर्णांक एकत्रित असलेल्या उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'करणी + अपूर्णांक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('करणी + अपूर्णांक')
      },
      {
        key: 'mixed_high_level',
        name: 'उच्च पातळीवरील स्पर्धा परीक्षेचे प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (२^३ × ४^२) ÷ ८^२ चे साधीकरण करा.' }],
        promptTemplate: (i) => `घातांक आणि करणीवरील उच्च पातळीवरील स्पर्धा परीक्षेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उच्च पातळीवरील स्पर्धा परीक्षेचे प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उच्च पातळीवरील स्पर्धा परीक्षेचे प्रश्न')
      },
      {
        key: 'what_is_ratio',
        name: 'प्रमाण म्हणजे काय?',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ३ : ५ या प्रमाणाचा अर्थ काय?' }],
        promptTemplate: (i) => `प्रमाण (Ratio) म्हणजे काय हे a : b या स्वरूपाची समज देऊन स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण म्हणजे काय?')
      },
      {
        key: 'simple_ratio',
        name: 'साधे प्रमाण (Simple Ratio)',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २० आणि ३० चे साधे प्रमाण (Simple Ratio) किती होईल?' }],
        promptTemplate: (i) => `साधे प्रमाण (Simple Ratio) स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधे प्रमाण (Simple Ratio)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधे प्रमाण (Simple Ratio)')
      },
      {
        key: 'compound_ratio',
        name: 'संयुक्त प्रमाण (Compound Ratio)',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २:३ आणि ४:५ चे संयुक्त प्रमाण (Compound Ratio) काढा.' }],
        promptTemplate: (i) => `संयुक्त प्रमाण (Compound Ratio) स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संयुक्त प्रमाण (Compound Ratio)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संयुक्त प्रमाण (Compound Ratio)')
      },
      {
        key: 'inverse_ratio',
        name: 'व्यस्त प्रमाण (Inverse Ratio)',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ३:४ चे व्यस्त प्रमाण (Inverse Ratio) काय असेल?' }],
        promptTemplate: (i) => `व्यस्त प्रमाण (Inverse Ratio) स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'व्यस्त प्रमाण (Inverse Ratio)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('व्यस्त प्रमाण (Inverse Ratio)')
      },
      {
        key: 'divide_same_factor',
        name: 'समान गुणकाने भाग देणे',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. १५:२५ या प्रमाणाला साध्या रूपात रूपांतरित करा.' }],
        promptTemplate: (i) => `${i.problem_text} या प्रमाणाला समान गुणकाने भाग देऊन साधे करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान गुणकाने भाग देणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान गुणकाने भाग देणे')
      },
      {
        key: 'fraction_ratio',
        name: 'भिन्नांचे प्रमाण',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. १/२ : १/३ या अपूर्णांकांच्या प्रमाणाला साध्या रूपात रूपांतरित करा.' }],
        promptTemplate: (i) => `${i.problem_text} या भिन्नांच्या प्रमाणाला साध्या प्रमाणात रूपांतरित करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भिन्नांचे प्रमाण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भिन्नांचे प्रमाण')
      },
      {
        key: 'decimal_ratio',
        name: 'दशांश संख्यांचे प्रमाण',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. १.५ : २.५ या दशांश संख्यांच्या प्रमाणाला साध्या रूपात रूपांतरित करा.' }],
        promptTemplate: (i) => `${i.problem_text} या दशांश संख्यांच्या प्रमाणाला साध्या प्रमाणात रूपांतरित करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दशांश संख्यांचे प्रमाण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दशांश संख्यांचे प्रमाण')
      },
      {
        key: 'inc_dec_ratio',
        name: 'संख्येत वाढ/घट झाल्यास बदल',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २:३ या प्रमाणात ५ मिळवल्यास नवीन प्रमाण काय होईल?' }],
        promptTemplate: (i) => `एका संख्येत वाढ/घट झाल्यास प्रमाणातील बदल स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संख्येत वाढ/घट झाल्यास बदल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संख्येत वाढ/घट झाल्यास बदल')
      },
      {
        key: 'find_number_ratio',
        name: 'दिलेल्या प्रमाणात संख्या शोधणे',
        icon: React.createElement(SearchIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचे प्रमाण ३:४ आहे आणि त्यांची बेरीज ७० आहे, तर त्या संख्या कोणत्या?' }],
        promptTemplate: (i) => `दिलेल्या प्रमाणात संख्या शोधा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिलेल्या प्रमाणात संख्या शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिलेल्या प्रमाणात संख्या शोधणे')
      },
      {
        key: 'discount_calc',
        name: 'सूट काढणे (Discount Calculation)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १००० रुपयांच्या वस्तूवर १०% सूट दिल्यास ती कितीला पडेल?' }],
        promptTemplate: (i) => `सूट (Discount) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सूट काढणे (Discount Calculation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सूट काढणे (Discount Calculation)')
      },
      {
        key: 'succ_discount',
        name: 'सलग सूट (Successive Discount)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% आणि २०% अशी सलग दोनदा सूट दिल्यास एकूण सूट किती?' }],
        promptTemplate: (i) => `सलग सूट (Successive Discount) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग सूट (Successive Discount)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग सूट (Successive Discount)')
      },
      {
        key: 'ratio_perc',
        name: 'प्रमाण व टक्केवारी',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वर्गात मुले आणि मुलींचे प्रमाण ३:२ आहे, तर मुलींची टक्केवारी किती?' }],
        promptTemplate: (i) => `प्रमाण व टक्केवारी (Ratio & Percentage) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व टक्केवारी')
      },
      {
        key: 'ratio_pl',
        name: 'प्रमाण व नफा-तोटा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. खरेदी किंमत आणि विक्री किंमत यांचे प्रमाण ४:५ आहे, तर नफा टक्केवारी किती?' }],
        promptTemplate: (i) => `प्रमाण व नफा-तोटा (Ratio & Profit-Loss) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व नफा-तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व नफा-तोटा')
      },
      {
        key: 'ratio_avg',
        name: 'प्रमाण व सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन संख्यांचे प्रमाण २:३:५ आहे आणि त्यांची सरासरी ३० आहे, तर सर्वात मोठी संख्या कोणती?' }],
        promptTemplate: (i) => `प्रमाण व सरासरी (Ratio & Average) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व सरासरी')
      },
      {
        key: 'ratio_interest',
        name: 'प्रमाण व साधे/मिश्र व्याज',
        icon: React.createElement(InterestIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन रकमांचे प्रमाण ३:४ आहे आणि त्यांच्या व्याजाचे प्रमाण ५:६ आहे, तर त्यांच्या मुदतीचे प्रमाण काय असेल?' }],
        promptTemplate: (i) => `प्रमाण व साधे/मिश्र व्याज (Ratio & Interest) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व साधे/मिश्र व्याज' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व साधे/मिश्र व्याज')
      },
      {
        key: 'ratio_partnership',
        name: 'प्रमाण व भागीदारी (Partnership)',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ आणि ब यांनी २:३ या प्रमाणात गुंतवणूक केली, तर वर्षाअखेर झालेल्या ५००० नफ्यात अ चा वाटा किती?' }],
        promptTemplate: (i) => `प्रमाण व भागीदारी (Ratio & Partnership) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व भागीदारी (Partnership)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व भागीदारी (Partnership)')
      },
      {
        key: 'perc_to_frac_dec',
        name: '% चे भिन्न आणि दशांशात रूपांतर',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'percentage', label: 'टक्केवारी', type: 'number', unit: '%', placeholder: '25' }],
        promptTemplate: (i) => `${i.percentage}% चे भिन्न (Fraction) आणि दशांश (Decimal) मध्ये रूपांतर करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '% चे भिन्न आणि दशांशात रूपांतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('% चे भिन्न आणि दशांशात रूपांतर')
      },
      {
        key: 'frac_dec_to_perc',
        name: 'भिन्न / दशांश ते टक्केवारी रूपांतर',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'अपूर्णांक/दशांश', type: 'text', placeholder: '3/4 किंवा 0.75' }],
        promptTemplate: (i) => `${i.problem_text} चे टक्केवारीमध्ये रूपांतर करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भिन्न / दशांश ते टक्केवारी रूपांतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भिन्न / दशांश ते टक्केवारी रूपांतर')
      },
      {
        key: 'conv_1_2',
        name: '1/2 = 50%',
        icon: React.createElement(ConversionIcon),
        inputs: [],
        promptTemplate: (i) => `${i.orig} वर ${i.perc}% वाढ काढण्याची पद्धत स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1/2 = 50%' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1/2 = 50%')
      },
      {
        key: 'dec_on_orig',
        name: 'मूळ किमतीवर घट काढणे',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `मूळ किमतीवर घट काढणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मूळ किमतीवर घट काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मूळ किमतीवर घट काढणे')
      },
      {
        key: 'ci_rate',
        name: '4. Rate शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणत्या दराने ३००० रुपयांचे २ वर्षांचे चक्रवाढ व्याज ६३० रुपये होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये व्याजदर (Rate) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4. Rate शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4. Rate शोधणे')
      },
      {
        key: 'ci_variable_rate',
        name: '9. वाढणारा किंवा बदलणारा व्याजदर',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या वर्षी ५% व दुसऱ्या वर्षी १०% दराने ५००० रुपयांचे २ वर्षांचे चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `वाढणारा किंवा बदलणारा व्याजदर असलेल्या चक्रवाढ व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '9. वाढणारा किंवा बदलणारा व्याजदर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('9. वाढणारा किंवा बदलणारा व्याजदर')
      },
      {
        key: 'compare_marks',
        name: 'दोन विद्यार्थ्यांच्या टक्केवारीची तुलना',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'तुलना प्रश्न', type: 'textarea', placeholder: 'उदा. अ ला ब पेक्षा १०% जास्त गुण मिळाले, तर ब ला अ पेक्षा किती टक्के कमी गुण मिळाले?' }],
        promptTemplate: (i) => `दोन विद्यार्थ्यांच्या गुणांची तुलना करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन विद्यार्थ्यांच्या टक्केवारीची तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन विद्यार्थ्यांच्या टक्केवारीची तुलना')
      },
      {
        key: 'depreciation_rate',
        name: 'घट दर (Depreciation type)',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `घट दर (Depreciation type) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घट दर (Depreciation type)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घट दर (Depreciation type)')
      },
      {
        key: 'inflation_rate',
        name: 'महागाई दर',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. साखरेची किंमत २०% ने वाढली, तर खर्च वाढू नये म्हणून वापरात किती टक्के घट करावी लागेल?' }],
        promptTemplate: (i) => `महागाई दर आणि टक्केवारी आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'महागाई दर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('महागाई दर')
      },
      {
        key: 'exp_inc_dec',
        name: 'खर्चात वाढ-घट',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका व्यक्तीच्या उत्पन्नाच्या ७०% खर्च होतो, जर त्याचे उत्पन्न २०% ने वाढले आणि खर्च १०% ने वाढला, तर बचतीत किती टक्के बदल होईल?' }],
        promptTemplate: (i) => `उत्पन्न आणि खर्च आधारित वाढ-घट प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'खर्चात वाढ-घट' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('खर्चात वाढ-घट')
      },
      {
        key: 'ratio_to_perc',
        name: 'Ratio ते Percentage',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'rate', label: 'प्रमाण (Ratio)', type: 'text', placeholder: 'उदा. ३:५' }],
        promptTemplate: (i) => `${i.rate} या प्रमाणाचे टक्केवारीमध्ये रूपांतर करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Ratio ते Percentage' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Ratio ते Percentage')
      },
      {
        key: 'perc_to_ratio',
        name: 'Percentage ते Ratio',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'percentage', label: 'टक्केवारी', type: 'number', unit: '%', placeholder: 'उदा. ६०' }],
        promptTemplate: (i) => `${i.percentage}% चे प्रमाण (Ratio) मध्ये रूपांतर करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Percentage ते Ratio' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Percentage ते Ratio')
      },
      {
        key: 'data_interp',
        name: 'Data Interpretation (Pie Chart / Bar Graph आधारित टक्केवारी)',
        icon: React.createElement(SearchIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका पाय चार्टमध्ये शिक्षणावर ९० अंश कोन दर्शवला आहे, तर शिक्षणावरील खर्च एकूण खर्चाच्या किती टक्के आहे?' }],
        promptTemplate: (i) => `Data Interpretation आधारित टक्केवारीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Data Interpretation (Pie Chart / Bar Graph आधारित टक्केवारी)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Data Interpretation (Pie Chart / Bar Graph आधारित टक्केवारी)')
      },
      {
        key: 'pop_growth_formula',
        name: 'Population Growth Formula आधारित प्रश्न',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या २०,००० आहे आणि ती दरवर्षी ५% दराने वाढते, तर २ वर्षांनंतरची लोकसंख्या किती असेल?' }],
        promptTemplate: (i) => `Population Growth Formula वापरून प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Population Growth Formula आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Population Growth Formula आधारित प्रश्न')
      },
      {
        key: 'compound_inc_dec',
        name: 'Compound Increase / Decrease',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका यंत्राची किंमत दरवर्षी १०% ने कमी होते, जर त्याची आजची किंमत १,००,००० असेल, तर २ वर्षांनंतरची किंमत किती?' }],
        promptTemplate: (i) => `Compound Increase/Decrease आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Compound Increase / Decrease' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Compound Increase / Decrease')
      },
      {
        key: 'profit_dis_comb',
        name: 'Profit + Discount Combined Problems',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूवर १०% सूट देऊनही २०% नफा होतो, तर छापील किंमत खरेदी किमतीच्या किती टक्के जास्त आहे?' }],
        promptTemplate: (i) => `नफा आणि सूट एकत्रित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Profit + Discount Combined Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Profit + Discount Combined Problems')
      },
      {
        key: 'perc_mult_trick',
        name: 'Percentage Multiplication Trick',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५०० चे ८% काढण्याऐवजी ८ चे ५००% काढणे सोपे आहे का?' }],
        promptTemplate: (i) => `Percentage Multiplication Trick स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Percentage Multiplication Trick' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Percentage Multiplication Trick')
      },
      {
        key: 'discount_calc_1',
        name: 'सूट काढणे (Discount Calculation)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १००० रुपयांच्या वस्तूवर १०% सूट दिल्यास ती कितीला पडेल?' }],
        promptTemplate: (i) => `सूट (Discount) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सूट काढणे (Discount Calculation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सूट काढणे (Discount Calculation)')
      },
      {
        key: 'succ_discount_1',
        name: 'सलग सूट (Successive Discount)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% आणि २०% अशी सलग दोनदा सूट दिल्यास एकूण सूट किती?' }],
        promptTemplate: (i) => `सलग सूट (Successive Discount) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग सूट (Successive Discount)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग सूट (Successive Discount)')
      },
      {
        key: 'std_formula',
        name: 'वेग = अंतर / वेळ (Speed = Distance / Time)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेग = अंतर / वेळ...' }],
        promptTemplate: (i) => `वेग = अंतर / वेळ (Speed = Distance / Time) या सूत्रावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेग = अंतर / वेळ (Speed = Distance / Time)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेग = अंतर / वेळ (Speed = Distance / Time)')
      },
      {
        key: 'unit_conv',
        name: 'एकक रूपांतर (km/hr to m/s and vice versa)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ७२ किमी/तास म्हणजे किती मी/से?' }],
        promptTemplate: (i) => `वेग, वेळ आणि अंतरातील एकक रूपांतर (Unit Conversion) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकक रूपांतर (km/hr to m/s and vice versa)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकक रूपांतर (km/hr to m/s and vice versa)')
      },
      {
        key: 'profit_after_discount',
        name: 'MP वर सवलत देऊनही ठराविक नफा',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूवर २०% सूट देऊनही १२% नफा होतो, तर छापील किंमत खरेदी किमतीच्या किती पट आहे?' }],
        promptTemplate: (i) => `MP वर सवलत देऊनही ठराविक नफा मिळवण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'MP वर सवलत देऊनही ठराविक नफा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('MP वर सवलत देऊनही ठराविक नफा')
      },
      {
        key: 'diff_discount_diff_customer',
        name: 'एकाच वस्तूवर वेगवेगळ्या ग्राहकांना वेगवेगळ्या सवलती',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका ग्राहकाला १०% व दुसऱ्याला १५% सूट दिली, त्यांच्या विक्री किमतीतील फरक ५० रुपये असल्यास छापील किंमत किती?' }],
        promptTemplate: (i) => `एकाच वस्तूवर वेगवेगळ्या ग्राहकांना वेगवेगळ्या सवलती देण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकाच वस्तूवर वेगवेगळ्या ग्राहकांना वेगवेगळ्या सवलती' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकाच वस्तूवर वेगवेगळ्या ग्राहकांना वेगवेगळ्या सवलती')
      },
      {
        key: 'si_rate',
        name: '2. व्याजदर शोधणे (Rate – R)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांचे २ वर्षांचे सरळव्याज ५०० रुपये असल्यास व्याजाचा दर किती?' }],
        promptTemplate: (i) => `साध्या व्याजामध्ये व्याजदर (Rate) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2. व्याजदर शोधणे (Rate – R)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2. व्याजदर शोधणे (Rate – R)')
      },
      {
        key: 'si_compare_time',
        name: '7. वेगवेगळ्या कालावधीसाठी SI तुलना',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रकमेचे ५ वर्षांचे सरळव्याज मुदलाच्या १/४ पट असल्यास व्याजाचा दर किती?' }],
        promptTemplate: (i) => `वेगवेगळ्या कालावधीसाठी साध्या व्याजाची (SI) तुलना करण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '7. वेगवेगळ्या कालावधीसाठी SI तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('7. वेगवेगळ्या कालावधीसाठी SI तुलना')
      },
      {
        key: 'ci_rate_1',
        name: '4. Rate शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ८००० रुपयांचे ३ वर्षांत ९२६१ रुपये होतात, तर चक्रवाढ व्याजाचा दर किती?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये व्याजदर (Rate) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4. Rate शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4. Rate शोधणे')
      },
      {
        key: 'ci_variable_rate_1',
        name: '9. वाढणारा किंवा बदलणारा व्याजदर',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांवर पहिल्या वर्षी ५% आणि दुसऱ्या वर्षी १०% दराने चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `वाढणारा किंवा बदलणारा व्याजदर असलेल्या चक्रवाढ व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '9. वाढणारा किंवा बदलणारा व्याजदर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('9. वाढणारा किंवा बदलणारा व्याजदर')
      },
      {
        key: 'increasing_rate',
        name: '2. वाढत्या व्याजदरावर प्रश्न',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या ३ वर्षांसाठी दर ५%, पुढील ४ वर्षांसाठी ८% आणि ७ वर्षांनंतर १०% असल्यास १२ वर्षांचे व्याज किती?' }],
        promptTemplate: (i) => `वाढत्या व्याजदरावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2. वाढत्या व्याजदरावर प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2. वाढत्या व्याजदरावर प्रश्न')
      },
      {
        key: 'amount_change_rate_change',
        name: '4. व्याजदर बदलल्यावर Amount बदल',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रकमेचे ठराविक दराने ३ वर्षांचे सरळव्याज ८०० रुपये आहे. जर दर ४% ने वाढवला तर व्याज किती वाढेल?' }],
        promptTemplate: (i) => `व्याजदर बदलल्यावर एकूण रकमेत (Amount) होणाऱ्या बदलावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4. व्याजदर बदलल्यावर Amount बदल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4. व्याजदर बदलल्यावर Amount बदल')
      },
      {
        key: 'reverse_interest',
        name: '6. Reverse Interest Problems',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रकमेचे ३ वर्षांचे सरळव्याज मुदलाच्या ९/२५ पट आहे, तर व्याजाचा दर किती?' }],
        promptTemplate: (i) => `Reverse Interest Problems वर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '6. Reverse Interest Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('6. Reverse Interest Problems')
      },
      {
        key: 'avg_formula',
        name: 'सूत्र: एकूण बेरीज ÷ एकूण संख्या',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०, १५, २०, २५ आणि ३० या संख्यांची सरासरी काढा.' }],
        promptTemplate: (i) => `एकूण बेरीज ÷ एकूण संख्या या सूत्रावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सूत्र: एकूण बेरीज ÷ एकूण संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सूत्र: एकूण बेरीज ÷ एकूण संख्या')
      },
      {
        key: 'some_numbers',
        name: 'काही संख्यांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या पाच मूळ संख्यांची सरासरी काढा.' }],
        promptTemplate: (i) => `काही संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काही संख्यांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काही संख्यांची सरासरी')
      },
      {
        key: 'consecutive_numbers',
        name: 'सलग (Consecutive) संख्यांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १ ते ५० पर्यंतच्या सर्व नैसर्गिक संख्यांची सरासरी किती?' }],
        promptTemplate: (i) => `सलग (Consecutive) संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग (Consecutive) संख्यांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग (Consecutive) संख्यांची सरासरी')
      },
      {
        key: 'even_odd_numbers',
        name: 'सम व विषम संख्यांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १ ते २० मधील सर्व सम संख्यांची सरासरी किती?' }],
        promptTemplate: (i) => `सम व विषम संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सम व विषम संख्यांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सम व विषम संख्यांची सरासरी')
      },
      {
        key: 'first_n_natural',
        name: 'पहिल्या n नैसर्गिक संख्यांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या १०० नैसर्गिक संख्यांची सरासरी किती?' }],
        promptTemplate: (i) => `पहिल्या n नैसर्गिक संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिल्या n नैसर्गिक संख्यांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिल्या n नैसर्गिक संख्यांची सरासरी')
      },
      {
        key: 'consecutive_5_7_9',
        name: 'सलग 5, 7, 9 संख्या',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५ सलग विषम संख्यांची सरासरी ३५ आहे, तर सर्वात मोठी संख्या कोणती?' }],
        promptTemplate: (i) => `सलग 5, 7, 9 संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग 5, 7, 9 संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग 5, 7, 9 संख्या')
      },
      {
        key: 'monthly_income',
        name: 'महिन्याचे सरासरी उत्पन्न',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका व्यक्तीचे पहिल्या ३ महिन्यांचे सरासरी उत्पन्न ५००० रुपये आहे.' }],
        promptTemplate: (i) => `महिन्याच्या सरासरी उत्पन्नावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'महिन्याचे सरासरी उत्पन्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('महिन्याचे सरासरी उत्पन्न')
      },
      {
        key: 'income_variation',
        name: 'काही दिवस जास्त/कमी उत्पन्न असल्यास',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका मजुराचे २० दिवसांचे सरासरी उत्पन्न ४०० रुपये आहे, शेवटच्या ५ दिवसात ते ५०० झाले.' }],
        promptTemplate: (i) => `काही दिवस जास्त/कमी उत्पन्न असल्यास सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काही दिवस जास्त/कमी उत्पन्न असल्यास' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काही दिवस जास्त/कमी उत्पन्न असल्यास')
      },
      {
        key: 'missing_number',
        name: 'Missing Number Type',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ९ संख्यांची सरासरी ५० आहे, पहिल्या ५ ची ४५ आणि शेवटच्या ५ ची ५५ आहे, तर ५ वी संख्या कोणती?' }],
        promptTemplate: (i) => `Missing Number Type सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Missing Number Type' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Missing Number Type')
      },
      {
        key: 'combined_avg',
        name: 'Combined Average',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन वर्गांची सरासरी अनुक्रमे ६० आणि ७० असून विद्यार्थी संख्या ३० आणि २० आहे.' }],
        promptTemplate: (i) => `Combined Average यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Combined Average' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Combined Average')
      },
      {
        key: 'work_rate_time',
        name: 'काम = दर × वेळ (Work = Rate × Time)',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. काम = दर × वेळ...' }],
        promptTemplate: (i) => `काम = दर × वेळ (Work = Rate × Time) या सूत्रावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काम = दर × वेळ (Work = Rate × Time)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काम = दर × वेळ (Work = Rate × Time)')
      },
      {
        key: 'efficiency_concept',
        name: 'कार्यक्षमता (Efficiency) संकल्पना',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कार्यक्षमता...' }],
        promptTemplate: (i) => `कार्यक्षमता (Efficiency) संकल्पनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कार्यक्षमता (Efficiency) संकल्पना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कार्यक्षमता (Efficiency) संकल्पना')
      },
      {
        key: 'event_types',
        name: 'घटनेचे प्रकार (Types of Events)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अशक्य घटना, निश्चित घटना...' }],
        promptTemplate: (i) => `घटनेच्या विविध प्रकारांवर (Types of Events) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घटनेचे प्रकार (Types of Events)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घटनेचे प्रकार (Types of Events)')
      },
      {
        key: 'factorial_concept',
        name: 'फॅक्टोरियल संकल्पना (Factorial - n!)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'number_val', label: 'संख्या (n)', type: 'number', placeholder: 'उदा. 5' }],
        promptTemplate: (i) => `फॅक्टोरियल (n!) संकल्पना स्पष्ट करा आणि ${i.number_val}! ची किंमत काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'फॅक्टोरियल संकल्पना (Factorial - n!)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('फॅक्टोरियल संकल्पना (Factorial - n!)')
      },
      {
        key: 'comb_sel_no_ord',
        name: 'विनाक्रम निवड (Selection without order)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `संयोग (Combination) मधील विनाक्रम निवड संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विनाक्रम निवड (Selection without order)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विनाक्रम निवड (Selection without order)')
      },
      {
        key: 'perm_vs_comb',
        name: 'क्रमच आणि संयोग यातील फरक',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्रमच आणि संयोग यातील फरक...' }],
        promptTemplate: (i) => `क्रमच (Permutation) आणि संयोग (Combination) मधील फरक स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्रमच आणि संयोग यातील फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्रमच आणि संयोग यातील फरक')
      },
      {
        key: 'comm_sel',
        name: 'समिती निवड (Committee Selection)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `समिती निवडीवर (Committee Selection) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समिती निवड (Committee Selection)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समिती निवड (Committee Selection)')
      },
      {
        key: 'tri_compare',
        name: 'दोन त्रिकोणांची तुलना',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन त्रिकोणांची तुलना...' }],
        promptTemplate: (i) => `दोन त्रिकोणांच्या क्षेत्रफळाच्या तुलनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन त्रिकोणांची तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन त्रिकोणांची तुलना')
      },
      {
        key: 'trap_compare',
        name: 'क्षेत्रफळ तुलना',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्षेत्रफळ तुलना...' }],
        promptTemplate: (i) => `समलंब चतुर्भुजाच्या क्षेत्रफळाच्या तुलनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्षेत्रफळ तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्षेत्रफळ तुलना')
      },
      {
        key: 'comp_semi_rect',
        name: 'अर्धवर्तुळ + आयत',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धवर्तुळ + आयत...' }],
        promptTemplate: (i) => `अर्धवर्तुळ आणि आयत यांच्या मिश्र आकृतीच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धवर्तुळ + आयत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धवर्तुळ + आयत')
      },
      {
        key: 'comp_circ_sq',
        name: 'वर्तुळ + चौकोन',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वर्तुळ + चौकोन...' }],
        promptTemplate: (i) => `वर्तुळ आणि चौकोन यांच्या मिश्र आकृतीच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वर्तुळ + चौकोन' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वर्तुळ + चौकोन')
      },
      {
        key: 'comp_shaded',
        name: 'भाग वजा करणे (शेडेड भाग)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. भाग वजा करणे...' }],
        promptTemplate: (i) => `मिश्र आकृतीतील शेडेड (Shaded) भागाचे क्षेत्रफळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भाग वजा करणे (शेडेड भाग)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भाग वजा करणे (शेडेड भाग)')
      },
      {
        key: 'comp_garden',
        name: 'बाग/मैदान प्रकारचे प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाग/मैदान...' }],
        promptTemplate: (i) => `बाग किंवा मैदान प्रकारच्या मिश्र आकृतीच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाग/मैदान प्रकारचे प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाग/मैदान प्रकारचे प्रश्न')
      },
      {
        key: 'cone_rh',
        name: 'त्रिज्या व उंची',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. त्रिज्या व उंची...' }],
        promptTemplate: (i) => `शंकूची त्रिज्या व उंची दिलेली असताना घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'त्रिज्या व उंची' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('त्रिज्या व उंची')
      },
      {
        key: 'cone_slant',
        name: 'तिरपी उंची (Slant height)',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तिरपी उंची...' }],
        promptTemplate: (i) => `शंकूच्या तिरपी उंचीवर (Slant height) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तिरपी उंची (Slant height)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तिरपी उंची (Slant height)')
      },
      {
        key: 'cone_csa',
        name: 'वक्र पृष्ठफळ',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वक्र पृष्ठफळ...' }],
        promptTemplate: (i) => `शंकूच्या वक्र पृष्ठफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वक्र पृष्ठफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वक्र पृष्ठफळ')
      },
      {
        key: 'cone_in_cyl',
        name: 'सिलिंडरमध्ये शंकू बसवणे',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सिलिंडरमध्ये शंकू...' }],
        promptTemplate: (i) => `सिलिंडरमध्ये शंकू बसवण्यावर आधारित घनफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सिलिंडरमध्ये शंकू बसवणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सिलिंडरमध्ये शंकू बसवणे')
      },
      {
        key: 'hemi_compare',
        name: 'गोळ्याशी तुलना',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. गोळ्याशी तुलना...' }],
        promptTemplate: (i) => `अर्धगोळा आणि गोळा यांच्या तुलनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'गोळ्याशी तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('गोळ्याशी तुलना')
      },
      {
        key: 'comp_tank_time',
        name: 'पाण्याची टाकी भरायला लागणारा वेळ',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. टाकी भरायला लागणारा वेळ...' }],
        promptTemplate: (i) => `पाण्याची टाकी भरायला लागणाऱ्या वेळेवर आधारित घनफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पाण्याची टाकी भरायला लागणारा वेळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पाण्याची टाकी भरायला लागणारा वेळ')
      },
      {
        key: 'comp_melt_remake',
        name: 'वितळवून नवीन आकृती तयार करणे',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वितळवून नवीन आकृती...' }],
        promptTemplate: (i) => `वितळवून नवीन आकृती तयार करण्यावर आधारित स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वितळवून नवीन आकृती तयार करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वितळवून नवीन आकृती तयार करणे')
      },
      {
        key: 'comp_joined',
        name: 'दोन किंवा अधिक आकृत्या जोडून तयार झालेली आकृती',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन किंवा अधिक आकृत्या...' }],
        promptTemplate: (i) => `दोन किंवा अधिक आकृत्या जोडून तयार झालेल्या आकृतीच्या परिमितीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन किंवा अधिक आकृत्या जोडून तयार झालेली आकृती' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन किंवा अधिक आकृत्या जोडून तयार झालेली आकृती')
      },
      {
        key: 'comp_boundary',
        name: 'बाहेरील सीमारेषा ओळखून परिमिती काढणे',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाहेरील सीमारेषा...' }],
        promptTemplate: (i) => `बाहेरील सीमारेषा ओळखून परिमिती काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाहेरील सीमारेषा ओळखून परिमिती काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाहेरील सीमारेषा ओळखून परिमिती काढणे')
      },
      {
        key: 'wp_compound',
        name: 'घराच्या compound wall ची लांबी',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. घराच्या compound wall...' }],
        promptTemplate: (i) => `घराच्या compound wall च्या लांबीवर आधारित परिमितीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घराच्या compound wall ची लांबी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घराच्या compound wall ची लांबी')
      },
      {
        key: 'wp_ratio',
        name: 'प्रमाण व अनुपात',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रमाण व अनुपात...' }],
        promptTemplate: (i) => `प्रमाण व अनुपात यावर आधारित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व अनुपात' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व अनुपात')
      },
      {
        key: 'simul_subtraction',
        name: 'वजाबाकी पद्धत',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वजाबाकी पद्धत...' }],
        promptTemplate: (i) => `दोन समीकरणांचा संच (Simultaneous Equations) वजाबाकी पद्धतीने सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वजाबाकी पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वजाबाकी पद्धत')
      },
      {
        key: 'simul_substitution',
        name: 'प्रतिस्थापन (Substitution) पद्धत',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रतिस्थापन पद्धत...' }],
        promptTemplate: (i) => `दोन समीकरणांचा संच (Simultaneous Equations) प्रतिस्थापन (Substitution) पद्धतीने सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रतिस्थापन (Substitution) पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रतिस्थापन (Substitution) पद्धत')
      },
      {
        key: 'ap_consecutive',
        name: 'सलग पदे (Consecutive Terms)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन सलग पदांची बेरीज २१ आहे...' }],
        promptTemplate: (i) => `अंकगणित श्रेढीतील सलग पदांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग पदे (Consecutive Terms)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग पदे (Consecutive Terms)')
      },
      {
        key: 'ap_multiples',
        name: 'विशिष्ट संख्येच्या पटीतील संख्या',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १० ते २५० मधील ४ च्या पटीतील संख्या किती?' }],
        promptTemplate: (i) => `विशिष्ट संख्येच्या पटीतील संख्यांवर आधारित अंकगणित श्रेढीचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विशिष्ट संख्येच्या पटीतील संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विशिष्ट संख्येच्या पटीतील संख्या')
      },
      {
        key: 'event_concept',
        name: 'Event (घटना)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. घटना म्हणजे काय?' }],
        promptTemplate: (i) => `घटना (Event) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Event (घटना)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Event (घटना)')
      },
      {
        key: 'outcome_concept',
        name: 'Outcome (परिणाम)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिणाम म्हणजे काय?' }],
        promptTemplate: (i) => `परिणाम (Outcome) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Outcome (परिणाम)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Outcome (परिणाम)')
      },
      {
        key: 'fav_outcome',
        name: 'Favorable Outcome (अनुकूल परिणाम)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अनुकूल परिणाम म्हणजे काय?' }],
        promptTemplate: (i) => `अनुकूल परिणाम (Favorable Outcome) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Favorable Outcome (अनुकूल परिणाम)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Favorable Outcome (अनुकूल परिणाम)')
      },
      {
        key: 'indep_events',
        name: 'Independent Events',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. स्वतंत्र घटना...' }],
        promptTemplate: (i) => `Independent Events वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Independent Events' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Independent Events')
      },
      {
        key: 'dep_events',
        name: 'Dependent Events',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परावलंबी घटना...' }],
        promptTemplate: (i) => `Dependent Events वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Dependent Events' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Dependent Events')
      },
      {
        key: 'add_rule',
        name: 'Addition Rule of Probability',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बेरजेचा नियम...' }],
        promptTemplate: (i) => `Addition Rule of Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Addition Rule of Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Addition Rule of Probability')
      },
      {
        key: 'mul_rule',
        name: 'Multiplication Rule of Probability',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. गुणाकाराचा नियम...' }],
        promptTemplate: (i) => `Multiplication Rule of Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Multiplication Rule of Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Multiplication Rule of Probability')
      },
      {
        key: 'factorial_concept_1',
        name: 'Factorial Concept (n!)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. 5' }],
        promptTemplate: (i) => `Factorial (n!) संकल्पना स्पष्ट करा आणि ${i.number_val}! ची किंमत काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Factorial Concept (n!)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Factorial Concept (n!)')
      },
      {
        key: 'digit_arr',
        name: 'Digit Arrangement Problems',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अंकांची मांडणी...' }],
        promptTemplate: (i) => `अंकांच्या मांडणीवर (Digit Arrangement) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Digit Arrangement Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Digit Arrangement Problems')
      },
      {
        key: 'num_form',
        name: 'Number Formation Problems',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संख्या तयार करणे...' }],
        promptTemplate: (i) => `संख्या तयार करण्यावर (Number Formation) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Number Formation Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Number Formation Problems')
      },
      {
        key: 'comb_sel_no_ord_1',
        name: 'Selection without order',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विनाक्रम निवड...' }],
        promptTemplate: (i) => `संयोग (Combination) मधील विनाक्रम निवड (Selection without order) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection without order' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection without order')
      },
      {
        key: 'perm_vs_comb_1',
        name: 'Difference between Permutation and Combination',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्रमच आणि संयोग यातील फरक...' }],
        promptTemplate: (i) => `Permutation आणि Combination मधील फरक स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Difference between Permutation and Combination' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Difference between Permutation and Combination')
      },
      {
        key: 'comb_without_rep',
        name: 'Combination without repetition',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पुनरावृत्तीशिवाय संयोग...' }],
        promptTemplate: (i) => `Combination without repetition वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Combination without repetition' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Combination without repetition')
      },
      {
        key: 'comb_with_rep',
        name: 'Combination with repetition',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पुनरावृत्तीसह संयोग...' }],
        promptTemplate: (i) => `Combination with repetition वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Combination with repetition' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Combination with repetition')
      },
      {
        key: 'comm_sel_1',
        name: 'Committee Selection',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समिती निवड...' }],
        promptTemplate: (i) => `समिती निवडीवर (Committee Selection) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Committee Selection' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Committee Selection')
      },
      {
        key: 'spec_comm',
        name: 'Committee Selection Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समिती निवडीची संभाव्यता...' }],
        promptTemplate: (i) => `समिती निवडीच्या संभाव्यतेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Committee Selection Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Committee Selection Probability')
      },
      {
        key: 'spec_digit',
        name: 'Digit Formation Problems',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अंक रचनेचे प्रश्न...' }],
        promptTemplate: (i) => `अंक रचनेवर आधारित स्पर्धा परीक्षेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Digit Formation Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Digit Formation Problems')
      },
      {
        key: 'combine',
        name: 'प्रमाण एकत्र करणे',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर A:B = २:३ आणि B:C = ४:५ असेल, तर A:B:C चे प्रमाण किती?' }],
        promptTemplate: (i) => `शेकडा (Per Hundred) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण एकत्र करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण एकत्र करणे')
      }
    ]
  },
  {
    key: 'factors_lcm_hcf',
    name: 'घटक, लसावि आणि मसावि',
    englishName: 'Factors, LCM & HCF',
    icon: React.createElement(LcmHcfIcon),
    subTopics: [
      {
        key: 'hcf',
        name: 'सर्वात मोठा समान घटक (HCF)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२ आणि १८ चा मसावि (HCF) काढा.' }],
        promptTemplate: (i) => `${i.number_val} चा मसावि (HCF) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सर्वात मोठा समान घटक (HCF)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सर्वात मोठा समान घटक (HCF)')
      },
      {
        key: 'lcm',
        name: 'लघुत्तम समापवर्तक (LCM)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२ आणि १८ चा लसावि (LCM) काढा.' }],
        promptTemplate: (i) => `${i.number_val} चा लसावि (LCM) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लघुत्तम समापवर्तक (LCM)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लघुत्तम समापवर्तक (LCM)')
      },
      {
        key: 'what_is_lcm',
        name: 'LCM म्हणजे काय?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. LCM म्हणजे काय?' }],
        promptTemplate: (i) => `लघुत्तम सामायिक गुणक (LCM) म्हणजे काय हे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'LCM म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('LCM म्हणजे काय?')
      },
      {
        key: 'ex_factors_find',
        name: 'दिलेल्या संख्येचे घटक शोधा',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 48 चे घटक किती?' }],
        promptTemplate: (i) => `संख्येचे घटक शोधण्यावर आधारित स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिलेल्या संख्येचे घटक शोधा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिलेल्या संख्येचे घटक शोधा')
      },
      {
        key: 'what_is_fact',
        name: 'घटक म्हणजे काय?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. घटक म्हणजे काय?' }],
        promptTemplate: (i) => `घटक (Factors) म्हणजे काय हे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घटक म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घटक म्हणजे काय?')
      },
      {
        key: 'fact_one_special',
        name: '1 ही संख्या का विशेष आहे?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1 ही संख्या विशेष का आहे?' }],
        promptTemplate: (i) => `घटकांच्या संदर्भात 1 ही संख्या विशेष का मानली जाते हे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1 ही संख्या का विशेष आहे?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1 ही संख्या का विशेष आहे?')
      },
      {
        key: 'fact_split_method',
        name: 'विभागणी पद्धत',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ४८ चे विभागणी पद्धतीने घटक शोधा.' }],
        promptTemplate: (i) => `विभागणी पद्धतीने ${i.number_val} चे घटक शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विभागणी पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विभागणी पद्धत')
      },
      {
        key: 'fact_simple',
        name: 'साधे घटक (Simple Factors)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. १२ चे साधे घटक (Simple Factors) कोणते आहेत?' }],
        promptTemplate: (i) => `${i.number_val} चे साधे घटक (Simple Factors) शोधा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधे घटक (Simple Factors)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधे घटक (Simple Factors)')
      },
      {
        key: 'fact_perfect',
        name: 'परिपूर्ण संख्या (Perfect Number)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', placeholder: 'उदा. ६ ही परिपूर्ण संख्या (Perfect Number) आहे का?' }],
        promptTemplate: (i) => `${i.number_val} ही परिपूर्ण संख्या (Perfect Number) आहे का ते तपासा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिपूर्ण संख्या (Perfect Number)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिपूर्ण संख्या (Perfect Number)')
      },
      {
        key: 'lcm_two_more',
        name: 'दोन किंवा अधिक संख्यांचा LCM',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. ४, ६ आणि ८ चा लघुत्तम सामायिक गुणक (LCM) किती होईल?' }],
        promptTemplate: (i) => `${i.number_val} चा LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन किंवा अधिक संख्यांचा LCM' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन किंवा अधिक संख्यांचा LCM')
      },
      {
        key: 'lcm_two',
        name: 'दोन संख्यांचा LCM',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १५ आणि २० चा लघुत्तम सामायिक गुणक (LCM) काढा.' }],
        promptTemplate: (i) => `दोन संख्यांचा (${i.number_val}) LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन संख्यांचा LCM' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन संख्यांचा LCM')
      },
      {
        key: 'lcm_three',
        name: 'तीन किंवा अधिक संख्यांचा LCM',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १०, १५ आणि २५ चा लघुत्तम सामायिक गुणक (LCM) काढा.' }],
        promptTemplate: (i) => `तीन किंवा अधिक संख्यांचा (${i.number_val}) LCM काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तीन किंवा अधिक संख्यांचा LCM' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तीन किंवा अधिक संख्यांचा LCM')
      },
      {
        key: 'lcm_bells',
        name: 'घंटा एकत्र वाजणे',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन घंटा अनुक्रमे १०, १५ आणि २० मिनिटांनी वाजतात, तर त्या पुन्हा एकत्र कधी वाजतील?' }],
        promptTemplate: (i) => `घंटा एकत्र वाजण्याच्या समस्येवर आधारित LCM चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घंटा एकत्र वाजणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घंटा एकत्र वाजणे')
      },
      {
        key: 'lcm_schedule',
        name: 'बस/रेल्वे वेळापत्रक',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन बस अनुक्रमे दर ३० आणि ४५ मिनिटांनी सुटतात, तर त्या एकाच वेळी कधी सुटतील?' }],
        promptTemplate: (i) => `बस/रेल्वे वेळापत्रकावर आधारित LCM चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बस/रेल्वे वेळापत्रक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बस/रेल्वे वेळापत्रक')
      },
      {
        key: 'lcm_repeated',
        name: 'कामाची पुनरावृत्ती (Repeated Events)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ दर ४ दिवसांनी आणि ब दर ६ दिवसांनी बाजारात जातात, तर ते पुन्हा एकाच दिवशी कधी भेटतील?' }],
        promptTemplate: (i) => `कामाच्या पुनरावृत्तीवर (Repeated Events) आधारित LCM चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कामाची पुनरावृत्ती (Repeated Events)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कामाची पुनरावृत्ती (Repeated Events)')
      },
      {
        key: 'what_is_hcf',
        name: 'HCF म्हणजे काय?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. HCF म्हणजे काय?' }],
        promptTemplate: (i) => `महत्तम सामायिक विभाजक (HCF/GCD) म्हणजे काय हे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'HCF म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('HCF म्हणजे काय?')
      },
      {
        key: 'hcf_euclid_method',
        name: 'भागाकार पद्धत (Euclid Method)',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १३५ आणि २२५ चा भागाकार पद्धतीने (Euclid Method) HCF काढा.' }],
        promptTemplate: (i) => `भागाकार पद्धतीने (Euclid Method) ${i.number_val} चा HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भागाकार पद्धत (Euclid Method)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भागाकार पद्धत (Euclid Method)')
      },
      {
        key: 'hcf_two',
        name: 'दोन संख्यांचा HCF',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. ४५ आणि ६० चा महत्तम सामायिक विभाजक (HCF) काढा.' }],
        promptTemplate: (i) => `दोन संख्यांचा (${i.number_val}) HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन संख्यांचा HCF' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन संख्यांचा HCF')
      },
      {
        key: 'hcf_three',
        name: 'तीन किंवा अधिक संख्यांचा HCF',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १२, २४ आणि ३६ चा महत्तम सामायिक विभाजक (HCF) काढा.' }],
        promptTemplate: (i) => `तीन किंवा अधिक संख्यांचा (${i.number_val}) HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तीन किंवा अधिक संख्यांचा HCF' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तीन किंवा अधिक संख्यांचा HCF')
      },
      {
        key: 'hcf_large',
        name: 'मोठ्या संख्यांचा HCF',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'text', placeholder: 'उदा. १०२४ आणि २०४८ चा महत्तम सामायिक विभाजक (HCF) काढा.' }],
        promptTemplate: (i) => `मोठ्या संख्यांचा (${i.number_val}) HCF काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मोठ्या संख्यांचा HCF' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मोठ्या संख्यांचा HCF')
      },
      {
        key: 'hcf_groups',
        name: 'वस्तू समान गटात विभागणे',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ४० सफरचंद आणि ६० संत्री यांचे समान गट करायचे असल्यास एका गटात जास्तीत जास्त किती फळे असतील?' }],
        promptTemplate: (i) => `वस्तू समान गटात विभागण्याच्या समस्येवर आधारित HCF चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वस्तू समान गटात विभागणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वस्तू समान गटात विभागणे')
      },
      {
        key: 'hcf_pieces',
        name: 'मोठ्यात मोठा तुकडा काढणे',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १२ मीटर आणि १८ मीटर लांबीच्या दोन दोरखंडांचे समान लांबीचे मोठ्यात मोठे तुकडे किती लांबीचे असतील?' }],
        promptTemplate: (i) => `मोठ्यात मोठा तुकडा काढण्याच्या समस्येवर आधारित HCF चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मोठ्यात मोठा तुकडा काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मोठ्यात मोठा तुकडा काढणे')
      },
      {
        key: 'hcf_packets',
        name: 'समान पॅकेट तयार करणे',
        icon: React.createElement(LcmHcfIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २४ पेन आणि ३६ वह्यांचे समान संच तयार करायचे असल्यास जास्तीत जास्त किती संच तयार होतील?' }],
        promptTemplate: (i) => `समान पॅकेट तयार करण्याच्या समस्येवर आधारित HCF चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान पॅकेट तयार करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान पॅकेट तयार करणे')
      },
      {
        key: 'lcm_hcf_find_other',
        name: 'एक दिलेले असताना दुसरे शोधणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचा लसावि (LCM) ६० आणि मसावि (HCF) ५ आहे, जर एक संख्या १५ असेल तर दुसरी संख्या कोणती?' }],
        promptTemplate: (i) => `दिलेल्या माहितीवरून LCM किंवा HCF शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एक दिलेले असताना दुसरे शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एक दिलेले असताना दुसरे शोधणे')
      },
      {
        key: 'lcm_hcf_app',
        name: 'अनुप्रयोगावर आधारित प्रश्न',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचे प्रमाण ३:४ आहे आणि त्यांचा मसावि ४ आहे, तर त्या संख्या कोणत्या आणि त्यांचा लसावि किती?' }],
        promptTemplate: (i) => `LCM आणि HCF च्या संबंधावरील अनुप्रयोगावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अनुप्रयोगावर आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अनुप्रयोगावर आधारित प्रश्न')
      },
      {
        key: 'mixed_lcm_hcf',
        name: 'LCM आणि HCF एकत्र प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचा लसावि त्यांच्या मसाविच्या १२ पट आहे. मसावि आणि लसाविची बेरीज ४०३ आहे. जर एक संख्या ९३ असेल, तर दुसरी संख्या कोणती?' }],
        promptTemplate: (i) => `LCM आणि HCF एकत्रित असलेल्या स्पर्धा परीक्षेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'LCM आणि HCF एकत्र प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('LCM आणि HCF एकत्र प्रश्न')
      },
      {
        key: 'lcm_method',
        name: 'LCM पद्धत वापरून काम काढणे',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. LCM पद्धत...' }],
        promptTemplate: (i) => `LCM पद्धत वापरून काम काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'LCM पद्धत वापरून काम काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('LCM पद्धत वापरून काम काढणे')
      }
    ]
  },
  {
    key: 'exponents',
    name: 'घातांक आणि करणी',
    englishName: 'Exponents & Roots',
    icon: React.createElement(ExponentIcon),
    subTopics: [
      {
        key: 'mixed_perf_sq_cube',
        name: 'परिपूर्ण वर्ग/घन संबंधित प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अशी लहानात लहान परिपूर्ण वर्ग संख्या शोधा जिला ८, १२ आणि १५ ने पूर्ण भाग जातो.' }],
        promptTemplate: (i) => `परिपूर्ण वर्ग/घन आणि LCM/HCF संबंधित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिपूर्ण वर्ग/घन संबंधित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिपूर्ण वर्ग/घन संबंधित प्रश्न')
      },
      {
        key: 'exp_neg',
        name: 'a⁻ⁿ = 1/aⁿ',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २^-३ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `ऋण घातांक नियमावर (a⁻ⁿ = 1/aⁿ) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'a⁻ⁿ = 1/aⁿ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('a⁻ⁿ = 1/aⁿ')
      },
      {
        key: 'exp_neg_simp',
        name: 'ऋण घातांकाचे साधीकरण',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (१/२)^-२ चे साधीकरण करा.' }],
        promptTemplate: (i) => `ऋण घातांकाच्या साधीकरणावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ऋण घातांकाचे साधीकरण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ऋण घातांकाचे साधीकरण')
      },
      {
        key: 'exp_sqrt',
        name: 'a¹/² = √a',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २५^१/२ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `वर्गमूळ घातांक नियमावर (a¹/² = √a) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'a¹/² = √a' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('a¹/² = √a')
      },
      {
        key: 'exp_cbrt',
        name: 'a¹/³ = ∛a',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २७^१/३ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `घनमूळ घातांक नियमावर (a¹/³ = ∛a) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'a¹/³ = ∛a' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('a¹/³ = ∛a')
      },
      {
        key: 'exp_m_n',
        name: 'aᵐ/ⁿ = ⁿ√(aᵐ)',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ८^२/३ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `अपूर्णांक घातांक नियमावर (aᵐ/ⁿ = ⁿ√(aᵐ)) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'aᵐ/ⁿ = ⁿ√(aᵐ)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('aᵐ/ⁿ = ⁿ√(aᵐ)')
      },
      {
        key: 'exp_root_mixed',
        name: 'घातांक आणि वर्गमूळ एकत्रित उदाहरणे',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √२^४ × २^३ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `घातांक आणि वर्गमूळ एकत्रित असलेल्या उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घातांक आणि वर्गमूळ एकत्रित उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घातांक आणि वर्गमूळ एकत्रित उदाहरणे')
      },
      {
        key: 'exp_sci_not',
        name: 'वैज्ञानिक पद्धत (Scientific Notation)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 0.00005 ला वैज्ञानिक पद्धतीत लिहा' }],
        promptTemplate: (i) => `वैज्ञानिक पद्धतीवर (Scientific Notation) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वैज्ञानिक पद्धत (Scientific Notation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वैज्ञानिक पद्धत (Scientific Notation)')
      },
      {
        key: 'sq_perf',
        name: 'परिपूर्ण वर्ग संख्या',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √१४४ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `परिपूर्ण वर्ग संख्यांच्या वर्गमूळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिपूर्ण वर्ग संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिपूर्ण वर्ग संख्या')
      },
      {
        key: 'sq_non_perf',
        name: 'अपूर्ण वर्ग संख्या',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √२० चे साधीकरण करा.' }],
        promptTemplate: (i) => `अपूर्ण वर्ग संख्यांच्या वर्गमूळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपूर्ण वर्ग संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपूर्ण वर्ग संख्या')
      },
      {
        key: 'sq_est',
        name: 'अंदाज पद्धती',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √५० चे अंदाजे मूल्य किती असेल?' }],
        promptTemplate: (i) => `वर्गमूळ काढण्याच्या अंदाज पद्धतीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अंदाज पद्धती' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अंदाज पद्धती')
      },
      {
        key: 'cube_perf',
        name: 'परिपूर्ण घन संख्या',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ∛२१६ चे मूल्य किती होईल?' }],
        promptTemplate: (i) => `परिपूर्ण घन संख्यांच्या घनमूळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिपूर्ण घन संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिपूर्ण घन संख्या')
      },
      {
        key: 'cube_non_perf',
        name: 'अपूर्ण घन संख्या',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ∛५० चे साधीकरण करा.' }],
        promptTemplate: (i) => `अपूर्ण घन संख्यांच्या घनमूळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अपूर्ण घन संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अपूर्ण घन संख्या')
      },
      {
        key: 'cube_long',
        name: 'लांब पद्धतीने घनमूळ',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १७२८ चे घनमूळ किती होईल?' }],
        promptTemplate: (i) => `लांब पद्धतीने घनमूळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लांब पद्धतीने घनमूळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लांब पद्धतीने घनमूळ')
      },
      {
        key: 'surd_like',
        name: 'समान करणी (Like Surds)',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 2√3 आणि 5√3' }],
        promptTemplate: (i) => `समान करणीवर (Like Surds) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान करणी (Like Surds)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान करणी (Like Surds)')
      },
      {
        key: 'surd_unlike',
        name: 'भिन्न करणी (Unlike Surds)',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √2 आणि √3' }],
        promptTemplate: (i) => `भिन्न करणीवर (Unlike Surds) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भिन्न करणी (Unlike Surds)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भिन्न करणी (Unlike Surds)')
      },
      {
        key: 'surd_pyth',
        name: 'पायथागोरस सिद्धांतावर आधारित प्रश्न',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका काटकोन त्रिकोणाच्या दोन बाजू ३ आणि ४ आहेत, तर त्याचा कर्ण किती असेल?' }],
        promptTemplate: (i) => `पायथागोरस सिद्धांतावर आधारित करणीच्या उपयोगावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पायथागोरस सिद्धांतावर आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पायथागोरस सिद्धांतावर आधारित प्रश्न')
      },
      {
        key: 'mixed_exp_root',
        name: 'घातांक + करणी एकत्रित उदाहरणे',
        icon: React.createElement(ExponentIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (2^4 * √16)^1/2' }],
        promptTemplate: (i) => `घातांक आणि करणी एकत्रित असलेल्या उदाहरणांवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घातांक + करणी एकत्रित उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घातांक + करणी एकत्रित उदाहरणे')
      },
      {
        key: 'weekly_expense',
        name: 'आठवड्याचा खर्च',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका कुटुंबाचा सोमवार ते शुक्रवारचा सरासरी खर्च २०० रुपये आहे.' }],
        promptTemplate: (i) => `आठवड्याच्या खर्चाच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'आठवड्याचा खर्च' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('आठवड्याचा खर्च')
      },
      {
        key: 'sq_side',
        name: 'बाजू दिलेली असेल तर क्षेत्रफळ',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाजू दिलेली असेल...' }],
        promptTemplate: (i) => `चौकोनाची बाजू दिलेली असताना क्षेत्रफळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाजू दिलेली असेल तर क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाजू दिलेली असेल तर क्षेत्रफळ')
      },
      {
        key: 'sq_diagonal',
        name: 'कर्ण दिला असेल तर क्षेत्रफळ',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कर्ण दिला असेल...' }],
        promptTemplate: (i) => `चौकोनाचा कर्ण दिलेला असताना क्षेत्रफळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कर्ण दिला असेल तर क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कर्ण दिला असेल तर क्षेत्रफळ')
      },
      {
        key: 'sq_change',
        name: 'बाजू वाढ/कमी केल्यावर क्षेत्रफळातील बदल',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाजू वाढ/कमी केल्यावर...' }],
        promptTemplate: (i) => `चौकोनाची बाजू वाढ/कमी केल्यावर क्षेत्रफळातील बदलावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाजू वाढ/कमी केल्यावर क्षेत्रफळातील बदल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाजू वाढ/कमी केल्यावर क्षेत्रफळातील बदल')
      },
      {
        key: 'cube_side',
        name: 'बाजू दिली असता',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाजू दिली असता...' }],
        promptTemplate: (i) => `घनाची बाजू दिलेली असताना घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाजू दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाजू दिली असता')
      },
      {
        key: 'cube_melt',
        name: 'वितळवून नवीन घन बनवणे',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वितळवून नवीन घन...' }],
        promptTemplate: (i) => `घन वितळवून नवीन घन बनवण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वितळवून नवीन घन बनवणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वितळवून नवीन घन बनवणे')
      },
      {
        key: 'ss_sum_n_sq',
        name: 'पहिल्या n नैसर्गिक संख्यांच्या वर्गांची बेरीज (Σn²)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'number_val', label: 'n ची किंमत', type: 'number' }],
        promptTemplate: (i) => `पहिल्या ${i.number_val} नैसर्गिक संख्यांच्या वर्गांची बेरीज (Σn²) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिल्या n नैसर्गिक संख्यांच्या वर्गांची बेरीज (Σn²)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिल्या n नैसर्गिक संख्यांच्या वर्गांची बेरीज (Σn²)')
      },
      {
        key: 'ss_sum_n_cube',
        name: 'पहिल्या n नैसर्गिक संख्यांच्या घनांची बेरीज (Σn³)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'number_val', label: 'n ची किंमत', type: 'number' }],
        promptTemplate: (i) => `पहिल्या ${i.number_val} नैसर्गिक संख्यांच्या घनांची बेरीज (Σn³) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिल्या n नैसर्गिक संख्यांच्या घनांची बेरीज (Σn³)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिल्या n नैसर्गिक संख्यांच्या घनांची बेरीज (Σn³)')
      },
      {
        key: 'random_exp',
        name: 'Random Experiment (अनियमित प्रयोग)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अनियमित प्रयोग म्हणजे काय?' }],
        promptTemplate: (i) => `अनियमित प्रयोग (Random Experiment) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Random Experiment (अनियमित प्रयोग)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Random Experiment (अनियमित प्रयोग)')
      },
      {
        key: 'random_exp_1',
        name: 'अनियमित प्रयोग (Random Experiment)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अनियमित प्रयोग म्हणजे काय?' }],
        promptTemplate: (i) => `अनियमित प्रयोग (Random Experiment) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अनियमित प्रयोग (Random Experiment)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अनियमित प्रयोग (Random Experiment)')
      }
    ]
  },
  {
    key: 'ratio_proportion',
    name: 'प्रमाण आणि समानुपात',
    englishName: 'Ratio & Proportion',
    icon: React.createElement(RatioIcon),
    subTopics: [
      {
        key: 'what_is_prop',
        name: 'समानुपात म्हणजे काय?',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २, ४, ६, १२ या संख्या समानुपातात (Proportion) आहेत का?' }],
        promptTemplate: (i) => `समानुपात (Proportion) म्हणजे काय हे a : b :: c : d या स्वरूपात स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समानुपात म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समानुपात म्हणजे काय?')
      },
      {
        key: 'mean_prop',
        name: 'मध्यम पद (Mean Proportional)',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. ४ आणि ९ चे मध्यम पद (Mean Proportional) काढा.' }],
        promptTemplate: (i) => `मध्यम पद (Mean Proportional) काढा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मध्यम पद (Mean Proportional)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मध्यम पद (Mean Proportional)')
      },
      {
        key: 'third_prop',
        name: 'तृतीय समानुपाती (Third Proportional)',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. ४ आणि ६ चे तृतीय समानुपाती (Third Proportional) काढा.' }],
        promptTemplate: (i) => `तृतीय समानुपाती (Third Proportional) काढा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तृतीय समानुपाती (Third Proportional)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तृतीय समानुपाती (Third Proportional)')
      },
      {
        key: 'fourth_prop',
        name: 'चतुर्थ समानुपाती (Fourth Proportional)',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'text', placeholder: 'उदा. २, ३ आणि ४ चे चतुर्थ समानुपाती (Fourth Proportional) काढा.' }],
        promptTemplate: (i) => `चतुर्थ समानुपाती (Fourth Proportional) काढा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'चतुर्थ समानुपाती (Fourth Proportional)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('चतुर्थ समानुपाती (Fourth Proportional)')
      },
      {
        key: 'direct_prop',
        name: 'सरळ समानुपात (Direct Proportion)',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १० पेनची किंमत ५० रुपये असल्यास १५ पेनची किंमत किती?' }],
        promptTemplate: (i) => `सरळ समानुपात (Direct Proportion) वापरून सोडवा (जास्त-जास्त, कमी-कमी): ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सरळ समानुपात (Direct Proportion)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सरळ समानुपात (Direct Proportion)')
      },
      {
        key: 'inverse_prop',
        name: 'व्यस्त समानुपात (Inverse Proportion)',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५ कामगारांना एक काम पूर्ण करण्यास १० दिवस लागतात, तर २ कामगारांना तेच काम करण्यास किती दिवस लागतील?' }],
        promptTemplate: (i) => `व्यस्त समानुपात (Inverse Proportion) वापरून सोडवा (जास्त-कमी, कमी-जास्त): ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'व्यस्त समानुपात (Inverse Proportion)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('व्यस्त समानुपात (Inverse Proportion)')
      },
      {
        key: 'simplify',
        name: 'प्रमाण सोपे करणे',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `प्रमाण सोपे करणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण सोपे करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण सोपे करणे')
      },
      {
        key: 'mixture_perc',
        name: 'Mixture Problems मधील टक्केवारी',
        icon: React.createElement(MixtureIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ४० लिटर मिश्रणात १०% पाणी आहे, त्यात किती पाणी मिसळल्यास पाण्याचे प्रमाण २०% होईल?' }],
        promptTemplate: (i) => `मिश्रण (Mixture) आधारित टक्केवारीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Mixture Problems मधील टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Mixture Problems मधील टक्केवारी')
      },
      {
        key: 'share_by_invest',
        name: 'गुंतवणूक प्रमाणानुसार नफा वाटप',
        icon: React.createElement(RatioIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ आणि ब यांनी अनुक्रमे ५००० व ७००० रुपये गुंतवले. वर्षाअखेर २४०० रुपये नफा झाल्यास अ चा हिस्सा किती?' }],
        promptTemplate: (i) => `गुंतवणूक प्रमाणानुसार नफा वाटपाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'गुंतवणूक प्रमाणानुसार नफा वाटप' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('गुंतवणूक प्रमाणानुसार नफा वाटप')
      },
      {
        key: 'find_share_total_profit',
        name: 'एकूण नफा दिलेला असताना प्रत्येकाचा हिस्सा',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ, ब, क यांच्या गुंतवणुकीचे प्रमाण ३:४:५ आहे. एकूण ६००० रुपये नफ्यात ब चा वाटा किती?' }],
        promptTemplate: (i) => `एकूण नफा दिलेला असताना प्रत्येकाचा हिस्सा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकूण नफा दिलेला असताना प्रत्येकाचा हिस्सा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकूण नफा दिलेला असताना प्रत्येकाचा हिस्सा')
      },
      {
        key: 'alligation_method',
        name: 'Alligation पद्धत',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ६० रुपये किलोचा चहा आणि ७५ रुपये किलोचा चहा कोणत्या प्रमाणात मिसळावा जेणेकरून सरासरी किंमत ६८ होईल?' }],
        promptTemplate: (i) => `Alligation पद्धतीवर आधारित सरासरीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Alligation पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Alligation पद्धत')
      }
    ]
  },
  {
    key: 'percentage',
    name: 'टक्केवारी',
    englishName: 'Percentage',
    icon: React.createElement(PercentageIcon),
    subTopics: [
      {
        key: 'perc_profit_loss',
        name: 'शेकडा नफा/तोटा काढणे',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५०० रुपयांची वस्तू ४५० ला विकल्यास शेकडा तोटा किती?' }],
        promptTemplate: (i) => `शेकडा नफा किंवा तोटा काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शेकडा नफा/तोटा काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शेकडा नफा/तोटा काढणे')
      },
      {
        key: 'find_new_price',
        name: 'नवीन किंमत शोधणे',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `नवीन किंमत शोधणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नवीन किंमत शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नवीन किंमत शोधणे')
      },
      {
        key: 'succ_inc',
        name: 'सलग वाढ (Successive Increase)',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `सलग वाढ (Successive Increase) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग वाढ (Successive Increase)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग वाढ (Successive Increase)')
      },
      {
        key: 'ci_principal',
        name: '3. Principal शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणत्या मुदलाचे १०% दराने २ वर्षांचे चक्रवाढ व्याज २१०० रुपये होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये मूळ रक्कम (Principal) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3. Principal शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3. Principal शोधणे')
      },
      {
        key: 'loss_perc',
        name: 'तोटा %',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `तोटा % वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तोटा %' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तोटा %')
      },
      {
        key: 'calc_total_perc',
        name: 'एकूण टक्केवारी काढणे',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'vals', label: 'टक्केवारी मूल्ये (स्वल्पविराम)', type: 'text', placeholder: 'उदा. ७०, ८०, ९०' }],
        promptTemplate: (i) => `${i.vals} या मूल्यांची सरासरी टक्केवारी काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकूण टक्केवारी काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकूण टक्केवारी काढणे')
      },
      {
        key: 'pass_perc',
        name: 'निकालातील पास टक्केवारी',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `निकालातील पास टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'निकालातील पास टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('निकालातील पास टक्केवारी')
      },
      {
        key: 'boy_girl_perc',
        name: 'मुलगे-मुली प्रमाण टक्केवारी',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `मुलगे-मुली प्रमाण टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मुलगे-मुली प्रमाण टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मुलगे-मुली प्रमाण टक्केवारी')
      },
      {
        key: 'perc_on_total',
        name: 'एकूण गुणांवर आधारित टक्केवारी',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `एकूण गुणांवर आधारित टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकूण गुणांवर आधारित टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकूण गुणांवर आधारित टक्केवारी')
      },
      {
        key: 'pass_req_perc',
        name: 'पास होण्यासाठी आवश्यक टक्केवारी',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `पास होण्यासाठी आवश्यक टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पास होण्यासाठी आवश्यक टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पास होण्यासाठी आवश्यक टक्केवारी')
      },
      {
        key: 'marks_inc_perc',
        name: 'किती गुण वाढल्यास किती % वाढ',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `किती गुण वाढल्यास किती % वाढ वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'किती गुण वाढल्यास किती % वाढ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('किती गुण वाढल्यास किती % वाढ')
      },
      {
        key: 'census_based',
        name: 'जनगणना आधारित प्रश्न',
        icon: React.createElement(SearchIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका गावाची लोकसंख्या १०,००० आहे, त्यापैकी ६०% साक्षर आहेत, तर निरक्षर लोकांची संख्या किती?' }],
        promptTemplate: (i) => `जनगणना आधारित टक्केवारीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'जनगणना आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('जनगणना आधारित प्रश्न')
      },
      {
        key: 'salary_inc',
        name: 'पगार वाढ %',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `पगार वाढ % वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पगार वाढ %' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पगार वाढ %')
      },
      {
        key: 'savings_perc',
        name: 'बचत टक्केवारी',
        icon: React.createElement(WagesIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `बचत टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बचत टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बचत टक्केवारी')
      },
      {
        key: 'x_perc_of_y',
        name: 'X% of Y प्रकार',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `X% of Y प्रकार वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'X% of Y प्रकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('X% of Y प्रकार')
      },
      {
        key: 'y_is_what_perc_x',
        name: 'Y is what percent of X',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `Y is what percent of X वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Y is what percent of X' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Y is what percent of X')
      },
      {
        key: 'succ_perc_tricks',
        name: 'Successive Percentage Shortcut Tricks',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची किंमत आधी २०% ने वाढवली आणि नंतर २०% ने कमी केली, तर एकूण किती टक्के नफा किंवा तोटा झाला?' }],
        promptTemplate: (i) => `सलग टक्केवारी बदलांसाठी शॉर्टकट ट्रिक्स स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Successive Percentage Shortcut Tricks' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Successive Percentage Shortcut Tricks')
      },
      {
        key: 'mental_math_perc',
        name: '10%, 20%, 25%, 50% चे जलद मानसिक गणित',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', unit: '%', placeholder: 'उदा. १२००' }],
        promptTemplate: (i) => `${i.number_val} चे 10%, 20%, 25%, आणि 50% मानसिकरित्या कसे काढायचे ते स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '10%, 20%, 25%, 50% चे जलद मानसिक गणित' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('10%, 20%, 25%, 50% चे जलद मानसिक गणित')
      },
      {
        key: 'find_1_perc',
        name: '1% काढण्याची पद्धत',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'number_val', label: 'संख्या', type: 'number', unit: '%', placeholder: 'उदा. ८५०' }],
        promptTemplate: (i) => `${i.number_val} चा 1% काढण्याची जलद पद्धत स्पष्ट करा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1% काढण्याची पद्धत' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1% काढण्याची पद्धत')
      },
      {
        key: 'vedic_math_perc',
        name: 'Vedic Math आधारित वेगवान पद्धती',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वैदिक गणित वापरून ७५ चे ४०% जलद कसे काढाल?' }],
        promptTemplate: (i) => `वैदिक गणित वापरून टक्केवारी काढण्याच्या पद्धती स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Vedic Math आधारित वेगवान पद्धती' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Vedic Math आधारित वेगवान पद्धती')
      },
      {
        key: 'perc_profit_loss_1',
        name: 'शेकडा नफा/तोटा काढणे',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५०० रुपयांची वस्तू ४५० ला विकल्यास शेकडा तोटा किती?' }],
        promptTemplate: (i) => `शेकडा नफा किंवा तोटा काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शेकडा नफा/तोटा काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शेकडा नफा/तोटा काढणे')
      },
      {
        key: 'profit_high_price',
        name: 'जास्त किंमत घेऊन नफा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक दुकानदार वस्तूच्या खरेदी किमतीवर २०% जास्त किंमत लावतो आणि १०% सूट देतो, तर नफा किती?' }],
        promptTemplate: (i) => `जास्त किंमत घेऊन नफा मिळवण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'जास्त किंमत घेऊन नफा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('जास्त किंमत घेऊन नफा')
      },
      {
        key: 'cheat_weight_price',
        name: 'वजन आणि किंमत दोन्हीमध्ये फसवणूक',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वस्तूच्या किमतीत २०% वाढ करून आणि १०% कमी वजन देऊन मिळणारा एकूण नफा किती?' }],
        promptTemplate: (i) => `वजन आणि किंमत दोन्हीमध्ये फसवणूक केल्यास नफा/तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वजन आणि किंमत दोन्हीमध्ये फसवणूक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वजन आणि किंमत दोन्हीमध्ये फसवणूक')
      },
      {
        key: 'same_perc_pl',
        name: 'समान टक्केवारीचा नफा व तोटा',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूच्या किमतीत २०% वाढ व नंतर २०% घट केल्यास एकूण शेकडा तोटा किती?' }],
        promptTemplate: (i) => `समान टक्केवारीचा नफा व तोटा झाल्यास एकूण परिणाम काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान टक्केवारीचा नफा व तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान टक्केवारीचा नफा व तोटा')
      },
      {
        key: 'price_by_perc_inc',
        name: 'टक्केवारी वाढवून किंमत ठरवणे',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. खरेदी किमतीपेक्षा २५% जास्त किंमत छापली आणि १०% सूट दिली, तर शेकडा नफा किती?' }],
        promptTemplate: (i) => `टक्केवारी वाढवून किंमत ठरवण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'टक्केवारी वाढवून किंमत ठरवणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('टक्केवारी वाढवून किंमत ठरवणे')
      },
      {
        key: 'perc_inc_avoid_loss',
        name: 'तोटा टाळण्यासाठी किती % वाढ करावी?',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% सूट देऊनही ५% नफा मिळवण्यासाठी छापील किंमत खरेदी किमतीपेक्षा किती % जास्त असावी?' }],
        promptTemplate: (i) => `तोटा टाळण्यासाठी किती % वाढ करावी याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तोटा टाळण्यासाठी किती % वाढ करावी?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तोटा टाळण्यासाठी किती % वाढ करावी?')
      },
      {
        key: 'gst_tax_pl',
        name: 'GST/कर लावून अंतिम नफा–तोटा',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची किंमत १००० रुपये असून त्यावर १८% GST लावला आणि नंतर १०% नफा मिळवला, तर विक्री किंमत किती?' }],
        promptTemplate: (i) => `GST/कर लावून अंतिम नफा–तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'GST/कर लावून अंतिम नफा–तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('GST/कर लावून अंतिम नफा–तोटा')
      },
      {
        key: 'si_principal',
        name: '1. मूळ रक्कम शोधणे (Principal – P)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणत्या मुदलाचे ५% दराने ३ वर्षांचे सरळव्याज ७५० रुपये होईल?' }],
        promptTemplate: (i) => `साध्या व्याजामध्ये मूळ रक्कम (Principal) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1. मूळ रक्कम शोधणे (Principal – P)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1. मूळ रक्कम शोधणे (Principal – P)')
      },
      {
        key: 'ci_principal_1',
        name: '3. Principal शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर चक्रवाढ व्याज ६३० रुपये असेल, व्याजदर १०% आणि वेळ २ वर्षे असेल, तर मुद्दल किती?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये मूळ रक्कम (Principal) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3. Principal शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3. Principal शोधणे')
      },
      {
        key: 'students_marks',
        name: 'विद्यार्थ्यांच्या गुणांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वर्गातील २५ विद्यार्थ्यांच्या गुणांची सरासरी ६० आहे.' }],
        promptTemplate: (i) => `विद्यार्थ्यांच्या गुणांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विद्यार्थ्यांच्या गुणांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विद्यार्थ्यांच्या गुणांची सरासरी')
      },
      {
        key: 'subject_marks',
        name: 'एक विषय / अनेक विषयांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका विद्यार्थ्याला ५ विषयात सरासरी ७५ गुण मिळाले, ६ व्या विषयात किती गुण मिळवावेत जेणेकरून सरासरी ८० होईल?' }],
        promptTemplate: (i) => `एक विषय किंवा अनेक विषयांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एक विषय / अनेक विषयांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एक विषय / अनेक विषयांची सरासरी')
      },
      {
        key: 'marks_change',
        name: 'कमी/जास्त गुण मिळाल्यास नवीन सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका विद्यार्थ्याचे गुण चुकून ६० ऐवजी ८० धरले गेले, त्यामुळे सरासरी ०.५ ने वाढली, तर एकूण विद्यार्थी किती?' }],
        promptTemplate: (i) => `कमी/जास्त गुण मिळाल्यास नवीन सरासरी काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कमी/जास्त गुण मिळाल्यास नवीन सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कमी/जास्त गुण मिळाल्यास नवीन सरासरी')
      },
      {
        key: 'rect_perc_change',
        name: 'क्षेत्रफळातील टक्केवारी बदल',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्षेत्रफळातील टक्केवारी बदल...' }],
        promptTemplate: (i) => `आयताच्या क्षेत्रफळातील टक्केवारी बदलावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्षेत्रफळातील टक्केवारी बदल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्षेत्रफळातील टक्केवारी बदल')
      },
      {
        key: 'sp_perc_change',
        name: 'टक्केवारी बदल प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. टक्केवारी बदल...' }],
        promptTemplate: (i) => `क्षेत्रफळ किंवा घनफळातील टक्केवारी बदलावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'टक्केवारी बदल प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('टक्केवारी बदल प्रश्न')
      },
      {
        key: 'wp_perc',
        name: 'टक्केवारीवर आधारित',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. टक्केवारीवर आधारित...' }],
        promptTemplate: (i) => `टक्केवारीवर आधारित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'टक्केवारीवर आधारित' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('टक्केवारीवर आधारित')
      },
      {
        key: 'ap_exam_missing',
        name: 'गाळलेली पदे शोधणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `अंकगणित श्रेढीतील गाळलेली पदे शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'गाळलेली पदे शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('गाळलेली पदे शोधणे')
      },
      {
        key: 'ap_exam_check',
        name: 'पद तपासणे (Is this a term?)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `दिलेली संख्या अंकगणित श्रेढीचे पद आहे का ते तपासा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पद तपासणे (Is this a term?)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पद तपासणे (Is this a term?)')
      }
    ]
  },
  {
    key: 'profit_loss',
    name: 'नफा आणि तोटा',
    englishName: 'Profit & Loss',
    icon: React.createElement(ProfitLossIcon),
    subTopics: [
      {
        key: 'cp_sp_find',
        name: 'खरेदी/विक्री किंमत शोधणे',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% नफा मिळवण्यासाठी ५०० रुपयांची वस्तू कितीला विकावी?' }],
        promptTemplate: (i) => `खरेदी किंवा विक्री किंमत शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'खरेदी/विक्री किंमत शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('खरेदी/विक्री किंमत शोधणे')
      },
      {
        key: 'mp_find',
        name: 'छापील किंमत शोधणे (Find Marked Price)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २०% सूट दिल्यावर वस्तू ८०० ला विकली, तर छापील किंमत किती?' }],
        promptTemplate: (i) => `छापील किंमत (Marked Price) शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'छापील किंमत शोधणे (Find Marked Price)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('छापील किंमत शोधणे (Find Marked Price)')
      },
      {
        key: 'profit_loss_mix',
        name: 'मिश्र नफा-तोटा प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `मिश्र नफा-तोटा यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मिश्र नफा-तोटा प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मिश्र नफा-तोटा प्रश्न')
      },
      {
        key: 'mp_dis',
        name: 'Marked Price व Discount',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `Marked Price व Discount वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Marked Price व Discount' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Marked Price व Discount')
      },
      {
        key: 'succ_dis',
        name: 'सलग सवलत (Successive Discount)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `सलग सवलत (Successive Discount) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग सवलत (Successive Discount)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग सवलत (Successive Discount)')
      },
      {
        key: 'succ_year_growth',
        name: 'सलग वर्षांची वाढ',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `सलग वर्षांची वाढ वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सलग वर्षांची वाढ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सलग वर्षांची वाढ')
      },
      {
        key: 'cp_sp_find_1',
        name: 'खरेदी/विक्री किंमत शोधणे',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% नफा मिळवण्यासाठी ५०० रुपयांची वस्तू कितीला विकावी?' }],
        promptTemplate: (i) => `खरेदी किंवा विक्री किंमत शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'खरेदी/विक्री किंमत शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('खरेदी/विक्री किंमत शोधणे')
      },
      {
        key: 'mp_find_1',
        name: 'छापील किंमत शोधणे (Find Marked Price)',
        icon: React.createElement(DiscountIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २०% सूट दिल्यावर वस्तू ८०० ला विकली, तर छापील किंमत किती?' }],
        promptTemplate: (i) => `छापील किंमत (Marked Price) शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'छापील किंमत शोधणे (Find Marked Price)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('छापील किंमत शोधणे (Find Marked Price)')
      },
      {
        key: 'profit_loss_mix_1',
        name: 'मिश्र नफा-तोटा प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `मिश्र नफा-तोटा यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मिश्र नफा-तोटा प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मिश्र नफा-तोटा प्रश्न')
      },
      {
        key: 'profit_less_weight',
        name: 'कमी वजन देऊन नफा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक दुकानदार १ किलो ऐवजी ९०० ग्रॅम वजन वापरतो, तर त्याला होणारा शेकडा नफा किती?' }],
        promptTemplate: (i) => `कमी वजन देऊन नफा मिळवण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कमी वजन देऊन नफा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कमी वजन देऊन नफा')
      },
      {
        key: 'total_profit_fake_weight',
        name: 'खोट्या मापामुळे एकूण नफा %',
        icon: React.createElement(PercentageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. खरेदी करताना १०% आणि विक्री करताना १०% अशी वजनात फसवणूक केल्यास एकूण नफा किती?' }],
        promptTemplate: (i) => `खोट्या मापामुळे एकूण नफा % काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'खोट्या मापामुळे एकूण नफा %' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('खोट्या मापामुळे एकूण नफा %')
      },
      {
        key: 'two_items_same_cp',
        name: 'दोन वस्तू एकाच CP ला घेऊन वेगवेगळ्या SP ला विकणे',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन वस्तू प्रत्येकी ५०० रुपयांना खरेदी केल्या. एक १०% नफ्याने व दुसरी ५% तोट्याने विकल्यास एकूण नफा/तोटा किती?' }],
        promptTemplate: (i) => `दोन वस्तू एकाच CP ला घेऊन वेगवेगळ्या SP ला विकल्यास एकूण नफा/तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन वस्तू एकाच CP ला घेऊन वेगवेगळ्या SP ला विकणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन वस्तू एकाच CP ला घेऊन वेगवेगळ्या SP ला विकणे')
      },
      {
        key: 'one_profit_one_loss',
        name: 'एकावर नफा, दुसऱ्यावर तोटा – एकूण काय?',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन वस्तू प्रत्येकी १२०० रुपयांना विकल्या. एकावर २०% नफा व दुसऱ्यावर २०% तोटा झाल्यास एकूण व्यवहारात काय होईल?' }],
        promptTemplate: (i) => `एकावर नफा, दुसऱ्यावर तोटा झाल्यास एकूण नफा/तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकावर नफा, दुसऱ्यावर तोटा – एकूण काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकावर नफा, दुसऱ्यावर तोटा – एकूण काय?')
      },
      {
        key: 'same_pl_total_loss',
        name: 'समान नफा–तोटा असताना एकूण तोटा का होतो?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन वस्तू समान किमतीला विकल्या असता एकावर १०% नफा व दुसऱ्यावर १०% तोटा होतो, तर एकूण तोटा किती %?' }],
        promptTemplate: (i) => `समान नफा–तोटा असताना एकूण तोटा का होतो यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान नफा–तोटा असताना एकूण तोटा का होतो?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान नफा–तोटा असताना एकूण तोटा का होतो?')
      },
      {
        key: 'twice_profit',
        name: 'दोनदा नफा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची किंमत आधी १०% वाढवली व नंतर पुन्हा २०% वाढवली, तर एकूण वाढ किती %?' }],
        promptTemplate: (i) => `सलग दोनदा नफा झाल्यास एकूण नफा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोनदा नफा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोनदा नफा')
      },
      {
        key: 'twice_loss',
        name: 'दोनदा तोटा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची किंमत सलग दोनदा १०% व १०% ने कमी केली, तर एकूण घट किती %?' }],
        promptTemplate: (i) => `सलग दोनदा तोटा झाल्यास एकूण तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोनदा तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोनदा तोटा')
      },
      {
        key: 'once_profit_once_loss',
        name: 'एकदा नफा, एकदा तोटा',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची किंमत १०% वाढवून पुन्हा १०% कमी केली, तर मूळ किमतीत काय बदल होईल?' }],
        promptTemplate: (i) => `एकदा नफा, एकदा तोटा झाल्यास एकूण परिणाम काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकदा नफा, एकदा तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकदा नफा, एकदा तोटा')
      },
      {
        key: 'sp_for_double_profit',
        name: 'नफा दुप्पट करण्यासाठी SP किती ठेवावा?',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५०० रुपयांची वस्तू ६०० ला विकल्यास होणारा नफा दुप्पट करण्यासाठी ती कितीला विकावी?' }],
        promptTemplate: (i) => `नफा दुप्पट करण्यासाठी SP किती ठेवावा याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नफा दुप्पट करण्यासाठी SP किती ठेवावा?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नफा दुप्पट करण्यासाठी SP किती ठेवावा?')
      },
      {
        key: 'sales_for_target_profit',
        name: 'एका ठराविक रकमेचा नफा मिळवण्यासाठी किती विक्री करावी?',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रत्येक वस्तूवर १० रुपये नफा मिळत असल्यास ५०० रुपये नफा मिळवण्यासाठी किती वस्तू विकाव्या लागतील?' }],
        promptTemplate: (i) => `एका ठराविक रकमेचा नफा मिळवण्यासाठी किती विक्री करावी याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एका ठराविक रकमेचा नफा मिळवण्यासाठी किती विक्री करावी?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एका ठराविक रकमेचा नफा मिळवण्यासाठी किती विक्री करावी?')
      },
      {
        key: 'return_policy_pl',
        name: 'वस्तू परत केल्यास (Return Policy) नफा/तोटा',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक वस्तू ५% तोट्याने विकली, जर ती ५० रुपये जास्त किमतीला विकली असती तर ५% नफा झाला असता, तर खरेदी किंमत किती?' }],
        promptTemplate: (i) => `वस्तू परत केल्यास (Return Policy) नफा/तोटा काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वस्तू परत केल्यास (Return Policy) नफा/तोटा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वस्तू परत केल्यास (Return Policy) नफा/तोटा')
      },
      {
        key: 'double_triple_time',
        name: '1. मूळ रक्कम दुप्पट / तिप्पट होण्याचा कालावधी',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक रक्कम सरळव्याजाने १० वर्षात दुप्पट होते, तर ती किती वर्षात तिप्पट होईल?' }],
        promptTemplate: (i) => `मूळ रक्कम दुप्पट किंवा तिप्पट होण्याच्या कालावधीवर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1. मूळ रक्कम दुप्पट / तिप्पट होण्याचा कालावधी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1. मूळ रक्कम दुप्पट / तिप्पट होण्याचा कालावधी')
      },
      {
        key: 'replace_person',
        name: 'एखादी व्यक्ती येणे किंवा जाणे (Replace Type)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १० विद्यार्थ्यांचे सरासरी वय १५ आहे, शिक्षक आल्यावर सरासरी १ ने वाढते, तर शिक्षकाचे वय किती?' }],
        promptTemplate: (i) => `एखादी व्यक्ती येणे किंवा जाणे (Replace Type) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एखादी व्यक्ती येणे किंवा जाणे (Replace Type)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एखादी व्यक्ती येणे किंवा जाणे (Replace Type)')
      },
      {
        key: 'profit_sharing',
        name: 'नफा वाटप संबंधित प्रश्न',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका व्यवसायात झालेल्या १०,००० रुपयांच्या नफ्याचे ३:२ प्रमाणात वाटप केल्यास प्रत्येकाचा हिस्सा किती?' }],
        promptTemplate: (i) => `नफा वाटप संबंधित भागीदारीच्या सरासरीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नफा वाटप संबंधित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नफा वाटप संबंधित प्रश्न')
      },
      {
        key: 'replacement_method',
        name: 'Replacement Method',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ६० किलो वजनाच्या माणसाच्या जागी नवीन माणूस आल्याने ८ जणांची सरासरी १.५ किलोने वाढली.' }],
        promptTemplate: (i) => `Replacement Method वापरून सरासरीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Replacement Method' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Replacement Method')
      },
      {
        key: 'sample_space',
        name: 'नमुना अवकाश (Sample Space - S)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन नाणी फेकली असता नमुना अवकाश काय असेल?' }],
        promptTemplate: (i) => `नमुना अवकाश (Sample Space) संकल्पना स्पष्ट करा आणि या प्रश्नाचे उत्तर द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नमुना अवकाश (Sample Space - S)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नमुना अवकाश (Sample Space - S)')
      },
      {
        key: 'diff_places',
        name: 'दोन व्यक्ती वेगवेगळ्या ठिकाणांहून निघतात',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन व्यक्ती वेगवेगळ्या ठिकाणांहून...' }],
        promptTemplate: (i) => `दोन व्यक्ती वेगवेगळ्या ठिकाणांहून निघतात यावर आधारित भेटीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन व्यक्ती वेगवेगळ्या ठिकाणांहून निघतात' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन व्यक्ती वेगवेगळ्या ठिकाणांहून निघतात')
      },
      {
        key: 'sph_radius',
        name: 'त्रिज्या दिली असता',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. त्रिज्या दिली असता...' }],
        promptTemplate: (i) => `गोळ्याची त्रिज्या दिलेली असताना घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'त्रिज्या दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('त्रिज्या दिली असता')
      },
      {
        key: 'sph_sa',
        name: 'पृष्ठफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पृष्ठफळ...' }],
        promptTemplate: (i) => `गोळ्याच्या पृष्ठफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पृष्ठफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पृष्ठफळ')
      },
      {
        key: 'sph_melt',
        name: 'वितळवून शंकू/घन तयार करणे',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वितळवून शंकू/घन...' }],
        promptTemplate: (i) => `गोळा वितळवून शंकू/घन तयार करण्यावर आधारित घनफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वितळवून शंकू/घन तयार करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वितळवून शंकू/घन तयार करणे')
      },
      {
        key: 'sp_tsa',
        name: 'एकूण पृष्ठफळ (TSA)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एकूण पृष्ठफळ...' }],
        promptTemplate: (i) => `एकूण पृष्ठफळावर (TSA) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकूण पृष्ठफळ (TSA)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकूण पृष्ठफळ (TSA)')
      },
      {
        key: 'sp_csa',
        name: 'वक्र पृष्ठफळ (CSA)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वक्र पृष्ठफळ...' }],
        promptTemplate: (i) => `वक्र पृष्ठफळावर (CSA) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वक्र पृष्ठफळ (CSA)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वक्र पृष्ठफळ (CSA)')
      },
      {
        key: 'sp_melt_remake',
        name: 'एक आकृती वितळवून दुसरी बनवणे',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वितळवून दुसरी बनवणे...' }],
        promptTemplate: (i) => `एक आकृती वितळवून दुसरी बनवण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एक आकृती वितळवून दुसरी बनवणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एक आकृती वितळवून दुसरी बनवणे')
      },
      {
        key: 'sp_tank_fill',
        name: 'टाकी भरणे/रिकामी होणे प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. टाकी भरणे/रिकामी होणे...' }],
        promptTemplate: (i) => `टाकी भरणे/रिकामी होण्यावर आधारित घनफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'टाकी भरणे/रिकामी होणे प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('टाकी भरणे/रिकामी होणे प्रश्न')
      },
      {
        key: 'sp_unit_change',
        name: 'एकक बदल (cm³ ते m³)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एकक बदल...' }],
        promptTemplate: (i) => `एकक बदलावर (उदा. cm³ ते m³) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकक बदल (cm³ ते m³)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकक बदल (cm³ ते m³)')
      },
      {
        key: 'wp_profit',
        name: 'नफा-तोटा संबंधित',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नफा-तोटा संबंधित...' }],
        promptTemplate: (i) => `नफा-तोटा संबंधित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नफा-तोटा संबंधित' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नफा-तोटा संबंधित')
      },
      {
        key: 'ap_am_simple',
        name: 'दोन संख्यांमधील AM काढणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `दोन संख्यांमधील AM काढणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन संख्यांमधील AM काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन संख्यांमधील AM काढणे')
      },
      {
        key: 'sample_space_1',
        name: 'Sample Space (नमुना अवकाश)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नमुना अवकाश म्हणजे काय?' }],
        promptTemplate: (i) => `नमुना अवकाश (Sample Space) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Sample Space (नमुना अवकाश)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Sample Space (नमुना अवकाश)')
      },
      {
        key: 'spec_word',
        name: 'Word Arrangement Problems',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शब्द रचनेचे प्रश्न...' }],
        promptTemplate: (i) => `शब्द रचनेवर आधारित स्पर्धा परीक्षेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Word Arrangement Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Word Arrangement Problems')
      },
      {
        key: 'spec_lottery',
        name: 'Lottery / Random Selection Problems',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लॉटरी किंवा यादृच्छिक निवड...' }],
        promptTemplate: (i) => `लॉटरी किंवा यादृच्छिक निवडीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Lottery / Random Selection Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Lottery / Random Selection Problems')
      }
    ]
  },
  {
    key: 'interest',
    name: 'सरळव्याज आणि चक्रवाढ व्याज',
    englishName: 'Simple & Compound Interest',
    icon: React.createElement(InterestIcon),
    subTopics: [
      {
        key: 'ci_calculate',
        name: '1. चक्रवाढ व्याज काढणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०००० रुपयांचे १०% दराने २ वर्षांचे चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `चक्रवाढ व्याज काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1. चक्रवाढ व्याज काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1. चक्रवाढ व्याज काढणे')
      },
      {
        key: 'ci_amount',
        name: '2. Amount (एकूण रक्कम) काढणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांचे ८% दराने २ वर्षांनंतर चक्रवाढ व्याजाने मिळणारी रास किती?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये एकूण रक्कम (Amount) काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2. Amount (एकूण रक्कम) काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2. Amount (एकूण रक्कम) काढणे')
      },
      {
        key: 'ci_time',
        name: '5. Time शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५% दराने ८०० रुपयांची रास किती वर्षात ८८२ रुपये होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये कालावधी (Time) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5. Time शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5. Time शोधणे')
      },
      {
        key: 'ci_yearly',
        name: '6. वार्षिक चक्रवाढ (Yearly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वार्षिक चक्रवाढ व्याजाने १००० रुपयांचे १०% दराने ३ वर्षांचे व्याज किती?' }],
        promptTemplate: (i) => `वार्षिक चक्रवाढ (Yearly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '6. वार्षिक चक्रवाढ (Yearly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('6. वार्षिक चक्रवाढ (Yearly Compounding)')
      },
      {
        key: 'ci_half_yearly',
        name: '7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ८००० रुपयांचे १०% दराने १ वर्षाचे अर्धवार्षिक चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)')
      },
      {
        key: 'ci_quarterly',
        name: '8. त्रैमासिक चक्रवाढ (Quarterly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १६००० रुपयांचे २०% दराने ९ महिन्यांचे त्रैमासिक चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `त्रैमासिक चक्रवाढ (Quarterly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '8. त्रैमासिक चक्रवाढ (Quarterly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('8. त्रैमासिक चक्रवाढ (Quarterly Compounding)')
      },
      {
        key: 'annual_growth',
        name: 'वार्षिक वाढ टक्केवारी',
        icon: React.createElement(IncreaseDecreaseIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `वार्षिक वाढ टक्केवारी वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वार्षिक वाढ टक्केवारी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वार्षिक वाढ टक्केवारी')
      },
      {
        key: 'si_time',
        name: '3. कालावधी शोधणे (Time – T)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ८००० रुपयांचे १०% दराने किती वर्षात १६०० रुपये सरळव्याज होईल?' }],
        promptTemplate: (i) => `साध्या व्याजामध्ये कालावधी (Time) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3. कालावधी शोधणे (Time – T)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3. कालावधी शोधणे (Time – T)')
      },
      {
        key: 'si_calculate',
        name: '4. साधे व्याज काढणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ४००० रुपयांचे ८% दराने ३ वर्षांचे सरळव्याज किती?' }],
        promptTemplate: (i) => `साधे व्याज काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4. साधे व्याज काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4. साधे व्याज काढणे')
      },
      {
        key: 'si_amount',
        name: '5. एकूण रक्कम (Amount = P + SI)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ६००० रुपयांचे १०% दराने २ वर्षांनंतर मिळणारी रास (Amount) किती?' }],
        promptTemplate: (i) => `साध्या व्याजामध्ये एकूण रक्कम (Amount) काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5. एकूण रक्कम (Amount = P + SI)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5. एकूण रक्कम (Amount = P + SI)')
      },
      {
        key: 'si_find_from_amount',
        name: '6. दिलेल्या Amount वरून SI शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रकमेची ३ वर्षांची रास ७४४० रुपये आणि ५ वर्षांची रास ८४०० रुपये असल्यास मुद्दल व व्याजाचा दर किती?' }],
        promptTemplate: (i) => `दिलेल्या एकूण रकमेवरून (Amount) साधे व्याज (SI) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '6. दिलेल्या Amount वरून SI शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('6. दिलेल्या Amount वरून SI शोधणे')
      },
      {
        key: 'ci_calculate_1',
        name: '1. चक्रवाढ व्याज काढणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०००० रुपयांचे १०% दराने २ वर्षांचे चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `चक्रवाढ व्याज काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1. चक्रवाढ व्याज काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1. चक्रवाढ व्याज काढणे')
      },
      {
        key: 'ci_amount_1',
        name: '2. Amount (एकूण रक्कम) काढणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांचे ८% दराने ३ वर्षांची चक्रवाढ व्याजाने रास किती होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये एकूण रक्कम (Amount) काढण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2. Amount (एकूण रक्कम) काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2. Amount (एकूण रक्कम) काढणे')
      },
      {
        key: 'ci_time_1',
        name: '5. Time शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०% दराने २००० रुपयांचे २४२० रुपये होण्यासाठी किती वर्षे लागतील?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजामध्ये कालावधी (Time) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5. Time शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5. Time शोधणे')
      },
      {
        key: 'ci_yearly_1',
        name: '6. वार्षिक चक्रवाढ (Yearly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १५००० रुपयांचे १२% दराने २ वर्षांचे वार्षिक चक्रवाढ व्याज काढा.' }],
        promptTemplate: (i) => `वार्षिक चक्रवाढ (Yearly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '6. वार्षिक चक्रवाढ (Yearly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('6. वार्षिक चक्रवाढ (Yearly Compounding)')
      },
      {
        key: 'ci_half_yearly_1',
        name: '7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०००० रुपयांचे १०% दराने १ वर्षाचे अर्धवार्षिक चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('7. अर्धवार्षिक चक्रवाढ (Half-Yearly Compounding)')
      },
      {
        key: 'ci_quarterly_1',
        name: '8. त्रैमासिक चक्रवाढ (Quarterly Compounding)',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १६००० रुपयांचे २०% दराने ९ महिन्यांचे त्रैमासिक चक्रवाढ व्याज किती?' }],
        promptTemplate: (i) => `त्रैमासिक चक्रवाढ (Quarterly Compounding) व्याजावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '8. त्रैमासिक चक्रवाढ (Quarterly Compounding)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('8. त्रैमासिक चक्रवाढ (Quarterly Compounding)')
      },
      {
        key: 'diff_si_ci',
        name: '1. SI आणि CI मधील फरक',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांचे १०% दराने २ वर्षांचे SI आणि CI मधील फरक किती?' }],
        promptTemplate: (i) => `साधे व्याज (SI) आणि चक्रवाढ व्याज (CI) मधील फरकावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1. SI आणि CI मधील फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1. SI आणि CI मधील फरक')
      },
      {
        key: 'diff_2_years',
        name: '2. 2 वर्षांसाठी SI आणि CI फरक',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २ वर्षांसाठी SI आणि CI मधील फरक २५ रुपये असून दर ५% असल्यास मुद्दल किती?' }],
        promptTemplate: (i) => `2 वर्षांसाठी साधे व्याज (SI) आणि चक्रवाढ व्याज (CI) मधील फरकावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2. 2 वर्षांसाठी SI आणि CI फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2. 2 वर्षांसाठी SI आणि CI फरक')
      },
      {
        key: 'diff_3_years',
        name: '3. 3 वर्षांसाठी SI आणि CI फरक',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ३ वर्षांसाठी SI आणि CI मधील फरक ६२ रुपये असून दर १०% असल्यास मुद्दल किती?' }],
        promptTemplate: (i) => `3 वर्षांसाठी साधे व्याज (SI) आणि चक्रवाढ व्याज (CI) मधील फरकावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3. 3 वर्षांसाठी SI आणि CI फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3. 3 वर्षांसाठी SI आणि CI फरक')
      },
      {
        key: 'find_p_from_diff',
        name: '4. दिलेल्या फरकावरून Principal शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रकमेचे २ वर्षांचे SI आणि CI मधील फरक ५० रुपये आहे, तर ती रक्कम कोणती?' }],
        promptTemplate: (i) => `साधे व्याज आणि चक्रवाढ व्याज यांच्यातील दिलेल्या फरकावरून मूळ रक्कम (Principal) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '4. दिलेल्या फरकावरून Principal शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('4. दिलेल्या फरकावरून Principal शोधणे')
      },
      {
        key: 'find_r_t_from_diff',
        name: '5. Rate किंवा Time शोधणे',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५००० रुपयांचे २ वर्षांचे SI आणि CI मधील फरक ७२ रुपये असल्यास व्याजाचा दर किती?' }],
        promptTemplate: (i) => `साधे व्याज आणि चक्रवाढ व्याज यांच्यातील फरकावरून व्याजदर (Rate) किंवा कालावधी (Time) शोधण्यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5. Rate किंवा Time शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5. Rate किंवा Time शोधणे')
      },
      {
        key: 'mixed_investment',
        name: '3. मिश्रित गुंतवणूक प्रश्न',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका माणसाने आपल्या रकमेचा १/३ भाग ७% दराने, १/४ भाग ८% दराने व उर्वरित भाग १०% दराने गुंतवला, तर सरासरी दर किती?' }],
        promptTemplate: (i) => `मिश्रित गुंतवणुकीवर आधारित व्याजाचे प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '3. मिश्रित गुंतवणूक प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('3. मिश्रित गुंतवणूक प्रश्न')
      },
      {
        key: 'amount_after_years',
        name: '5. काही वर्षांनंतर रक्कम किती होईल',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक रक्कम सरळव्याजाने २ वर्षात २२४० रुपये व ५ वर्षात २६०० रुपये होते, तर ती रक्कम किती?' }],
        promptTemplate: (i) => `काही वर्षांनंतर एकूण रक्कम किती होईल यावर आधारित प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '5. काही वर्षांनंतर रक्कम किती होईल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('5. काही वर्षांनंतर रक्कम किती होईल')
      },
      {
        key: 'arithmetic_progression',
        name: 'समांतर अंतर असलेल्या संख्या',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ७ च्या पहिल्या १० पटींची सरासरी किती?' }],
        promptTemplate: (i) => `समांतर अंतर असलेल्या संख्यांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समांतर अंतर असलेल्या संख्या' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समांतर अंतर असलेल्या संख्या')
      },
      {
        key: 'circular_perm',
        name: 'वर्तुळाकार मांडणी (Circular Permutation)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `वर्तुळाकार मांडणीवर (Circular Permutation) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वर्तुळाकार मांडणी (Circular Permutation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वर्तुळाकार मांडणी (Circular Permutation)')
      },
      {
        key: 'circ_opp_dir',
        name: 'दोन व्यक्ती विरुद्ध दिशेने',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विरुद्ध दिशेने...' }],
        promptTemplate: (i) => `वर्तुळाकार मार्गावर दोन व्यक्ती विरुद्ध दिशेने धावत असल्यास आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन व्यक्ती विरुद्ध दिशेने' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन व्यक्ती विरुद्ध दिशेने')
      },
      {
        key: 'circ_same_dir',
        name: 'एकाच दिशेने',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एकाच दिशेने...' }],
        promptTemplate: (i) => `वर्तुळाकार मार्गावर एकाच दिशेने धावत असल्यास आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकाच दिशेने' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकाच दिशेने')
      },
      {
        key: 'circ_radius',
        name: 'त्रिज्या दिली असता',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. त्रिज्या दिली असता...' }],
        promptTemplate: (i) => `वर्तुळाची त्रिज्या दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'त्रिज्या दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('त्रिज्या दिली असता')
      },
      {
        key: 'circ_diameter',
        name: 'व्यास दिला असता',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. व्यास दिला असता...' }],
        promptTemplate: (i) => `वर्तुळाचा व्यास दिलेला असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'व्यास दिला असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('व्यास दिला असता')
      },
      {
        key: 'circ_circumference',
        name: 'परिघ दिला असता क्षेत्रफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिघ दिला असता...' }],
        promptTemplate: (i) => `वर्तुळाचा परिघ दिलेला असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिघ दिला असता क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिघ दिला असता क्षेत्रफळ')
      },
      {
        key: 'circ_semi',
        name: 'अर्धवर्तुळाचे क्षेत्रफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धवर्तुळाचे क्षेत्रफळ...' }],
        promptTemplate: (i) => `अर्धवर्तुळाच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धवर्तुळाचे क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धवर्तुळाचे क्षेत्रफळ')
      },
      {
        key: 'circ_ring',
        name: 'वलय (Ring) क्षेत्रफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वलय (Ring) क्षेत्रफळ...' }],
        promptTemplate: (i) => `वलय (Ring) च्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वलय (Ring) क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वलय (Ring) क्षेत्रफळ')
      },
      {
        key: 'circ_change',
        name: 'क्षेत्रफळातील वाढ/घट',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्षेत्रफळातील वाढ/घट...' }],
        promptTemplate: (i) => `वर्तुळाच्या क्षेत्रफळातील वाढ/घटीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्षेत्रफळातील वाढ/घट' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्षेत्रफळातील वाढ/घट')
      },
      {
        key: 'rhom_side',
        name: 'बाजू दिली असता',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाजू दिली असता...' }],
        promptTemplate: (i) => `समभुज चौकोनाची (Rhombus) बाजू दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाजू दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाजू दिली असता')
      },
      {
        key: 'circle_radius',
        name: 'त्रिज्या दिलेली असताना',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. त्रिज्या दिलेली असताना...' }],
        promptTemplate: (i) => `त्रिज्या दिलेली असताना परिमिती/परिघ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'त्रिज्या दिलेली असताना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('त्रिज्या दिलेली असताना')
      },
      {
        key: 'circle_diameter',
        name: 'व्यास दिलेला असताना',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. व्यास दिलेला असताना...' }],
        promptTemplate: (i) => `व्यास दिलेला असताना परिमिती/परिघ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'व्यास दिलेला असताना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('व्यास दिलेला असताना')
      },
      {
        key: 'lin_two_single',
        name: 'दोन चल असलेले एकच समीकरण (उदा. 2x + y = 10)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन चल असलेले एकच समीकरण...' }],
        promptTemplate: (i) => `दोन चल असलेल्या एकाच समीकरणावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन चल असलेले एकच समीकरण (उदा. 2x + y = 10)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन चल असलेले एकच समीकरण (उदा. 2x + y = 10)')
      },
      {
        key: 'form_situation',
        name: 'दिलेल्या परिस्थितीतून समीकरण तयार करणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दिलेल्या परिस्थितीतून समीकरण...' }],
        promptTemplate: (i) => `दिलेल्या परिस्थितीतून समीकरण तयार करून प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिलेल्या परिस्थितीतून समीकरण तयार करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिलेल्या परिस्थितीतून समीकरण तयार करणे')
      },
      {
        key: 'ver_both_sides',
        name: 'दोन्ही बाजू समान येतात का हे पाहणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन्ही बाजू समान येतात का...' }],
        promptTemplate: (i) => `समीकरणाच्या दोन्ही बाजू समान येतात का हे तपासून पडताळणी करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन्ही बाजू समान येतात का हे पाहणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन्ही बाजू समान येतात का हे पाहणे')
      },
      {
        key: 'ap_word_financial',
        name: 'आर्थिक उदाहरणे (पगार, बचत)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका माणसाचा पगार दरवर्षी...' }],
        promptTemplate: (i) => `पगार, बचत किंवा हप्त्यांवर आधारित अंकगणित श्रेढीचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'आर्थिक उदाहरणे (पगार, बचत)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('आर्थिक उदाहरणे (पगार, बचत)')
      },
      {
        key: 'hp_basics',
        name: 'HP ची व्याख्या (AP चा व्यस्त)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `हरात्मक श्रेढीची (HP) व्याख्या स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'HP ची व्याख्या (AP चा व्यस्त)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('HP ची व्याख्या (AP चा व्यस्त)')
      },
      {
        key: 'circular_perm_1',
        name: 'Circular Permutation',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वर्तुळाकार मांडणी...' }],
        promptTemplate: (i) => `Circular Permutation वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Circular Permutation' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Circular Permutation')
      }
    ]
  },
  {
    key: 'average',
    name: 'सरासरी',
    englishName: 'Average',
    icon: React.createElement(AverageIcon),
    subTopics: [
      {
        key: 'weighted_avg',
        name: 'वजनित सरासरी (Weighted Average)',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वर्गातील ४० मुलांची सरासरी ७०% आहे आणि दुसऱ्या वर्गातील ६० मुलांची सरासरी ८०% आहे, तर दोन्ही वर्गांची एकत्रित सरासरी किती?' }],
        promptTemplate: (i) => `वजनित सरासरी (Weighted Average) आधारित टक्केवारीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वजनित सरासरी (Weighted Average)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वजनित सरासरी (Weighted Average)')
      },
      {
        key: 'arithmetic_mean',
        name: 'साधी सरासरी (Arithmetic Mean)',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १०, २०, ३०, ४० आणि ५० या संख्यांची सरासरी किती?' }],
        promptTemplate: (i) => `साधी सरासरी (Arithmetic Mean) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'साधी सरासरी (Arithmetic Mean)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('साधी सरासरी (Arithmetic Mean)')
      },
      {
        key: 'avg_short_trick',
        name: 'सरासरी काढण्याचे शॉर्ट ट्रिक',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. १ ते ५० पर्यंतच्या सर्व सम संख्यांची सरासरी किती?' }],
        promptTemplate: (i) => `सरासरी काढण्याच्या शॉर्ट ट्रिकवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सरासरी काढण्याचे शॉर्ट ट्रिक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सरासरी काढण्याचे शॉर्ट ट्रिक')
      },
      {
        key: 'ap_average',
        name: 'अंकगणित श्रेढीवरील सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५, १०, १५, ..., ५० या अंकगणित श्रेढीची सरासरी काढा.' }],
        promptTemplate: (i) => `अंकगणित श्रेढीवरील सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अंकगणित श्रेढीवरील सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अंकगणित श्रेढीवरील सरासरी')
      },
      {
        key: 'family_age',
        name: 'कुटुंबातील सदस्यांचे सरासरी वय',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५ सदस्यांच्या कुटुंबाचे सरासरी वय ३० वर्षे आहे, तर एकूण वय किती?' }],
        promptTemplate: (i) => `कुटुंबातील सदस्यांच्या सरासरी वयावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कुटुंबातील सदस्यांचे सरासरी वय' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कुटुंबातील सदस्यांचे सरासरी वय')
      },
      {
        key: 'age_after_years',
        name: 'काही वर्षांनंतरची सरासरी',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ३ वर्षांपूर्वी ५ जणांच्या कुटुंबाचे सरासरी वय २७ होते, तर आजचे सरासरी वय किती?' }],
        promptTemplate: (i) => `काही वर्षांनंतरच्या सरासरी वयावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काही वर्षांनंतरची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काही वर्षांनंतरची सरासरी')
      },
      {
        key: 'age_diff',
        name: 'वयातील फरकावर आधारित प्रश्न',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ आणि ब च्या वयाची सरासरी २० आहे, त्यांच्या वयातील फरक ४ असल्यास त्यांची वये काढा.' }],
        promptTemplate: (i) => `वयातील फरकावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वयातील फरकावर आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वयातील फरकावर आधारित प्रश्न')
      },
      {
        key: 'diff_groups',
        name: 'वेगवेगळ्या गटांची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २० मुले आणि ३० मुलींच्या गुणांची सरासरी अनुक्रमे ४० आणि ५० आहे, तर सर्वांची सरासरी किती?' }],
        promptTemplate: (i) => `वेगवेगळ्या गटांच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेगवेगळ्या गटांची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेगवेगळ्या गटांची सरासरी')
      },
      {
        key: 'weighted_mean',
        name: 'वजनित सरासरी (Weighted Mean)',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. २ किलो साखर २० रुपये दराने आणि ३ किलो साखर २५ रुपये दराने मिसळली.' }],
        promptTemplate: (i) => `वजनित सरासरी (Weighted Mean) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वजनित सरासरी (Weighted Mean)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वजनित सरासरी (Weighted Mean)')
      },
      {
        key: 'batting_avg',
        name: 'फलंदाजीची सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका फलंदाजाची ५ सामन्यातील फलंदाजीची सरासरी ४० आहे, तर त्याने एकूण किती धावा केल्या?' }],
        promptTemplate: (i) => `फलंदाजीच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'फलंदाजीची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('फलंदाजीची सरासरी')
      },
      {
        key: 'new_matches_avg',
        name: 'काही सामने जोडल्यावर नवीन सरासरी',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका फलंदाजाची १० सामन्यातील सरासरी ५० आहे. पुढील २ सामन्यात त्याने अनुक्रमे ६० आणि ७० धावा केल्यास नवीन सरासरी किती?' }],
        promptTemplate: (i) => `काही सामने जोडल्यावर नवीन सरासरी काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काही सामने जोडल्यावर नवीन सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काही सामने जोडल्यावर नवीन सरासरी')
      },
      {
        key: 'assumed_mean',
        name: 'Assumed Mean Method',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ४५, ४८, ५०, ५२, ५५ या संख्यांची सरासरी गृहीत मध्य पद्धती वापरून काढा.' }],
        promptTemplate: (i) => `Assumed Mean Method वापरून सरासरीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Assumed Mean Method' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Assumed Mean Method')
      },
      {
        key: 'wp_running',
        name: 'मैदानाभोवती धावण्याचा एक फेरा',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मैदानाभोवती धावण्याचा...' }],
        promptTemplate: (i) => `मैदानाभोवती धावण्याच्या एका फेऱ्यावर आधारित परिमितीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मैदानाभोवती धावण्याचा एक फेरा' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मैदानाभोवती धावण्याचा एक फेरा')
      },
      {
        key: 'wp_age',
        name: 'वयाशी संबंधित उदाहरणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वयाशी संबंधित उदाहरणे...' }],
        promptTemplate: (i) => `वयाशी संबंधित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वयाशी संबंधित उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वयाशी संबंधित उदाहरणे')
      }
    ]
  },
  {
    key: 'time_work',
    name: 'वेळ आणि काम',
    englishName: 'Time & Work',
    icon: React.createElement(TimeWorkIcon),
    subTopics: [
      {
        key: 'mixed_repeat_time',
        name: 'पुनरावृत्ती वेळेवरील प्रश्न',
        icon: React.createElement(ClockIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पाच घंटा अनुक्रमे २, ४, ६, ८ आणि १० सेकंदांच्या अंतराने वाजतात. त्या एका तासात किती वेळा एकत्र वाजतील?' }],
        promptTemplate: (i) => `पुनरावृत्ती वेळेवर आधारित LCM/HCF चे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पुनरावृत्ती वेळेवरील प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पुनरावृत्ती वेळेवरील प्रश्न')
      },
      {
        key: 'time_calc',
        name: 'वेळ काढणे (Time Calculation)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेळ काढणे...' }],
        promptTemplate: (i) => `वेग आणि अंतर दिले असता वेळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेळ काढणे (Time Calculation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेळ काढणे (Time Calculation)')
      },
      {
        key: 'diff_time_invest',
        name: 'वेगवेगळ्या कालावधीसाठी गुंतवणूक',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ ने १०००० रुपये ६ महिन्यांसाठी व ब ने ८००० रुपये ९ महिन्यांसाठी गुंतवले, तर नफ्याचे प्रमाण काय?' }],
        promptTemplate: (i) => `वेगवेगळ्या कालावधीसाठी गुंतवणूक केल्यास नफा वाटपाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेगवेगळ्या कालावधीसाठी गुंतवणूक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेगवेगळ्या कालावधीसाठी गुंतवणूक')
      },
      {
        key: 'capital_time',
        name: 'भांडवल व कालावधी आधारित',
        icon: React.createElement(AverageIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अ आणि ब यांनी अनुक्रमे ५००० आणि ७००० रुपये ६ महिन्यांसाठी गुंतवले, तर त्यांच्या नफ्याचे प्रमाण काय?' }],
        promptTemplate: (i) => `भांडवल व कालावधीवर आधारित भागीदारीच्या सरासरीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'भांडवल व कालावधी आधारित' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('भांडवल व कालावधी आधारित')
      },
      {
        key: 'one_day_work',
        name: '1 दिवसाचे काम काढणे',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1 दिवसाचे काम...' }],
        promptTemplate: (i) => `1 दिवसाचे काम काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '1 दिवसाचे काम काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('1 दिवसाचे काम काढणे')
      },
      {
        key: 'total_work_one',
        name: 'पूर्ण कामाला 1 मानणे (Total Work = 1 unit method)',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पूर्ण काम 1 मानून...' }],
        promptTemplate: (i) => `पूर्ण कामाला 1 मानून (Total Work = 1 unit method) प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पूर्ण कामाला 1 मानणे (Total Work = 1 unit method)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पूर्ण कामाला 1 मानणे (Total Work = 1 unit method)')
      },
      {
        key: 'a_alone',
        name: 'A एकट्याने काम पूर्ण करण्यास लागणारा वेळ',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A एकट्याने...' }],
        promptTemplate: (i) => `A एकट्याने काम पूर्ण करण्यास लागणारा वेळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'A एकट्याने काम पूर्ण करण्यास लागणारा वेळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('A एकट्याने काम पूर्ण करण्यास लागणारा वेळ')
      },
      {
        key: 'days_to_one_day',
        name: 'दिवसांवरून 1 दिवसाचे काम काढणे',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दिवसांवरून 1 दिवसाचे काम...' }],
        promptTemplate: (i) => `दिवसांवरून 1 दिवसाचे काम काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिवसांवरून 1 दिवसाचे काम काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिवसांवरून 1 दिवसाचे काम काढणे')
      },
      {
        key: 'partial_work',
        name: 'अर्धवट काम दिले असल्यास वेळ शोधणे',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धवट काम...' }],
        promptTemplate: (i) => `अर्धवट काम दिले असल्यास वेळ शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धवट काम दिले असल्यास वेळ शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धवट काम दिले असल्यास वेळ शोधणे')
      },
      {
        key: 'remaining_work',
        name: 'उरलेले काम किती दिवसात पूर्ण होईल',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. उरलेले काम...' }],
        promptTemplate: (i) => `उरलेले काम किती दिवसात पूर्ण होईल यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उरलेले काम किती दिवसात पूर्ण होईल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उरलेले काम किती दिवसात पूर्ण होईल')
      },
      {
        key: 'a_and_b',
        name: 'A आणि B मिळून काम पूर्ण करण्यास लागणारा वेळ',
        icon: React.createElement(TimeWorkIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `A आणि B मिळून काम पूर्ण करण्यास लागणारा वेळ वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'A आणि B मिळून काम पूर्ण करण्यास लागणारा वेळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('A आणि B मिळून काम पूर्ण करण्यास लागणारा वेळ')
      },
      {
        key: 'diff_times',
        name: 'एका ठिकाणाहून वेगवेगळ्या वेळी निघणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका ठिकाणाहून वेगवेगळ्या वेळी...' }],
        promptTemplate: (i) => `एका ठिकाणाहून वेगवेगळ्या वेळी निघण्यावर आधारित भेटीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एका ठिकाणाहून वेगवेगळ्या वेळी निघणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एका ठिकाणाहून वेगवेगळ्या वेळी निघणे')
      },
      {
        key: 'makeup_time',
        name: 'विशिष्ट वेळ भरून काढणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विशिष्ट वेळ भरून काढणे...' }],
        promptTemplate: (i) => `विशिष्ट वेळ भरून काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विशिष्ट वेळ भरून काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विशिष्ट वेळ भरून काढणे')
      },
      {
        key: 'meet_after_time',
        name: 'ठराविक वेळेनंतर भेटणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ठराविक वेळेनंतर भेटणे...' }],
        promptTemplate: (i) => `वर्तुळाकार मार्गावर ठराविक वेळेनंतर भेटण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ठराविक वेळेनंतर भेटणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ठराविक वेळेनंतर भेटणे')
      },
      {
        key: 'how_many_times_meet',
        name: 'किती वेळा भेटतील',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. किती वेळा भेटतील...' }],
        promptTemplate: (i) => `वर्तुळाकार मार्गावर किती वेळा भेटतील यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'किती वेळा भेटतील' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('किती वेळा भेटतील')
      },
      {
        key: 'cyl_tank',
        name: 'टाकी/पाण्याचे प्रश्न',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. टाकी/पाण्याचे प्रश्न...' }],
        promptTemplate: (i) => `सिलिंडर आकाराच्या टाकी/पाण्यावर आधारित घनफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'टाकी/पाण्याचे प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('टाकी/पाण्याचे प्रश्न')
      },
      {
        key: 'var_two',
        name: 'दोन चल असलेली उदाहरणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन चल असलेली उदाहरणे...' }],
        promptTemplate: (i) => `दोन चल असलेल्या बीजगणिताच्या प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन चल असलेली उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन चल असलेली उदाहरणे')
      },
      {
        key: 'wp_work',
        name: 'काम आणि वेळ',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. काम आणि वेळ...' }],
        promptTemplate: (i) => `काम आणि वेळ यावर आधारित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'काम आणि वेळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('काम आणि वेळ')
      }
    ]
  },
  {
    key: 'speed_time_distance',
    name: 'वेग, वेळ आणि अंतर',
    englishName: 'Speed, Time & Distance',
    icon: React.createElement(SpeedIcon),
    subTopics: [
      {
        key: 'ratio_speed',
        name: 'प्रमाण व वेग-वेळ-अंतर',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन गाड्यांच्या वेगाचे प्रमाण ४:५ आहे, तर एकाच अंतरासाठी त्यांना लागणाऱ्या वेळेचे प्रमाण काय असेल?' }],
        promptTemplate: (i) => `प्रमाण व वेग-वेळ-अंतर (Ratio & Speed-Time-Distance) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रमाण व वेग-वेळ-अंतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रमाण व वेग-वेळ-अंतर')
      },
      {
        key: 'dist_calc',
        name: 'अंतर काढणे (Distance Calculation)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अंतर काढणे...' }],
        promptTemplate: (i) => `वेग आणि वेळ दिली असता अंतर काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अंतर काढणे (Distance Calculation)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अंतर काढणे (Distance Calculation)')
      },
      {
        key: 'avg_speed_formula',
        name: 'सरासरी वेग सूत्र (2xy / x+y)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सरासरी वेग...' }],
        promptTemplate: (i) => `सरासरी वेग (Average Speed) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सरासरी वेग सूत्र (2xy / x+y)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सरासरी वेग सूत्र (2xy / x+y)')
      },
      {
        key: 'avg_speed_dist',
        name: 'वेगवेगळ्या अंतरासाठी सरासरी वेग',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेगवेगळ्या अंतरासाठी...' }],
        promptTemplate: (i) => `वेगवेगळ्या अंतरासाठी सरासरी वेग काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेगवेगळ्या अंतरासाठी सरासरी वेग' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेगवेगळ्या अंतरासाठी सरासरी वेग')
      },
      {
        key: 'avg_speed_trip',
        name: 'संपूर्ण प्रवासाचा सरासरी वेग',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संपूर्ण प्रवासाचा...' }],
        promptTemplate: (i) => `संपूर्ण प्रवासावर आधारित सरासरी वेगाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संपूर्ण प्रवासाचा सरासरी वेग' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संपूर्ण प्रवासाचा सरासरी वेग')
      },
      {
        key: 'avg_speed_same_dist',
        name: 'समान अंतरावर वेगाची सरासरी',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक गाडी ६० किमी/तास वेगाने जाते आणि ४० किमी/तास वेगाने परत येते, तर सरासरी वेग किती?' }],
        promptTemplate: (i) => `समान अंतरावर वेगाच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान अंतरावर वेगाची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान अंतरावर वेगाची सरासरी')
      },
      {
        key: 'avg_speed_same_time',
        name: 'समान वेळेवर वेगाची सरासरी',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक व्यक्ती २ तास ५० किमी/तास वेगाने आणि ३ तास ६० किमी/तास वेगाने प्रवास करतो.' }],
        promptTemplate: (i) => `समान वेळेवर वेगाच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान वेळेवर वेगाची सरासरी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान वेळेवर वेगाची सरासरी')
      },
      {
        key: 'avg_speed_up_down',
        name: 'ये-जा (Up & Down) प्रकार',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. डोंगर चढताना वेग १० किमी/तास आणि उतरताना १५ किमी/तास असल्यास सरासरी वेग किती?' }],
        promptTemplate: (i) => `ये-जा (Up & Down) प्रकारातील वेगाच्या सरासरीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ये-जा (Up & Down) प्रकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ये-जा (Up & Down) प्रकार')
      },
      {
        key: 'same_dir',
        name: 'एकाच दिशेने चालणारे दोन व्यक्ती/वाहने',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एकाच दिशेने...' }],
        promptTemplate: (i) => `एकाच दिशेने चालणारे दोन व्यक्ती/वाहने यावर आधारित सापेक्ष वेगाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकाच दिशेने चालणारे दोन व्यक्ती/वाहने' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकाच दिशेने चालणारे दोन व्यक्ती/वाहने')
      },
      {
        key: 'opp_dir',
        name: 'विरुद्ध दिशेने चालणारे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विरुद्ध दिशेने...' }],
        promptTemplate: (i) => `विरुद्ध दिशेने चालणारे दोन व्यक्ती/वाहने यावर आधारित सापेक्ष वेगाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विरुद्ध दिशेने चालणारे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विरुद्ध दिशेने चालणारे')
      },
      {
        key: 'overtaking',
        name: 'ओव्हरटेकिंग प्रश्न',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ओव्हरटेकिंग...' }],
        promptTemplate: (i) => `ओव्हरटेकिंग (Overtaking) यावर आधारित सापेक्ष वेगाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ओव्हरटेकिंग प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ओव्हरटेकिंग प्रश्न')
      },
      {
        key: 'trains_towards_each_other',
        name: 'दोन गाड्या वेगवेगळ्या ठिकाणांहून एकमेकांकडे येणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन गाड्या एकमेकांकडे...' }],
        promptTemplate: (i) => `दोन गाड्या वेगवेगळ्या ठिकाणांहून एकमेकांकडे येण्यावर आधारित सापेक्ष वेगाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन गाड्या वेगवेगळ्या ठिकाणांहून एकमेकांकडे येणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन गाड्या वेगवेगळ्या ठिकाणांहून एकमेकांकडे येणे')
      },
      {
        key: 'train_pole',
        name: 'ट्रेन खांब पार करते',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ट्रेन खांब पार करते...' }],
        promptTemplate: (i) => `ट्रेन खांब पार करते यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ट्रेन खांब पार करते' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ट्रेन खांब पार करते')
      },
      {
        key: 'train_platform',
        name: 'ट्रेन प्लॅटफॉर्म पार करते',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ट्रेन प्लॅटफॉर्म पार करते...' }],
        promptTemplate: (i) => `ट्रेन प्लॅटफॉर्म पार करते यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ट्रेन प्लॅटफॉर्म पार करते' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ट्रेन प्लॅटफॉर्म पार करते')
      },
      {
        key: 'two_trains_cross',
        name: 'दोन ट्रेन एकमेकांना पार करतात',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन ट्रेन एकमेकांना पार करतात...' }],
        promptTemplate: (i) => `दोन ट्रेन एकमेकांना पार करतात यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन ट्रेन एकमेकांना पार करतात' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन ट्रेन एकमेकांना पार करतात')
      },
      {
        key: 'train_and_man',
        name: 'ट्रेन आणि माणूस (चालणारा/स्थिर)',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ट्रेन आणि माणूस...' }],
        promptTemplate: (i) => `ट्रेन आणि माणूस (चालणारा/स्थिर) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ट्रेन आणि माणूस (चालणारा/स्थिर)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ट्रेन आणि माणूस (चालणारा/स्थिर)')
      },
      {
        key: 'train_length',
        name: 'ट्रेनची लांबी काढणे',
        icon: React.createElement(TrainIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ट्रेनची लांबी काढणे...' }],
        promptTemplate: (i) => `ट्रेनची लांबी काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ट्रेनची लांबी काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ट्रेनची लांबी काढणे')
      },
      {
        key: 'downstream',
        name: 'प्रवाहाच्या दिशेने (Downstream)',
        icon: React.createElement(BoatIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रवाहाच्या दिशेने...' }],
        promptTemplate: (i) => `प्रवाहाच्या दिशेने (Downstream) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रवाहाच्या दिशेने (Downstream)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रवाहाच्या दिशेने (Downstream)')
      },
      {
        key: 'upstream',
        name: 'प्रवाहाच्या विरुद्ध (Upstream)',
        icon: React.createElement(BoatIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रवाहाच्या विरुद्ध...' }],
        promptTemplate: (i) => `प्रवाहाच्या विरुद्ध (Upstream) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रवाहाच्या विरुद्ध (Upstream)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रवाहाच्या विरुद्ध (Upstream)')
      },
      {
        key: 'still_water',
        name: 'स्थिर पाण्यातील वेग',
        icon: React.createElement(BoatIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. स्थिर पाण्यातील वेग...' }],
        promptTemplate: (i) => `स्थिर पाण्यातील वेग यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'स्थिर पाण्यातील वेग' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('स्थिर पाण्यातील वेग')
      },
      {
        key: 'stream_speed',
        name: 'प्रवाहाचा वेग काढणे',
        icon: React.createElement(BoatIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. प्रवाहाचा वेग काढणे...' }],
        promptTemplate: (i) => `प्रवाहाचा वेग काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रवाहाचा वेग काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रवाहाचा वेग काढणे')
      },
      {
        key: 'round_trip_boat',
        name: 'ये-जा (Round Trip) प्रश्न',
        icon: React.createElement(BoatIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ये-जा (Round Trip)...' }],
        promptTemplate: (i) => `बोट व प्रवाहातील ये-जा (Round Trip) यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ये-जा (Round Trip) प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ये-जा (Round Trip) प्रश्न')
      },
      {
        key: 'stop_rest',
        name: 'मध्येच थांबणे किंवा विश्रांती घेणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मध्येच थांबणे किंवा विश्रांती...' }],
        promptTemplate: (i) => `मध्येच थांबणे किंवा विश्रांती घेण्यावर आधारित भेटीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मध्येच थांबणे किंवा विश्रांती घेणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मध्येच थांबणे किंवा विश्रांती घेणे')
      },
      {
        key: 'turn_back',
        name: 'परत फिरणे (Turn Back)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परत फिरणे...' }],
        promptTemplate: (i) => `परत फिरणे (Turn Back) यावर आधारित भेटीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परत फिरणे (Turn Back)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परत फिरणे (Turn Back)')
      },
      {
        key: 'reach_early',
        name: 'ठरलेल्या वेळेपेक्षा लवकर पोहोचणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लवकर पोहोचणे...' }],
        promptTemplate: (i) => `ठरलेल्या वेळेपेक्षा लवकर पोहोचणे यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'ठरलेल्या वेळेपेक्षा लवकर पोहोचणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('ठरलेल्या वेळेपेक्षा लवकर पोहोचणे')
      },
      {
        key: 'reach_late',
        name: 'उशिरा पोहोचणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. उशिरा पोहोचणे...' }],
        promptTemplate: (i) => `उशिरा पोहोचणे यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उशिरा पोहोचणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उशिरा पोहोचणे')
      },
      {
        key: 'speed_increase_decrease',
        name: 'वेग वाढवल्यास/कमी केल्यास परिणाम',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेग वाढवल्यास/कमी केल्यास...' }],
        promptTemplate: (i) => `वेग वाढवल्यास/कमी केल्यास वेळेवर होणारा परिणाम यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेग वाढवल्यास/कमी केल्यास परिणाम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेग वाढवल्यास/कमी केल्यास परिणाम')
      },
      {
        key: 'lead_in_race',
        name: 'शर्यतीत आघाडी (Lead) काढणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शर्यतीत आघाडी...' }],
        promptTemplate: (i) => `शर्यतीत आघाडी (Lead) काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शर्यतीत आघाडी (Lead) काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शर्यतीत आघाडी (Lead) काढणे')
      },
      {
        key: 'same_dist_race',
        name: 'समान अंतर पूर्ण करणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समान अंतर पूर्ण करणे...' }],
        promptTemplate: (i) => `समान अंतर पूर्ण करण्यावर आधारित शर्यतीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान अंतर पूर्ण करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान अंतर पूर्ण करणे')
      },
      {
        key: 'lap_race',
        name: 'लॅप रेस (Circular Track)',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लॅप रेस...' }],
        promptTemplate: (i) => `लॅप रेस (Circular Track) यावर आधारित शर्यतीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लॅप रेस (Circular Track)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लॅप रेस (Circular Track)')
      },
      {
        key: 'remaining_dist',
        name: 'उरलेले अंतर काढणे',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. उरलेले अंतर...' }],
        promptTemplate: (i) => `शर्यतीत उरलेले अंतर काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उरलेले अंतर काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उरलेले अंतर काढणे')
      },
      {
        key: 'half_time_diff_speed',
        name: 'अर्धा वेळ एका वेगाने, अर्धा वेळ दुसऱ्या वेगाने',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धा वेळ एका वेगाने...' }],
        promptTemplate: (i) => `अर्धा वेळ एका वेगाने, अर्धा वेळ दुसऱ्या वेगाने यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धा वेळ एका वेगाने, अर्धा वेळ दुसऱ्या वेगाने' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धा वेळ एका वेगाने, अर्धा वेळ दुसऱ्या वेगाने')
      },
      {
        key: 'half_dist_diff_speed',
        name: 'अर्धे अंतर एका वेगाने, उरलेले दुसऱ्या वेगाने',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धे अंतर एका वेगाने...' }],
        promptTemplate: (i) => `अर्धे अंतर एका वेगाने, उरलेले दुसऱ्या वेगाने यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धे अंतर एका वेगाने, उरलेले दुसऱ्या वेगाने' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धे अंतर एका वेगाने, उरलेले दुसऱ्या वेगाने')
      },
      {
        key: 'speed_perc_change',
        name: 'वेगात टक्केवारीने वाढ/कपात',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेगात टक्केवारीने वाढ...' }],
        promptTemplate: (i) => `वेगात टक्केवारीने वाढ/कपात यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेगात टक्केवारीने वाढ/कपात' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेगात टक्केवारीने वाढ/कपात')
      },
      {
        key: 'speed_change_effect',
        name: 'वेग बदलल्यावर वेळेवर परिणाम',
        icon: React.createElement(SpeedIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेग बदलल्यावर वेळेवर परिणाम...' }],
        promptTemplate: (i) => `वेग बदलल्यावर वेळेवर होणारा परिणाम यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेग बदलल्यावर वेळेवर परिणाम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेग बदलल्यावर वेळेवर परिणाम')
      },
      {
        key: 'wp_speed',
        name: 'वेग, वेळ आणि अंतर',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वेग, वेळ आणि अंतर...' }],
        promptTemplate: (i) => `वेग, वेळ आणि अंतर यावर आधारित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वेग, वेळ आणि अंतर' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वेग, वेळ आणि अंतर')
      }
    ]
  },
  {
    key: 'area_volume',
    name: 'क्षेत्रफळ आणि घनफळ',
    englishName: 'Area & Volume',
    icon: React.createElement(AreaVolumeIcon),
    subTopics: [
      {
        key: 'surd_area',
        name: 'क्षेत्रफळ आणि बाजू संबंधी प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. चौरसाचे क्षेत्रफळ 50 आहे, तर बाजू काढा' }],
        promptTemplate: (i) => `क्षेत्रफळ आणि बाजू संबंधी करणीच्या उपयोगावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्षेत्रफळ आणि बाजू संबंधी प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्षेत्रफळ आणि बाजू संबंधी प्रश्न')
      },
      {
        key: 'sq_perimeter',
        name: 'परिमिती दिली असेल तर क्षेत्रफळ',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमिती दिली असेल...' }],
        promptTemplate: (i) => `चौकोनाची परिमिती दिलेली असताना क्षेत्रफळ काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमिती दिली असेल तर क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमिती दिली असेल तर क्षेत्रफळ')
      },
      {
        key: 'rect_lw',
        name: 'लांबी व रुंदी दिली असता',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लांबी व रुंदी...' }],
        promptTemplate: (i) => `आयताची लांबी व रुंदी दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लांबी व रुंदी दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लांबी व रुंदी दिली असता')
      },
      {
        key: 'rect_perim_side',
        name: 'परिमिती व एक बाजू दिली असता',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमिती व एक बाजू...' }],
        promptTemplate: (i) => `आयताची परिमिती व एक बाजू दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमिती व एक बाजू दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमिती व एक बाजू दिली असता')
      },
      {
        key: 'rect_lw_change',
        name: 'लांबी/रुंदी वाढल्यावर परिणाम',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लांबी/रुंदी वाढल्यावर...' }],
        promptTemplate: (i) => `आयताची लांबी/रुंदी वाढल्यावर क्षेत्रफळावर होणाऱ्या परिणामावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लांबी/रुंदी वाढल्यावर परिणाम' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लांबी/रुंदी वाढल्यावर परिणाम')
      },
      {
        key: 'tri_bh',
        name: 'आधार व उंची दिली असता',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. आधार व उंची...' }],
        promptTemplate: (i) => `त्रिकोणाचा आधार व उंची दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'आधार व उंची दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('आधार व उंची दिली असता')
      },
      {
        key: 'tri_equilateral',
        name: 'समबाहु त्रिकोणाचे क्षेत्रफळ',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समबाहु त्रिकोणाचे...' }],
        promptTemplate: (i) => `समबाहु त्रिकोणाच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समबाहु त्रिकोणाचे क्षेत्रफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समबाहु त्रिकोणाचे क्षेत्रफळ')
      },
      {
        key: 'tri_heron',
        name: 'हिरॉन सूत्रावर आधारित प्रश्न',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. हिरॉन सूत्र...' }],
        promptTemplate: (i) => `हिरॉन सूत्रावर आधारित त्रिकोणाच्या क्षेत्रफळाचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'हिरॉन सूत्रावर आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('हिरॉन सूत्रावर आधारित प्रश्न')
      },
      {
        key: 'tri_same_bh',
        name: 'समान आधार/समान उंची असलेले त्रिकोण',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समान आधार/समान उंची...' }],
        promptTemplate: (i) => `समान आधार/समान उंची असलेल्या त्रिकोणांच्या क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान आधार/समान उंची असलेले त्रिकोण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान आधार/समान उंची असलेले त्रिकोण')
      },
      {
        key: 'trap_parallel',
        name: 'दोन समांतर बाजू व उंची',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन समांतर बाजू व उंची...' }],
        promptTemplate: (i) => `समलंब चतुर्भुजाच्या दोन समांतर बाजू व उंची दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन समांतर बाजू व उंची' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन समांतर बाजू व उंची')
      },
      {
        key: 'para_bh',
        name: 'आधार व उंची',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. आधार व उंची...' }],
        promptTemplate: (i) => `समांतर चतुर्भुजाचा आधार व उंची दिलेली असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'आधार व उंची' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('आधार व उंची')
      },
      {
        key: 'para_same_bh',
        name: 'समान आधार व उंचीचे प्रकार',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समान आधार व उंचीचे प्रकार...' }],
        promptTemplate: (i) => `समान आधार व उंची असलेल्या समांतर चतुर्भुजावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समान आधार व उंचीचे प्रकार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समान आधार व उंचीचे प्रकार')
      },
      {
        key: 'rhom_diagonals',
        name: 'कर्ण दिलेले असताना',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कर्ण दिलेले असताना...' }],
        promptTemplate: (i) => `समभुज चौकोनाचे (Rhombus) कर्ण दिलेले असताना क्षेत्रफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'कर्ण दिलेले असताना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('कर्ण दिलेले असताना')
      },
      {
        key: 'cube_sa_vol',
        name: 'पृष्ठफळ व घनफळ संबंध',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पृष्ठफळ व घनफळ...' }],
        promptTemplate: (i) => `घनाचे पृष्ठफळ व घनफळ यांच्या संबंधावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पृष्ठफळ व घनफळ संबंध' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पृष्ठफळ व घनफळ संबंध')
      },
      {
        key: 'cuboid_lwh',
        name: 'लांबी, रुंदी, उंची दिली असता',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. लांबी, रुंदी, उंची...' }],
        promptTemplate: (i) => `घनाभाची लांबी, रुंदी, उंची दिलेली असताना घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'लांबी, रुंदी, उंची दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('लांबी, रुंदी, उंची दिली असता')
      },
      {
        key: 'cuboid_tsa',
        name: 'पृष्ठफळ (Total Surface Area)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पृष्ठफळ (TSA)...' }],
        promptTemplate: (i) => `घनाभाच्या एकूण पृष्ठफळावर (TSA) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पृष्ठफळ (Total Surface Area)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पृष्ठफळ (Total Surface Area)')
      },
      {
        key: 'cuboid_change',
        name: 'बाजू बदलल्यावर घनफळ बदल',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बाजू बदलल्यावर...' }],
        promptTemplate: (i) => `घनाभाची बाजू बदलल्यावर घनफळातील बदलावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'बाजू बदलल्यावर घनफळ बदल' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('बाजू बदलल्यावर घनफळ बदल')
      },
      {
        key: 'cyl_rh',
        name: 'त्रिज्या व उंची दिली असता',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. त्रिज्या व उंची...' }],
        promptTemplate: (i) => `सिलिंडरची त्रिज्या व उंची दिलेली असताना घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'त्रिज्या व उंची दिली असता' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('त्रिज्या व उंची दिली असता')
      },
      {
        key: 'cyl_csa',
        name: 'वक्र पृष्ठफळ',
        icon: React.createElement(CylinderConeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वक्र पृष्ठफळ...' }],
        promptTemplate: (i) => `सिलिंडरच्या वक्र पृष्ठफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वक्र पृष्ठफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वक्र पृष्ठफळ')
      },
      {
        key: 'hemi_vol',
        name: 'घनफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. घनफळ...' }],
        promptTemplate: (i) => `अर्धगोळ्याच्या घनफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घनफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घनफळ')
      },
      {
        key: 'hemi_csa',
        name: 'वक्र पृष्ठफळ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वक्र पृष्ठफळ...' }],
        promptTemplate: (i) => `अर्धगोळ्याच्या वक्र पृष्ठफळावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'वक्र पृष्ठफळ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('वक्र पृष्ठफळ')
      },
      {
        key: 'sp_surface_area',
        name: 'पृष्ठफळ (Surface Area)',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पृष्ठफळ...' }],
        promptTemplate: (i) => `पृष्ठफळावर (Surface Area) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पृष्ठफळ (Surface Area)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पृष्ठफळ (Surface Area)')
      },
      {
        key: 'sp_vol_compare',
        name: 'घनफळ तुलना प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. घनफळ तुलना...' }],
        promptTemplate: (i) => `घनफळाच्या तुलनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'घनफळ तुलना प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('घनफळ तुलना प्रश्न')
      },
      {
        key: 'comp_area_perc',
        name: 'क्षेत्रफळावर आधारित टक्केवारी प्रश्न',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्षेत्रफळावर आधारित टक्केवारी...' }],
        promptTemplate: (i) => `क्षेत्रफळावर आधारित टक्केवारीच्या प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'क्षेत्रफळावर आधारित टक्केवारी प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('क्षेत्रफळावर आधारित टक्केवारी प्रश्न')
      },
      {
        key: 'comp_perim_area',
        name: 'परिमिती व क्षेत्रफळ तुलना',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमिती व क्षेत्रफळ तुलना...' }],
        promptTemplate: (i) => `परिमिती व क्षेत्रफळ यांच्या तुलनेवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमिती व क्षेत्रफळ तुलना' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमिती व क्षेत्रफळ तुलना')
      },
      {
        key: 'comp_shaded_area',
        name: 'शेडेड भाग शोधणे',
        icon: React.createElement(AreaVolumeIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शेडेड भाग शोधणे...' }],
        promptTemplate: (i) => `आकृतीतील शेडेड (Shaded) भाग शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शेडेड भाग शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शेडेड भाग शोधणे')
      },
      {
        key: 'what_is_perim',
        name: 'परिमिती म्हणजे काय?',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमिती म्हणजे काय?' }],
        promptTemplate: (i) => `परिमिती म्हणजे काय यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमिती म्हणजे काय?' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमिती म्हणजे काय?')
      },
      {
        key: 'perim_vs_area',
        name: 'परिमिती आणि क्षेत्रफळ यांतील फरक',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परिमिती आणि क्षेत्रफळ यांतील फरक...' }],
        promptTemplate: (i) => `परिमिती आणि क्षेत्रफळ यांतील फरकावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'परिमिती आणि क्षेत्रफळ यांतील फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('परिमिती आणि क्षेत्रफळ यांतील फरक')
      },
      {
        key: 'perim_units',
        name: 'एकके (cm, m, km इ.)',
        icon: React.createElement(ConversionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एकके...' }],
        promptTemplate: (i) => `परिमितीच्या एककांवर (cm, m, km इ.) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एकके (cm, m, km इ.)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एकके (cm, m, km इ.)')
      },
      {
        key: 'perim_real_life',
        name: 'प्रत्यक्ष जीवनातील उदाहरणे (शेताची कुंपण, प्लॉटची सीमा)',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शेताची कुंपण...' }],
        promptTemplate: (i) => `परिमितीच्या प्रत्यक्ष जीवनातील उदाहरणांवर (शेताची कुंपण, प्लॉटची सीमा) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'प्रत्यक्ष जीवनातील उदाहरणे (शेताची कुंपण, प्लॉटची सीमा)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('प्रत्यक्ष जीवनातील उदाहरणे (शेताची कुंपण, प्लॉटची सीमा)')
      },
      {
        key: 'tri_equilateral_1',
        name: 'समबाहु त्रिकोण',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समबाहु त्रिकोण...' }],
        promptTemplate: (i) => `समबाहु त्रिकोणाच्या परिमितीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समबाहु त्रिकोण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समबाहु त्रिकोण')
      },
      {
        key: 'tri_isosceles',
        name: 'समद्विबाहु त्रिकोण',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समद्विबाहु त्रिकोण...' }],
        promptTemplate: (i) => `समद्विबाहु त्रिकोणाच्या परिमितीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समद्विबाहु त्रिकोण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समद्विबाहु त्रिकोण')
      },
      {
        key: 'tri_scalene',
        name: 'विविधबाहु त्रिकोण',
        icon: React.createElement(TriangleIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विविधबाहु त्रिकोण...' }],
        promptTemplate: (i) => `विविधबाहु त्रिकोणाच्या परिमितीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विविधबाहु त्रिकोण' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विविधबाहु त्रिकोण')
      },
      {
        key: 'semicircle_perim',
        name: 'अर्धवर्तुळाचा परिघ',
        icon: React.createElement(SphereIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अर्धवर्तुळाचा परिघ...' }],
        promptTemplate: (i) => `अर्धवर्तुळाच्या परिघावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'अर्धवर्तुळाचा परिघ' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('अर्धवर्तुळाचा परिघ')
      }
    ]
  },
  {
    key: 'perimeter',
    name: 'परिमिती',
    englishName: 'Perimeter',
    icon: React.createElement(PerimeterIcon),
    subTopics: [
      {
        key: 'wp_fence',
        name: 'शेताला कुंपण घालण्यासाठी लागणारी तार',
        icon: React.createElement(PerimeterIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शेताला कुंपण...' }],
        promptTemplate: (i) => `शेताला कुंपण घालण्यासाठी लागणाऱ्या तारेवर आधारित परिमितीचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शेताला कुंपण घालण्यासाठी लागणारी तार' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शेताला कुंपण घालण्यासाठी लागणारी तार')
      },
      {
        key: 'wp_money',
        name: 'पैशांशी संबंधित उदाहरणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पैशांशी संबंधित उदाहरणे...' }],
        promptTemplate: (i) => `पैशांशी संबंधित बीजगणिताच्या शब्दमंजुषा प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पैशांशी संबंधित उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पैशांशी संबंधित उदाहरणे')
      }
    ]
  },
  {
    key: 'algebra',
    name: 'बीजगणित',
    englishName: 'Algebra',
    icon: React.createElement(AlgebraIcon),
    subTopics: [
      {
        key: 'x_more_less_y',
        name: 'X is what percent more/less than Y',
        icon: React.createElement(ComparisonIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `X is what percent more/less than Y वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'X is what percent more/less than Y' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('X is what percent more/less than Y')
      },
      {
        key: 'alg_variables',
        name: 'चल (x, y) वापरून परिमिती काढणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. चल (x, y) वापरून...' }],
        promptTemplate: (i) => `चल (x, y) वापरून परिमिती काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'चल (x, y) वापरून परिमिती काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('चल (x, y) वापरून परिमिती काढणे')
      },
      {
        key: 'alg_equation',
        name: 'समीकरण तयार करून उत्तर शोधणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. समीकरण तयार करून...' }],
        promptTemplate: (i) => `समीकरण तयार करून परिमितीचे उत्तर शोधण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'समीकरण तयार करून उत्तर शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('समीकरण तयार करून उत्तर शोधणे')
      },
      {
        key: 'var_one',
        name: 'एक चल असलेली उदाहरणे (x, y)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक चल असलेली उदाहरणे...' }],
        promptTemplate: (i) => `एक चल (x, y) असलेल्या बीजगणिताच्या प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'एक चल असलेली उदाहरणे (x, y)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('एक चल असलेली उदाहरणे (x, y)')
      },
      {
        key: 'var_pos_neg',
        name: 'धन व ऋण संख्यांसह उदाहरणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. धन व ऋण संख्यांसह उदाहरणे...' }],
        promptTemplate: (i) => `धन व ऋण संख्यांसह असलेल्या बीजगणिताच्या प्रश्नाचे निराकरण करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'धन व ऋण संख्यांसह उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('धन व ऋण संख्यांसह उदाहरणे')
      },
      {
        key: 'alg_linear_one',
        name: '2) साधी रेषीय समीकरणे (Linear Equations in One Variable)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. साधी रेषीय समीकरणे...' }],
        promptTemplate: (i) => `एका चलातील साध्या रेषीय समीकरणावर (Linear Equations in One Variable) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '2) साधी रेषीय समीकरणे (Linear Equations in One Variable)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('2) साधी रेषीय समीकरणे (Linear Equations in One Variable)')
      },
      {
        key: 'form_words',
        name: 'शब्दातून बीजगणितीय रूपांतर करणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शब्दातून बीजगणितीय रूपांतर...' }],
        promptTemplate: (i) => `शब्दातून बीजगणितीय रूपांतर करून प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'शब्दातून बीजगणितीय रूपांतर करणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('शब्दातून बीजगणितीय रूपांतर करणे')
      },
      {
        key: 'ver_check_ans',
        name: 'उत्तर तपासणे',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. उत्तर तपासणे...' }],
        promptTemplate: (i) => `समीकरणाचे उत्तर तपासा (Verification of Equation): ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'उत्तर तपासणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('उत्तर तपासणे')
      }
    ]
  },
  {
    key: 'series',
    name: 'मालिका',
    englishName: 'Series',
    icon: React.createElement(APIcon),
    subTopics: [
      {
        key: 'ap_def',
        name: 'श्रेढी (Sequence) आणि मालिका (Series) यातील फरक',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. श्रेढी आणि मालिका...' }],
        promptTemplate: (i) => `श्रेढी (Sequence) आणि मालिका (Series) यातील फरकावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'श्रेढी (Sequence) आणि मालिका (Series) यातील फरक' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('श्रेढी (Sequence) आणि मालिका (Series) यातील फरक')
      },
      {
        key: 'ap_terms',
        name: 'पहिले पद (a) आणि सामान्य फरक (d)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `पहिले पद (a) आणि सामान्य फरक (d) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिले पद (a) आणि सामान्य फरक (d)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिले पद (a) आणि सामान्य फरक (d)')
      },
      {
        key: 'ap_check',
        name: 'दिलेली श्रेढी AP आहे का ते तपासणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 's', label: 'श्रेढी (उदा. 2, 4, 6, ...)', type: 'text' }],
        promptTemplate: (i) => `दिलेली श्रेढी ${i.s} ही अंकगणित श्रेढी (AP) आहे का ते तपासा. असल्यास सामान्य फरक (d) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिलेली श्रेढी AP आहे का ते तपासणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिलेली श्रेढी AP आहे का ते तपासणे')
      },
      {
        key: 'ap_find_tn',
        name: 'tₙ = a + (n-1)d सूत्र वापरून पद काढणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `tₙ = a + (n-1)d सूत्र वापरून पद काढणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'tₙ = a + (n-1)d सूत्र वापरून पद काढणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('tₙ = a + (n-1)d सूत्र वापरून पद काढणे')
      },
      {
        key: 'ap_find_n',
        name: 'दिलेल्या tₙ वरून n शोधणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `दिलेल्या tₙ वरून n शोधणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दिलेल्या tₙ वरून n शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दिलेल्या tₙ वरून n शोधणे')
      },
      {
        key: 'ap_find_a_d',
        name: 'दोन पदांवरून a आणि d शोधणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `दोन पदांवरून a आणि d शोधणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन पदांवरून a आणि d शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन पदांवरून a आणि d शोधणे')
      },
      {
        key: 'ap_find_sn',
        name: 'Sₙ = n/2 [2a + (n-1)d] सूत्र वापरून बेरीज',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `Sₙ = n/2 [2a + (n-1)d] सूत्र वापरून बेरीज वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Sₙ = n/2 [2a + (n-1)d] सूत्र वापरून बेरीज' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Sₙ = n/2 [2a + (n-1)d] सूत्र वापरून बेरीज')
      },
      {
        key: 'ap_find_sn_last',
        name: 'Sₙ = n/2 [a + l] सूत्र वापरून बेरीज',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `Sₙ = n/2 [a + l] सूत्र वापरून बेरीज वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Sₙ = n/2 [a + l] सूत्र वापरून बेरीज' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Sₙ = n/2 [a + l] सूत्र वापरून बेरीज')
      },
      {
        key: 'ap_am_insert',
        name: 'दोन संख्यांमध्ये n मध्य टाकणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `दोन संख्यांमध्ये n मध्य टाकणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दोन संख्यांमध्ये n मध्य टाकणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दोन संख्यांमध्ये n मध्य टाकणे')
      },
      {
        key: 'ap_word_daily',
        name: 'दैनंदिन जीवनातील उदाहरणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका रांगेत पहिल्या खुर्चीवर...' }],
        promptTemplate: (i) => `अंकगणित श्रेढीवर (AP) आधारित शाब्दिक प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'दैनंदिन जीवनातील उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('दैनंदिन जीवनातील उदाहरणे')
      },
      {
        key: 'gp_def',
        name: 'GP ची व्याख्या आणि उदाहरणे',
        icon: React.createElement(GPIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `गुणोत्तर श्रेढीची (GP) व्याख्या आणि उदाहरणे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'GP ची व्याख्या आणि उदाहरणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('GP ची व्याख्या आणि उदाहरणे')
      },
      {
        key: 'gp_terms',
        name: 'पहिले पद (a) आणि सामान्य गुणोत्तर (r)',
        icon: React.createElement(GPIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `पहिले पद (a) आणि सामान्य गुणोत्तर (r) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिले पद (a) आणि सामान्य गुणोत्तर (r)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिले पद (a) आणि सामान्य गुणोत्तर (r)')
      },
      {
        key: 'gp_nth_term',
        name: '२) n वे पद (tₙ) शोधणे',
        icon: React.createElement(GPIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `२) n वे पद (tₙ) शोधणे वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '२) n वे पद (tₙ) शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('२) n वे पद (tₙ) शोधणे')
      },
      {
        key: 'gp_sum',
        name: '३) n पदांची बेरीज (Sₙ)',
        icon: React.createElement(GPIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `३) n पदांची बेरीज (Sₙ) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '३) n पदांची बेरीज (Sₙ)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('३) n पदांची बेरीज (Sₙ)')
      },
      {
        key: 'gp_infinite',
        name: '४) अनंत गुणोत्तर श्रेढी (Infinite GP)',
        icon: React.createElement(GPIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `४) अनंत गुणोत्तर श्रेढी (Infinite GP) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '४) अनंत गुणोत्तर श्रेढी (Infinite GP)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('४) अनंत गुणोत्तर श्रेढी (Infinite GP)')
      },
      {
        key: 'hp_nth_term',
        name: 'n वे पद (tₙ) शोधणे',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `हरात्मक श्रेढीचे n वे पद काढण्यावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'n वे पद (tₙ) शोधणे' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('n वे पद (tₙ) शोधणे')
      },
      {
        key: 'hp_hm',
        name: 'हरात्मक मध्य (Harmonic Mean - HM)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'तुमचा प्रश्न इथे लिहा...' }],
        promptTemplate: (i) => `हरात्मक मध्य (Harmonic Mean - HM) वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'हरात्मक मध्य (Harmonic Mean - HM)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('हरात्मक मध्य (Harmonic Mean - HM)')
      },
      {
        key: 'ss_sum_n',
        name: 'पहिल्या n नैसर्गिक संख्यांची बेरीज (Σn)',
        icon: React.createElement(APIcon),
        inputs: [{ key: 'number_val', label: 'n ची किंमत', type: 'number' }],
        promptTemplate: (i) => `पहिल्या ${i.number_val} नैसर्गिक संख्यांची बेरीज (Σn) काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पहिल्या n नैसर्गिक संख्यांची बेरीज (Σn)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पहिल्या n नैसर्गिक संख्यांची बेरीज (Σn)')
      },
      {
        key: 'bayes_app',
        name: 'Application Based Problems',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Bayes Theorem चे उपयोजन...' }],
        promptTemplate: (i) => `Bayes Theorem च्या उपयोजनावर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Application Based Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Application Based Problems')
      }
    ]
  },
  {
    key: 'probability',
    name: 'संभाव्यता',
    englishName: 'Probability',
    icon: React.createElement(ProbabilityIcon),
    subTopics: [
      {
        key: 'ex_div_rules_prob',
        name: 'विभाज्यता नियमावर आधारित प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर 45X ला 9 ने भाग जात असेल तर X = ?' }],
        promptTemplate: (i) => `विभाज्यता नियमावर आधारित स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'विभाज्यता नियमावर आधारित प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('विभाज्यता नियमावर आधारित प्रश्न')
      },
      {
        key: 'ex_even_odd_prob',
        name: 'सम-विषम संख्यांवरील प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन सलग विषम संख्यांची बेरीज ४० आहे, तर त्या संख्या कोणत्या?' }],
        promptTemplate: (i) => `सम-विषम संख्यांवरील स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'सम-विषम संख्यांवरील प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('सम-विषम संख्यांवरील प्रश्न')
      },
      {
        key: 'ex_hcf_lcm_prob',
        name: 'HCF व LCM प्रश्न',
        icon: React.createElement(ExamIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचा लसावि ६० आणि मसावि ५ आहे, जर एक संख्या १५ असेल तर दुसरी कोणती?' }],
        promptTemplate: (i) => `मसावि (HCF) आणि लसावि (LCM) वरील स्पर्धा परीक्षेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'HCF व LCM प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('HCF व LCM प्रश्न')
      },
      {
        key: 'loss_prob',
        name: 'तोटा झालेला प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची खरेदी किंमत ८०० रुपये आणि विक्री किंमत ७०० रुपये असल्यास तोटा किती?' }],
        promptTemplate: (i) => `तोटा (Loss) काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तोटा झालेला प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तोटा झालेला प्रश्न')
      },
      {
        key: 'ci_word_problems',
        name: '10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या दरवर्षी ५% ने वाढते. आजची लोकसंख्या ८०००० असल्यास २ वर्षांनंतर किती होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न')
      },
      {
        key: 'profit_prob',
        name: 'नफा झालेला प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची खरेदी किंमत ५०० रुपये आणि विक्री किंमत ६०० रुपये असल्यास नफा किती?' }],
        promptTemplate: (i) => `नफा (Profit) काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नफा झालेला प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नफा झालेला प्रश्न')
      },
      {
        key: 'loss_prob_1',
        name: 'तोटा झालेला प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूची खरेदी किंमत ८०० रुपये आणि विक्री किंमत ७०० रुपये असल्यास तोटा किती?' }],
        promptTemplate: (i) => `तोटा (Loss) काढण्याचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'तोटा झालेला प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('तोटा झालेला प्रश्न')
      },
      {
        key: 'si_word_problems',
        name: '8. साध्या व्याजावर आधारित शब्दमंजुषा प्रश्न',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका माणसाने दोन वेगवेगळ्या बँकांकडून प्रत्येकी ५००० रुपये २ वर्षांसाठी घेतले. त्यांच्या व्याजातील फरक ५० रुपये असल्यास दरातील फरक किती?' }],
        promptTemplate: (i) => `साध्या व्याजावर आधारित शब्दमंजुषा प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '8. साध्या व्याजावर आधारित शब्दमंजुषा प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('8. साध्या व्याजावर आधारित शब्दमंजुषा प्रश्न')
      },
      {
        key: 'ci_word_problems_1',
        name: '10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न',
        icon: React.createElement(QuestionIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या दरवर्षी ५% ने वाढते, तर २ वर्षांनंतर लोकसंख्या किती होईल?' }],
        promptTemplate: (i) => `चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न सोडवा आणि चरण-दर-चरण स्पष्टीकरण द्या: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about '10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('10. चक्रवाढ व्याजावर आधारित शब्दमंजुषा प्रश्न')
      },
      {
        key: 'coin_probs',
        name: 'नाणी फेकणे (Coin Toss)',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'number_val', label: 'नाण्यांची संख्या', type: 'number' }],
        promptTemplate: (i) => `${i.number_val} नाणी फेकली असता मिळणाऱ्या विविध संभाव्यता काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'नाणी फेकणे (Coin Toss)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('नाणी फेकणे (Coin Toss)')
      },
      {
        key: 'dice_probs',
        name: 'फासे फेकणे (Dice Roll)',
        icon: React.createElement(DiceIcon),
        inputs: [{ key: 'number_val', label: 'फाशांची संख्या', type: 'number' }],
        promptTemplate: (i) => `${i.number_val} फासे फेकले असता मिळणाऱ्या विविध संभाव्यता काढा.`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'फासे फेकणे (Dice Roll)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('फासे फेकणे (Dice Roll)')
      },
      {
        key: 'card_probs',
        name: 'पत्ते (Playing Cards)',
        icon: React.createElement(CardsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. ५२ पत्त्यांच्या कॅटमधून एक पत्ता काढला असता...' }],
        promptTemplate: (i) => `पत्त्यांच्या (Playing Cards) प्रयोगावर आधारित संभाव्यतेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'पत्ते (Playing Cards)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('पत्ते (Playing Cards)')
      },
      {
        key: 'ball_probs',
        name: 'चेंडू काढणे (Balls in a Bag)',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पिशवीत ५ लाल आणि ३ निळे चेंडू आहेत...' }],
        promptTemplate: (i) => `पिशवीतील चेंडू काढण्याच्या प्रयोगावर आधारित संभाव्यतेचे प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'चेंडू काढणे (Balls in a Bag)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('चेंडू काढणे (Balls in a Bag)')
      },
      {
        key: 'perm_arr',
        name: 'मांडणी (Arrangement)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मांडणी म्हणजे काय?' }],
        promptTemplate: (i) => `क्रमच (Permutation) मधील मांडणी (Arrangement) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'मांडणी (Arrangement)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('मांडणी (Arrangement)')
      },
      {
        key: 'perm_n_diff',
        name: 'n भिन्न वस्तूंची मांडणी',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `n भिन्न वस्तूंच्या मांडणीवर (Permutation of n different objects) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'n भिन्न वस्तूंची मांडणी' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('n भिन्न वस्तूंची मांडणी')
      },
      {
        key: 'team_sel',
        name: 'संघ निवड (Team Selection)',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea' }],
        promptTemplate: (i) => `संघ निवडीवर (Team Selection) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'संघ निवड (Team Selection)' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('संघ निवड (Team Selection)')
      },
      {
        key: 'classical_prob',
        name: 'Classical Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Classical Probability...' }],
        promptTemplate: (i) => `Classical Probability ची व्याख्या आणि उदाहरणे स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Classical Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Classical Probability')
      },
      {
        key: 'empirical_prob',
        name: 'Empirical / Experimental Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Experimental Probability...' }],
        promptTemplate: (i) => `Empirical / Experimental Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Empirical / Experimental Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Empirical / Experimental Probability')
      },
      {
        key: 'theoretical_prob',
        name: 'Theoretical Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Theoretical Probability...' }],
        promptTemplate: (i) => `Theoretical Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Theoretical Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Theoretical Probability')
      },
      {
        key: 'simple_prob',
        name: 'Simple Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. साधी संभाव्यता...' }],
        promptTemplate: (i) => `Simple Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Simple Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Simple Probability')
      },
      {
        key: 'compound_prob',
        name: 'Compound Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संयुक्त संभाव्यता...' }],
        promptTemplate: (i) => `Compound Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Compound Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Compound Probability')
      },
      {
        key: 'cond_prob_type',
        name: 'Conditional Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अट असलेली संभाव्यता...' }],
        promptTemplate: (i) => `Conditional Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Conditional Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Conditional Probability')
      },
      {
        key: 'mutually_excl',
        name: 'Mutually Exclusive Events',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परस्पर अनन्य घटना...' }],
        promptTemplate: (i) => `Mutually Exclusive Events स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Mutually Exclusive Events' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Mutually Exclusive Events')
      },
      {
        key: 'comp_prob',
        name: 'Complementary Probability',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पूरक संभाव्यता...' }],
        promptTemplate: (i) => `Complementary Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Complementary Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Complementary Probability')
      },
      {
        key: 'cond_prob_formula',
        name: 'Conditional Probability Formula',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. P(A|B) काढा...' }],
        promptTemplate: (i) => `Conditional Probability Formula वापरून प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Conditional Probability Formula' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Conditional Probability Formula')
      },
      {
        key: 'dep_events_prob',
        name: 'Dependent Events Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परावलंबी घटनांची संभाव्यता...' }],
        promptTemplate: (i) => `Dependent Events Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Dependent Events Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Dependent Events Probability')
      },
      {
        key: 'post_prob',
        name: 'Posterior Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Posterior Probability...' }],
        promptTemplate: (i) => `Bayes Theorem मधील Posterior Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Posterior Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Posterior Probability')
      },
      {
        key: 'prior_prob',
        name: 'Prior Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. Prior Probability...' }],
        promptTemplate: (i) => `Bayes Theorem मधील Prior Probability स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Prior Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Prior Probability')
      },
      {
        key: 'coin_toss',
        name: 'Coin Toss Probability',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. तीन नाणी फेकली असता...' }],
        promptTemplate: (i) => `नाणी फेकण्याच्या (Coin Toss) प्रयोगावर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Coin Toss Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Coin Toss Probability')
      },
      {
        key: 'dice_prob',
        name: 'Dice Probability',
        icon: React.createElement(DiceIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन फासे टाकले असता...' }],
        promptTemplate: (i) => `फासे टाकण्याच्या (Dice) प्रयोगावर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Dice Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Dice Probability')
      },
      {
        key: 'card_prob',
        name: 'Card Probability',
        icon: React.createElement(CardsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पत्त्यांच्या कॅटमधून...' }],
        promptTemplate: (i) => `पत्त्यांच्या (Cards) खेळावर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Card Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Card Probability')
      },
      {
        key: 'ball_selection',
        name: 'Ball Selection Problems',
        icon: React.createElement(BallsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पिशवीत 5 लाल आणि 3 निळे चेंडू आहेत...' }],
        promptTemplate: (i) => `चेंडू निवडण्याच्या (Ball Selection) प्रयोगावर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Ball Selection Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Ball Selection Problems')
      },
      {
        key: 'sel_without_rep',
        name: 'Selection without Replacement',
        icon: React.createElement(BallsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परत न ठेवता निवडणे...' }],
        promptTemplate: (i) => `Selection without Replacement वर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection without Replacement' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection without Replacement')
      },
      {
        key: 'sel_with_rep',
        name: 'Selection with Replacement',
        icon: React.createElement(BallsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. परत ठेवून निवडणे...' }],
        promptTemplate: (i) => `Selection with Replacement वर आधारित संभाव्यतेचा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection with Replacement' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection with Replacement')
      },
      {
        key: 'perm_arr_1',
        name: 'Arrangement',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मांडणी म्हणजे काय?' }],
        promptTemplate: (i) => `क्रमच (Permutation) मधील मांडणी (Arrangement) संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Arrangement' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Arrangement')
      },
      {
        key: 'perm_ord_sel',
        name: 'Ordered Selection',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्रमाने निवड...' }],
        promptTemplate: (i) => `Ordered Selection संकल्पना स्पष्ट करा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Ordered Selection' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Ordered Selection')
      },
      {
        key: 'perm_n_diff_1',
        name: 'Permutation of n different objects',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. n भिन्न वस्तूंची मांडणी...' }],
        promptTemplate: (i) => `Permutation of n different objects वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Permutation of n different objects' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Permutation of n different objects')
      },
      {
        key: 'perm_with_rep',
        name: 'Permutation with repetition',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पुनरावृत्तीसह मांडणी...' }],
        promptTemplate: (i) => `Permutation with repetition वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Permutation with repetition' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Permutation with repetition')
      },
      {
        key: 'perm_without_rep',
        name: 'Permutation without repetition',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पुनरावृत्तीशिवाय मांडणी...' }],
        promptTemplate: (i) => `Permutation without repetition वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Permutation without repetition' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Permutation without repetition')
      },
      {
        key: 'restr_perm',
        name: 'Restricted Permutation',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. अटींसह मांडणी...' }],
        promptTemplate: (i) => `Restricted Permutation वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Restricted Permutation' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Restricted Permutation')
      },
      {
        key: 'word_arr',
        name: 'Word Arrangement Problems',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शब्दांची मांडणी...' }],
        promptTemplate: (i) => `शब्दांच्या मांडणीवर (Word Arrangement) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Word Arrangement Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Word Arrangement Problems')
      },
      {
        key: 'seating_arr',
        name: 'Seating Arrangement Problems',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. बसण्याची व्यवस्था...' }],
        promptTemplate: (i) => `बसण्याच्या व्यवस्थेवर (Seating Arrangement) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Seating Arrangement Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Seating Arrangement Problems')
      },
      {
        key: 'comb_sel_prob',
        name: 'Selection problems',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. निवडीचे प्रश्न...' }],
        promptTemplate: (i) => `निवडीच्या (Selection) समस्यांवर आधारित Combination चा प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection problems')
      },
      {
        key: 'team_sel_1',
        name: 'Team Selection',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संघ निवड...' }],
        promptTemplate: (i) => `संघ निवडीवर (Team Selection) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Team Selection' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Team Selection')
      },
      {
        key: 'group_form',
        name: 'Group Formation Problems',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. गट तयार करणे...' }],
        promptTemplate: (i) => `गट तयार करण्यावर (Group Formation) आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Group Formation Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Group Formation Problems')
      },
      {
        key: 'stud_sel',
        name: 'Selection of Students',
        icon: React.createElement(AlgebraIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. विद्यार्थ्यांची निवड...' }],
        promptTemplate: (i) => `विद्यार्थ्यांच्या निवडीवर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection of Students' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection of Students')
      },
      {
        key: 'prob_with_perm',
        name: 'Probability with Permutation',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. क्रमच वापरून संभाव्यता...' }],
        promptTemplate: (i) => `Probability with Permutation वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Probability with Permutation' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Probability with Permutation')
      },
      {
        key: 'prob_with_comb',
        name: 'Probability with Combination',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. संयोग वापरून संभाव्यता...' }],
        promptTemplate: (i) => `Probability with Combination वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Probability with Combination' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Probability with Combination')
      },
      {
        key: 'arr_with_prob',
        name: 'Arrangement with Probability',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. मांडणी आणि संभाव्यता...' }],
        promptTemplate: (i) => `Arrangement with Probability वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Arrangement with Probability' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Arrangement with Probability')
      },
      {
        key: 'sel_prob_mixed',
        name: 'Selection Probability Problems',
        icon: React.createElement(ProbabilityIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. निवडीची संभाव्यता...' }],
        promptTemplate: (i) => `Selection Probability Problems वर आधारित प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Selection Probability Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Selection Probability Problems')
      },
      {
        key: 'spec_cards',
        name: 'Cards Probability Problems',
        icon: React.createElement(CardsIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पत्त्यांचे विशेष प्रश्न...' }],
        promptTemplate: (i) => `पत्त्यांच्या खेळावर आधारित स्पर्धा परीक्षेचे विशेष प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Cards Probability Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Cards Probability Problems')
      },
      {
        key: 'spec_dice',
        name: 'Dice Problems',
        icon: React.createElement(DiceIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. फाशांचे विशेष प्रश्न...' }],
        promptTemplate: (i) => `फाशांच्या प्रयोगावर आधारित स्पर्धा परीक्षेचे विशेष प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Dice Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Dice Problems')
      },
      {
        key: 'spec_coin',
        name: 'Coin Toss Problems',
        icon: React.createElement(CoinIcon),
        inputs: [{ key: 'problem_text', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. नाण्यांचे विशेष प्रश्न...' }],
        promptTemplate: (i) => `नाणी फेकण्याच्या प्रयोगावर आधारित स्पर्धा परीक्षेचे विशेष प्रश्न सोडवा: ${i.problem_text}`,
        mcqPromptTemplate: (diff) => `Generate a challenging multiple choice question about 'Coin Toss Problems' in Marathi for MPSC exam at ${diff} difficulty level. Provide 4 options A, B, C, D and indicate the correct answer.`,
        expertPromptTemplate: expertPromptGenerator('Coin Toss Problems')
      }
    ]
  }
];


import React from 'react';
import type { Topic, Difficulty } from './types';
import {
  PercentageIcon, RatioIcon, InterestIcon, ProfitLossIcon, TimeWorkIcon, SpeedIcon,
  AverageIcon, AreaVolumeIcon, PerimeterIcon, AlgebraIcon, APIcon, ExponentIcon,
  GPIcon, NumberSystemIcon, LcmHcfIcon, ProbabilityIcon, IncreaseDecreaseIcon, DiscountIcon, ExamIcon, MixtureIcon, ComparisonIcon, WagesIcon, PipeIcon, TrainIcon, BoatIcon, ConversionIcon, TriangleIcon, SphereIcon, CylinderConeIcon, SetTheoryIcon, CoinIcon, DiceIcon, CardsIcon, BallsIcon, LightbulbIcon, SearchIcon
} from './components/Icons';

const expertPromptGenerator = (topicName: string) => {
    return () => `Generate a single, challenging, multi-step math problem based on the topic of '${topicName}', suitable for a competitive exam like UPSC or MPSC in India. The problem must be in Marathi. Then provide the final answer and a detailed explanation. The explanation must be in Marathi and formatted with markdown. It must include the following sections in order: the problem statement under the heading '**प्रश्न:**', a detailed step-by-step solution under '**सविस्तर स्पष्टीकरण:**' (this section MUST be a numbered list, e.g., 1. Step one... 2. Step two...), an explanation of any advanced concepts used under '**प्रगत संकल्पना:**', any relevant shortcuts under '**शॉर्टकट पद्धत:**', and finally, a section on common mistakes related to this type of problem under the heading '**टाळण्यायोग्य चुका:**'.`;
};


export const TOPICS: Topic[] = [
  {
    key: 'percentage',
    name: 'टक्केवारी',
    icon: React.createElement(PercentageIcon),
    subTopics: [
        // 1. टक्केवारीची मूलभूत संकल्पना
        {
            key: 'percentage_basics_new',
            name: 'टक्केवारीची मूलभूत संकल्पना',
            icon: React.createElement(NumberSystemIcon),
            subTopics: [
                {
                    key: 'what_is_percentage',
                    name: 'टक्केवारी म्हणजे काय?',
                    icon: React.createElement(LightbulbIcon),
                    inputs: [
                        { key: 'problem', label: 'संकल्पना प्रश्न', type: 'textarea', placeholder: 'उदा. टक्केवारी म्हणजे काय? ती /100 का असते?' },
                    ],
                    promptTemplate: (inputs) => `Explain the concept of percentage in simple Marathi. Use the user's specific question if provided: "${inputs.problem}". Focus on how percentages represent parts out of 100 and why they are useful in competitive exams for comparison.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a simple conceptual multiple-choice question (MCQ) in Marathi about the meaning of percentage. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                },
                {
                    key: 'fraction_to_percentage_new',
                    name: 'अपूर्णांक → टक्केवारी',
                    icon: React.createElement(ConversionIcon),
                    inputs: [
                        { key: 'fraction', label: 'अपूर्णांक (उदा. 3/4)', type: 'text', placeholder: 'उदा. 3/4 or 1/5' },
                    ],
                    promptTemplate: (inputs) => `Convert the fraction ${inputs.fraction} into a percentage. Explain the rule that to convert a fraction to a percentage, we multiply by 100. Show the step-by-step calculation in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi asking to convert a specific fraction (like 5/8 or 7/20) into a percentage. Provide four options, the correct answer, and a detailed explanation.`,
                },
                {
                    key: 'decimal_to_percentage_new',
                    name: 'दशांश संख्या → टक्केवारी',
                    icon: React.createElement(ConversionIcon),
                    inputs: [
                        { key: 'decimal', label: 'दशांश संख्या (उदा. 0.75)', type: 'text', placeholder: 'उदा. 0.75 or 0.125' },
                    ],
                    promptTemplate: (inputs) => `Convert the decimal number ${inputs.decimal} into a percentage. Explain the rule (multiply by 100 or shift the decimal point two places to the right). Provide the solution step-by-step in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi where the student must convert a decimal (like 0.45 or 0.06) into its percentage equivalent. Provide options, answer, and explanation.`,
                },
                {
                    key: 'percentage_to_fraction_decimal_new',
                    name: 'टक्केवारी → अपूर्णांक / दशांश',
                    icon: React.createElement(ConversionIcon),
                    inputs: [
                        { key: 'percent', label: 'टक्केवारी मूल्य', type: 'number', placeholder: 'उदा. 40', unit: '%' },
                    ],
                    promptTemplate: (inputs) => `Convert ${inputs.percent}% into its equivalent fraction (simplest form) and decimal form. Explain that we divide by 100 to remove the percentage sign. Show calculations in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi where the task is to convert a percentage (like 12.5% or 80%) into a fraction or decimal. Provide options, answer, and explanation.`,
                },
                {
                    key: 'special_benchmark_percents',
                    name: '1%, 10%, 25%, 50% शॉर्टकट्स',
                    icon: React.createElement(SpeedIcon),
                    inputs: [
                        { key: 'total', label: 'संख्या', type: 'number', placeholder: 'उदा. 1200' },
                    ],
                    promptTemplate: (inputs) => `For the number ${inputs.total}, calculate 1%, 10%, 25%, and 50% using mental math shortcuts. 
                    1. 10% = Divide by 10.
                    2. 1% = Divide by 100.
                    3. 50% = Half (Divide by 2).
                    4. 25% = Quarter (Divide by 4 or half of 50%).
                    Explain these rules clearly in Marathi to help students solve faster in competitive exams.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi that requires finding a benchmark percentage (like 10% or 25%) of a number to solve a larger problem quickly. Provide options and shortcut explanation.`,
                },
                {
                    key: 'find_percentage_simple_new',
                    name: 'साधी टक्केवारी काढणे',
                    icon: React.createElement(PercentageIcon),
                    inputs: [
                        { key: 'percent', label: 'किती टक्के?', type: 'number', placeholder: 'उदा. 20', unit: '%' },
                        { key: 'total', label: 'कोणत्या संख्येचे?', type: 'number', placeholder: 'उदा. 500' },
                    ],
                    promptTemplate: (inputs) => `Calculate ${inputs.percent}% of ${inputs.total}. Explain the standard formula (Value = (Percentage / 100) * Total) and show the step-by-step division and multiplication in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a standard MCQ in Marathi for calculating X% of Y. Example: '450 चे 15% किती?' Provide options, answer, and steps.`,
                },
            ]
        },
        // 2. टक्केवारीचे सूत्रे
        {
            key: 'percentage_formulas_new',
            name: 'टक्केवारीचे सूत्रे',
            icon: React.createElement(AlgebraIcon),
            subTopics: [
                {
                    key: 'percentage_main_formula',
                    name: 'मुख्य टक्केवारीचे सूत्र',
                    icon: React.createElement(NumberSystemIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वर्गात 60% मुले आहेत आणि मुलींची संख्या 20 आहे, तर वर्गात एकूण किती विद्यार्थी आहेत?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem using basic percentage formulas: "${inputs.problem}". Explain the formula used and provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam that requires understanding basic percentage formulas to solve a word problem. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                    expertPromptTemplate: expertPromptGenerator('टक्केवारीचे सूत्रे')
                },
            ]
        },
        // 3. तुलना आणि बदल
        {
            key: 'percentage_comparison_change_new',
            name: 'तुलना आणि बदल',
            icon: React.createElement(ComparisonIcon),
            subTopics: [
                {
                    key: 'more_less_comparison',
                    name: 'दोन संख्यांमधील टक्केवारी तुलना',
                    icon: React.createElement(ComparisonIcon),
                    inputs: [
                        { key: 'a', label: 'संख्या A', type: 'number', placeholder: 'उदा. 120' },
                        { key: 'b', label: 'संख्या B', type: 'number', placeholder: 'उदा. 100' },
                    ],
                    promptTemplate: (inputs) => `Calculate by what percentage value A (${inputs.a}) is more or less than value B (${inputs.b}). Explain the formula used in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on comparing two numbers by percentage (A is what % more/less than B). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                },
                {
                    key: 'find_original_from_change',
                    name: 'टक्केवारीतील फरक आणि मूळ मूल्य',
                    icon: React.createElement(IncreaseDecreaseIcon),
                    inputs: [
                      { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका संख्येमध्ये 20% वाढ केल्यास ती 240 होते, तर मूळ संख्या कोणती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem: "${inputs.problem}". It involves finding the original value after a percentage change. Explain the steps in Marathi.`,
                    mcqPromptTemplate: (difficulty) => `Generate an MCQ in Marathi where the original number needs to be found after a percentage increase or decrease is applied to it. Provide options, correct answer, and explanation.`
                }
            ]
        },
        // 4. वाढ/कपात (Updated with User Requested Types)
        {
            key: 'percentage_increase_decrease_new',
            name: 'वाढ-घट (Increase & Decrease)',
            icon: React.createElement(IncreaseDecreaseIcon),
            subTopics: [
                {
                    key: 'perc_increase_only',
                    name: 'एखाद्या संख्येत किती % वाढ झाली',
                    icon: React.createElement(IncreaseDecreaseIcon),
                    inputs: [
                        { key: 'old_val', label: 'मूळ संख्या', type: 'number', placeholder: 'उदा. 100' },
                        { key: 'new_val', label: 'नवीन संख्या (वाढलेली)', type: 'number', placeholder: 'उदा. 125' },
                    ],
                    promptTemplate: (inputs) => `Calculate the percentage increase from ${inputs.old_val} to ${inputs.new_val}. Explain the formula: ((New Value - Original Value) / Original Value) * 100. Show steps in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi where the student must calculate the percentage increase between two given values. Provide four options, the correct answer, and an explanation.`,
                },
                {
                    key: 'perc_decrease_only',
                    name: 'एखाद्या संख्येत किती % घट झाली',
                    icon: React.createElement(IncreaseDecreaseIcon),
                    inputs: [
                        { key: 'old_val', label: 'मूळ संख्या', type: 'number', placeholder: 'उदा. 200' },
                        { key: 'new_val', label: 'नवीन संख्या (कमी झालेली)', type: 'number', placeholder: 'उदा. 160' },
                    ],
                    promptTemplate: (inputs) => `Calculate the percentage decrease from ${inputs.old_val} to ${inputs.new_val}. Explain the formula: ((Original Value - New Value) / Original Value) * 100. Show steps in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi where the student must calculate the percentage decrease between two values. Provide options, correct answer, and steps.`,
                },
                {
                    key: 'find_original_from_final',
                    name: 'नवीन किंमत दिली असता मूळ किंमत शोधणे',
                    icon: React.createElement(NumberSystemIcon),
                    inputs: [
                        { key: 'final_val', label: 'नवीन किंमत', type: 'number', placeholder: 'उदा. 240' },
                        { key: 'change_perc', label: 'बदल टक्केवारी (वाढ असल्यास +, घट असल्यास -)', type: 'number', placeholder: 'उदा. 20', unit: '%' },
                    ],
                    promptTemplate: (inputs) => `Find the original price if the final price is ${inputs.final_val} after a ${inputs.change_perc}% change. Explain the logic: Original = Final / (1 + (Change/100)). Show step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi where the original price needs to be calculated given the final price and the percentage increase or decrease. Provide options and explanation.`,
                },
                {
                    key: 'successive_inc_dec_calc',
                    name: 'सलग वाढ–घट (Successive Change)',
                    icon: React.createElement(IncreaseDecreaseIcon),
                    inputs: [
                        { key: 'p1', label: 'पहिली वाढ/घट (%)', type: 'number', placeholder: 'उदा. 20' },
                        { key: 'p2', label: 'दुसरी वाढ/घट (%)', type: 'number', placeholder: 'उदा. -10' },
                    ],
                    promptTemplate: (inputs) => `Calculate the result of successive percentage changes of ${inputs.p1}% and ${inputs.p2}%. Explain the concept and use the formula: [a + b + (ab/100)]. Show steps in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate an MCQ in Marathi based on successive percentage changes (e.g., 10% increase followed by 10% decrease). Provide four options and a detailed explanation.`,
                },
                {
                    key: 'net_percentage_change_word',
                    name: 'एकूण बदल (Net Percentage Change)',
                    icon: React.createElement(ComparisonIcon),
                    inputs: [
                        { key: 'problem', label: 'शाब्दिक प्रश्न', type: 'textarea', placeholder: 'उदा. साखरेची किंमत 20% ने वाढली आणि खप 10% ने कमी झाला, तर एकूण खर्चात किती % बदल झाला?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following net percentage change word problem: "${inputs.problem}". Focus on explaining the overall effect using combined percentage formulas. Provide the solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a word-problem style MCQ in Marathi asking for the net percentage change in a real-world scenario (e.g., price vs consumption). Provide options and explanation.`,
                    expertPromptTemplate: expertPromptGenerator('एकूण टक्केवारी बदल (Net Change)')
                }
            ]
        },
        // 5. मूळ संख्या शोधणे
        {
            key: 'find_original_number_new',
            name: 'मूळ संख्या शोधणे',
            icon: React.createElement(NumberSystemIcon),
            subTopics: [
                {
                    key: 'find_original_from_percentage',
                    name: 'टक्केवारी दिली असता मूळ संख्या शोधा',
                    icon: React.createElement(PercentageIcon),
                    inputs: [
                        { key: 'value', label: 'टक्केवारीतील मूल्य', type: 'number', placeholder: 'उदा. 50' },
                        { key: 'percent', label: 'किती टक्के आहे?', type: 'number', placeholder: 'उदा. 25', unit: '%', validation: { min: 0, errorMessage: 'टक्केवारी ॠण असू शकत नाही.' } },
                    ],
                    promptTemplate: (inputs) => `If ${inputs.percent}% of a number is ${inputs.value}, find the original number. Explain the formula and steps in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the topic of finding the original number from a percentage value. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                },
                {
                    key: 'find_original_from_percent_diff',
                    name: 'टक्केवारी फरकावरून मूळ संख्या',
                    icon: React.createElement(NumberSystemIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका संख्येचा 40% आणि त्याच संख्येचा 25% यांमधील फरक 150 आहे, तर ती संख्या कोणती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem: "${inputs.problem}". The problem requires finding the original number based on the difference between two of its percentages. Explain the steps in Marathi.`,
                    mcqPromptTemplate: (difficulty) => `Generate an MCQ in Marathi where the original number must be found from the difference between two of its percentages. Provide options, correct answer, and explanation.`
                }
            ]
        },
        // 6. नफा-तोटा, छूट
        {
            key: 'profit_loss_discount_new',
            name: 'नफा-तोटा, छूट',
            icon: React.createElement(ProfitLossIcon),
            subTopics: [
                {
                    key: 'profit_loss_calc',
                    name: 'खरेदी-विक्री किंमत व टक्केवारी',
                    icon: React.createElement(ProfitLossIcon),
                    inputs: [
                        { key: 'costPrice', label: 'खरेदी किंमत', type: 'number', placeholder: 'उदा. 500', unit: 'रु', validation: { min: 0, errorMessage: 'किंमत ॠण असू शकत नाही.' } },
                        { key: 'sellingPrice', label: 'विक्री किंमत', type: 'number', placeholder: 'उदा. 600', unit: 'रु', validation: { min: 0, errorMessage: 'किंमत ॠण असू शकत नाही.' } },
                    ],
                    promptTemplate: (inputs) => `Calculate the profit or loss and the profit or loss percentage if the cost price is ${inputs.costPrice} and the selling price is ${inputs.sellingPrice}. Explain the formulas and steps in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on calculating profit/loss percentage given cost price and selling price. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                    expertPromptTemplate: expertPromptGenerator('नफा आणि तोटा')
                },
                {
                    key: 'discount_sp',
                    name: 'छूट व नफा-तोटा टक्केवारी',
                    icon: React.createElement(DiscountIcon),
                    inputs: [
                        { key: 'markedPrice', label: 'छापील किंमत', type: 'number', placeholder: 'उदा. 1000', unit: 'रु', validation: { min: 0, errorMessage: 'किंमत ॠण असू शकत नाही.' } },
                        { key: 'discountPercent', label: 'सवलत', type: 'number', placeholder: 'उदा. 15', unit: '%', validation: { min: 0, errorMessage: 'सवलत ॠण असू शकत नाही.' } },
                    ],
                    promptTemplate: (inputs) => `An item has a marked price of ${inputs.markedPrice}. If a discount of ${inputs.discountPercent}% is given, what is the selling price? Also explain how profit/loss is calculated on this. Explain the calculation in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on calculating the selling price after a discount on the marked price. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                },
            ]
        },
        // 7. साधे/चक्रवाढ व्याज
        {
            key: 'interest_with_percentage_new',
            name: 'साधे/चक्रवाढ व्याज',
            icon: React.createElement(InterestIcon),
            subTopics: [
                {
                    key: 'simple_interest_percentage',
                    name: 'साधे व्याजातील टक्केवारी वापर',
                    icon: React.createElement(InterestIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. काही रक्कम साध्या व्याजाने 5 वर्षांत दुप्पट होते, तर व्याजाचा दर किती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem related to simple interest using percentage concepts: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on simple interest where the rate of interest is a percentage. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                },
                {
                    key: 'compound_interest_percentage',
                    name: 'चक्रवाढ व्याजातील संकल्पना',
                    icon: React.createElement(InterestIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणती रक्कम 10% चक्रवाढ व्याज दराने 2 वर्षांत 12100 रुपये होईल?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem related to compound interest using percentage concepts: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on compound interest. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                }
            ]
        },
        // 8. मिश्रण व अलिगेशन
        {
            key: 'mixture_allegation_percentage_new',
            name: 'मिश्रण व अलिगेशन',
            icon: React.createElement(MixtureIcon),
            subTopics: [
                {
                    key: 'mixture_problem',
                    name: 'टक्केवारी मिश्रण प्रश्न',
                    icon: React.createElement(MixtureIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 20 लिटर दुधात 10% पाणी आहे. आणखी किती पाणी मिसळल्यास पाण्याचे प्रमाण 25% होईल?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following mixture percentage problem: ${inputs.problem}. Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on mixture problems involving percentages. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                },
                {
                    key: 'allegation_percentage',
                    name: 'पदार्थांच्या अनुपातात टक्केवारी',
                    icon: React.createElement(RatioIcon),
                    inputs: [
                      { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10% अल्कोहोल असलेल्या द्रावणात 40% अल्कोहोल असलेले द्रावण कोणत्या प्रमाणात मिसळावे म्हणजे 30% अल्कोहोल असलेले मिश्रण मिळेल?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following mixture problem using the rule of allegation: "${inputs.problem}". Explain the allegation rule and provide a step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty) => `Generate a multiple-choice question (MCQ) in Marathi based on the rule of allegation, involving percentages of ingredients in a mixture. Provide options, correct answer, and explanation.`
                }
            ]
        },
        // 9. डेटा विश्लेषण (DI)
        {
            key: 'data_interpretation_percentage_new',
            name: 'डेटा विश्लेषण (DI)',
            icon: React.createElement(ComparisonIcon),
            subTopics: [
                {
                    key: 'percentage_data_interpretation',
                    name: 'DI साठी टक्केवारीची गणना',
                    icon: React.createElement(ComparisonIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न (उदा. पाय चार्ट/टेबल डेटा)', type: 'textarea', placeholder: 'उदा. एका कंपनीच्या विविध खर्चांची टक्केवारी दिली आहे. जर शिक्षण खर्च 25% असेल आणि तो 5000 रुपये असेल, तर एकूण खर्च किती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following data interpretation problem involving percentages (e.g., from a pie chart, bar graph, or table): "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on data interpretation (pie chart, bar graph, or table) that requires percentage calculations. The question must be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                    expertPromptTemplate: expertPromptGenerator('टक्केवारीवर आधारित डेटा विश्लेषण')
                },
            ]
        },
        // 10. व्यावहारिक उदाहरणे
        {
            key: 'percentage_practical_examples',
            name: 'व्यावहारिक उदाहरणे',
            icon: React.createElement(ExamIcon),
            subTopics: [
                {
                    key: 'numbers_and_percentage_word_problem',
                    name: 'संख्या व टक्केवारी',
                    icon: React.createElement(NumberSystemIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका संख्येचा 35% जर 63 असेल, तर ती संख्या कोणती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following word problem related to numbers and percentages: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a word problem involving numbers and percentages. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                },
                {
                    key: 'discount_word_problem',
                    name: 'सवलत व टक्केवारी',
                    icon: React.createElement(DiscountIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वस्तूवर 20% सवलत दिल्यानंतर ती 480 रुपयांना विकली जाते, तर वस्तूची छापील किंमत किती?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following word problem related to discount and percentage: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a word problem involving discounts. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                },
                {
                    key: 'exam_marks_percentage',
                    name: 'परीक्षेतील गुण',
                    icon: React.createElement(ExamIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका परीक्षेत पास होण्यासाठी 35% गुण लागतात. एका विद्यार्थ्याला 150 गुण मिळाले आणि तो 25 गुणांनी नापास झाला. तर परीक्षेचे एकूण गुण किती होते?' },
                    ],
                    promptTemplate: (inputs) => `Solve the exam passing marks problem: ${inputs.problem}. Provide a detailed solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding passing marks, total marks or percentage of marks obtained in an exam. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                },
            ]
        },
        // 11. लोकसंख्या / पगार वाढ
        {
            key: 'population_salary_increase_problem',
            name: 'लोकसंख्या / पगार वाढ',
            icon: React.createElement(IncreaseDecreaseIcon),
            inputs: [
                { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या दरवर्षी 10% ने वाढते. जर सध्याची लोकसंख्या 1,00,000 असेल, तर 2 वर्षांनी किती होईल?' },
            ],
            promptTemplate: (inputs) => `Solve the following word problem related to population or salary increase/decrease using percentage: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a word problem involving population or salary changes. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        },
        // 12. इतर संबंधित विषय
        {
            key: 'percentage_other_topics',
            name: 'इतर संबंधित विषय',
            icon: React.createElement(RatioIcon),
            subTopics: [
                {
                    key: 'percentage_ratio_proportion',
                    name: 'अनुपात व टक्केवारी',
                    icon: React.createElement(RatioIcon),
                    inputs: [
                        { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांचे गुणोत्तर 3:5 आहे. पहिली संख्या दुसऱ्या संख्येच्या किती टक्के आहे?' },
                    ],
                    promptTemplate: (inputs) => `Solve the following problem that combines the concepts of ratio and percentage: "${inputs.problem}". Provide a detailed step-by-step solution in Marathi.`,
                    mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a problem that links ratios with percentages. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                    expertPromptTemplate: expertPromptGenerator('अनुपात आणि टक्केवारी')
                },
            ]
        }
    ],
  },
  {
    key: 'ratio_proportion',
    name: 'प्रमाण व समप्रमाण',
    icon: React.createElement(RatioIcon),
    subTopics: [
      {
        key: 'ratio_types',
        name: 'प्रमाण (Ratio) व प्रकार',
        icon: React.createElement(RatioIcon),
        subTopics: [
          {
            key: 'ratio_definition',
            name: 'मूलभूत व्याख्या',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'a', label: 'संख्या १', type: 'number', placeholder: 'उदा. 15' },
              { key: 'b', label: 'संख्या २', type: 'number', placeholder: 'उदा. 20' },
            ],
            promptTemplate: (inputs) => `Explain the basic definition of a ratio using the example of ${inputs.a} and ${inputs.b}. Simplify the ratio and provide the explanation step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on simplifying a given ratio. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'compound_ratio',
            name: 'साधे व मिश्र प्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 2:3, 4:5 आणि 6:7 यांचे मिश्र प्रमाण काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following simple or compound ratio problem: ${inputs.problem}. Explain the concept and calculation in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the compound ratio of given ratios. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'inverse_ratio',
            name: 'व्यस्त प्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'a', label: 'संख्या १', type: 'number', placeholder: 'उदा. 3' },
              { key: 'b', label: 'संख्या २', type: 'number', placeholder: 'उदा. 4' },
            ],
            promptTemplate: (inputs) => `Find the inverse ratio of ${inputs.a}:${inputs.b}. Explain what an inverse ratio is, with examples, in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the inverse ratio of a given ratio. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'ratio_simplification',
            name: 'प्रमाणातील साधीकरण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'a', label: 'संख्या १', type: 'number', placeholder: 'उदा. 75' },
              { key: 'b', label: 'संख्या २', type: 'number', placeholder: 'उदा. 100' },
            ],
            promptTemplate: (inputs) => `Simplify the ratio ${inputs.a}:${inputs.b} to its simplest form. Explain the steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on simplifying a ratio to its simplest form. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'proportion',
        name: 'समप्रमाण (Proportion)',
        icon: React.createElement(RatioIcon),
        subTopics: [
          {
            key: 'proportion_definition',
            name: 'समप्रमाणाची व्याख्या',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 2:4 :: 8:16 हे समप्रमाणात आहे का? तपासा.' },
            ],
            promptTemplate: (inputs) => `Solve: ${inputs.problem}. Explain the definition and rule of proportion with this example in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam that asks to check if four numbers are in proportion. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'simple_proportion',
            name: 'साधे समप्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. जर 5 पेनची किंमत 50 रुपये असेल, तर 8 पेनची किंमत किती?' },
            ],
            promptTemplate: (inputs) => `Solve the following simple proportion (direct variation) problem: ${inputs.problem}. Explain the steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on simple proportion (direct variation). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'continued_proportion',
            name: 'सतत समप्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 4, 8, x हे सतत समप्रमाणात आहेत, तर x काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following continued proportion problem: ${inputs.problem}. Explain the concept of mean proportional in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on continued proportion, asking to find the third proportional. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'inverse_proportion',
            name: 'प्रतिलोम समप्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 मजूर एक काम 6 दिवसांत करतात, तर 15 मजूर तेच काम किती दिवसांत करतील?' },
            ],
            promptTemplate: (inputs) => `Solve the following inverse proportion problem: ${inputs.problem}. Explain the concept and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on inverse proportion. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'compound_proportion',
            name: 'मिश्र अनुपात व समप्रमाण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5 मजूर रोज 8 तास काम करून एक काम 12 दिवसांत पूर्ण करतात, तर 6 मजूर रोज 10 तास काम करून तेच काम किती दिवसांत पूर्ण करतील?' },
            ],
            promptTemplate: (inputs) => `Solve the following compound proportion problem: ${inputs.problem}. Explain the chain rule and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on compound proportion (chain rule). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          }
        ]
      },
      {
        key: 'ratio_problems',
        name: 'अनुपात व आधारित प्रश्न',
        icon: React.createElement(RatioIcon),
        subTopics: [
           {
            key: 'combine_ratios',
            name: 'प्रमाणांचे एकत्रीकरण',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A:B = 2:3 आणि B:C = 4:5, तर A:B:C काढा.' },
            ],
            promptTemplate: (inputs) => `Solve: ${inputs.problem}. Explain the steps to find the combined ratio in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on combining ratios (e.g., given A:B and B:C, find A:B:C). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'ratio_word_problem',
            name: 'विविध शाब्दिक प्रश्न',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'येथे मिश्रणाचे, वयाचे, पगाराचे, भागीदारीचे, गती-वेळ-अंतराचे, किंवा नळ-टाकीचे प्रश्न लिहा...' },
            ],
            promptTemplate: (inputs) => `Solve the following word problem based on ratios: ${inputs.problem}. Identify the type of problem (e.g., Mixture, Age, Partnership, Speed-Time, etc.) and provide a detailed step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a word problem involving ratios (e.g., age problems, mixture problems, partnerships). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          }
        ]
      },
      {
        key: 'special_ratio_problems',
        name: 'विशेष प्रकारचे प्रश्न',
        icon: React.createElement(RatioIcon),
        subTopics: [
          {
            key: 'ratio_percentage',
            name: 'प्रमाण व टक्केवारी',
            icon: React.createElement(PercentageIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्या 2:3 प्रमाणात आहेत. लहान संख्या मोठ्या संख्येच्या किती टक्के आहे?' },
            ],
            promptTemplate: (inputs) => `Solve this problem related to ratio and percentage: ${inputs.problem}. Explain the relationship and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on problems that combine ratio and percentage concepts. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'ratio_fractions',
            name: 'प्रमाण व भिन्न',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1/2 : 1/3 : 1/4 या प्रमाणाला सोपे रूप द्या.' },
            ],
            promptTemplate: (inputs) => `Solve this problem related to ratio and fractions: ${inputs.problem}. Explain the steps to simplify ratios of fractions in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on simplifying ratios involving fractions. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'find_missing_term',
            name: 'हरवलेली संख्या शोधणे',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5 : 8 :: x : 24, तर x ची किंमत काढा.' },
            ],
            promptTemplate: (inputs) => `Find the missing term in the proportion: ${inputs.problem}. Explain the rule of product of extremes and product of means in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the missing term in a proportion. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
    ]
  },
  {
      key: 'interest',
      name: 'साधे व मिश्र व्याज',
      icon: React.createElement(InterestIcon),
      subTopics: [
          {
              key: 'simple_interest',
              name: 'साधे व्याज (Simple Interest)',
              icon: React.createElement(InterestIcon),
              subTopics: [
                  {
                      key: 'si_basic_calc',
                      name: 'साधे व्याज काढा',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'principal', label: 'मुद्दल', type: 'number', placeholder: 'उदा. 10000', unit: 'रु', validation: { min: 0, errorMessage: 'मुद्दल ॠण असू शकत नाही.' } },
                          { key: 'rate', label: 'व्याज दर', type: 'number', placeholder: 'उदा. 8', unit: '%', validation: { min: 0, errorMessage: 'व्याज दर ॠण असू शकत नाही.' } },
                          { key: 'time', label: 'कालावधी', type: 'number', placeholder: 'उदा. 5', unit: 'वर्षे', validation: { min: 0, errorMessage: 'कालावधी ॠण असू शकत नाही.' } },
                      ],
                      promptTemplate: (inputs) => `Calculate the simple interest and the total amount for a principal of ${inputs.principal}, at a rate of ${inputs.rate}% per year, for ${inputs.time} years. Explain the formula SI = (P * R * T) / 100 and the concept of Amount = Principal + SI, with steps in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on calculating simple interest for a given principal, rate, and time. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'si_find_principal',
                      name: 'मूलधन (Principal) शोधा',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'interest', label: 'मिळालेले व्याज', type: 'number', placeholder: 'उदा. 4000', unit: 'रु', validation: { min: 0, errorMessage: 'व्याज ॠण असू शकत नाही.' } },
                          { key: 'rate', label: 'व्याज दर', type: 'number', placeholder: 'उदा. 8', unit: '%', validation: { min: 0, errorMessage: 'व्याज दर ॠण असू शकत नाही.' } },
                          { key: 'time', label: 'कालावधी', type: 'number', placeholder: 'उदा. 5', unit: 'वर्षे', validation: { min: 0, errorMessage: 'कालावधी ॠण असू शकत नाही.' } },
                      ],
                      promptTemplate: (inputs) => `If the simple interest earned is ${inputs.interest} at a rate of ${inputs.rate}% per year for ${inputs.time} years, find the principal amount. Explain the formula P = (SI * 100) / (R * T) with steps in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam where the principal needs to be calculated given the simple interest, rate, and time. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'si_find_rate',
                      name: 'व्याज दर (Rate) शोधा',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'principal', label: 'मुद्दल', type: 'number', placeholder: 'उदा. 10000', unit: 'रु', validation: { min: 0, errorMessage: 'मुद्दल ॠण असू शकत नाही.' } },
                          { key: 'interest', label: 'मिळालेले व्याज', type: 'number', placeholder: 'उदा. 4000', unit: 'रु', validation: { min: 0, errorMessage: 'व्याज दर ॠण असू शकत नाही.' } },
                          { key: 'time', label: 'कालावधी', type: 'number', placeholder: 'उदा. 5', unit: 'वर्षे', validation: { min: 0, errorMessage: 'कालावधी ॠण असू शकत नाही.' } },
                      ],
                      promptTemplate: (inputs) => `Find the rate of interest if the simple interest on a principal of ${inputs.principal} for ${inputs.time} years is ${inputs.interest}. Explain the formula R = (SI * 100) / (P * T) with steps in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam where the rate of interest needs to be calculated given the principal, simple interest, and time. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'si_find_time',
                      name: 'कालावधी (Time) शोधा',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                           { key: 'principal', label: 'मुद्दल', type: 'number', placeholder: 'उदा. 10000', unit: 'रु', validation: { min: 0, errorMessage: 'मुद्दल ॠण असू शकत नाही.' } },
                           { key: 'interest', label: 'मिळालेले व्याज', type: 'number', placeholder: 'उदा. 4000', unit: 'रु', validation: { min: 0, errorMessage: 'व्याज ॠण असू शकत नाही.' } },
                           { key: 'rate', label: 'व्याज दर', type: 'number', placeholder: 'उदा. 8', unit: '%', validation: { min: 0, errorMessage: 'व्याज दर ॠण असू शकत नाही.' } },
                      ],
                      promptTemplate: (inputs) => `Find the time period if the simple interest on a principal of ${inputs.principal} at a rate of ${inputs.rate}% per year is ${inputs.interest}. Explain the formula T = (SI * 100) / (P * R) with steps in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam where the time period needs to be calculated given the principal, simple interest, and rate. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                   {
                      key: 'si_word_problems',
                      name: 'शाब्दिक उदाहरणे',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. काही रक्कम साध्या व्याजाने 5 वर्षांत दुप्पट होते, तर व्याजाचा दर किती? किंवा दोन वेगवेगळ्या योजनांच्या व्याजातील फरक काढा.' },
                      ],
                      promptTemplate: (inputs) => `Solve the following word problem based on Simple Interest: ${inputs.problem}. Provide a detailed step-by-step solution in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a word problem for simple interest, like finding the rate when a sum doubles in a certain time. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  }
              ]
          },
          {
              key: 'compound_interest',
              name: 'मिश्र व्याज (Compound Interest)',
              icon: React.createElement(InterestIcon),
              subTopics: [
                  {
                      key: 'ci_basic_calc',
                      name: 'मिश्र व्याज काढा (वार्षिक)',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'principal', label: 'मुद्दल', type: 'number', placeholder: 'उदा. 10000', unit: 'रु', validation: { min: 0, errorMessage: 'मुद्दल ॠण असू शकत नाही.' } },
                          { key: 'rate', label: 'व्याज दर', type: 'number', placeholder: 'उदा. 10', unit: '%', validation: { min: 0, errorMessage: 'व्याज दर ॠण असू शकत नाही.' } },
                          { key: 'time', label: 'कालावधी', type: 'number', placeholder: 'उदा. 2', unit: 'वर्षे', validation: { min: 0, errorMessage: 'कालावधी ॠण असू शकत नाही.' } },
                      ],
                      promptTemplate: (inputs) => `Calculate the compound interest and the total amount for a principal of ${inputs.principal}, at an annual rate of ${inputs.rate}%, compounded annually, for ${inputs.time} years. Explain the formula A = P(1 + R/100)^T and CI = A - P with steps in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on calculating compound interest for a given principal, rate, and time (compounded annually). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'ci_compounding_periods',
                      name: 'सहामाही / तिमाही व्याज',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 8000 रुपयांवर 10% दराने 1 वर्षाचे सहामाही चक्रवाढ व्याज किती होईल?' },
                      ],
                      promptTemplate: (inputs) => `Solve the following compound interest problem: ${inputs.problem}. Explain how to adjust the rate and time for half-yearly (सहामाही) or quarterly (तिमाही) compounding. Provide a detailed solution in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on compound interest calculated half-yearly or quarterly. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'ci_find_prt',
                      name: 'मूलधन/दर/वेळ शोधा',
                      icon: React.createElement(InterestIcon),
                      inputs: [
                          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. कोणती रक्कम 10% चक्रवाढ व्याज दराने 2 वर्षांत 12100 रुपये होईल?' },
                      ],
                      promptTemplate: (inputs) => `Solve the following inverse problem for compound interest: ${inputs.problem}. Explain how to rearrange the formula to find the missing Principal, Rate, or Time. Provide a step-by-step solution in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the principal, rate, or time in a compound interest problem. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  },
                  {
                      key: 'ci_si_difference',
                      name: 'CI व SI मधील फरक',
                      icon: React.createElement(ComparisonIcon),
                      inputs: [
                          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5000 रुपयांवर 10% दराने 2 वर्षांसाठी चक्रवाढ व्याज आणि सरळव्याज यांतील फरक किती?' },
                      ],
                      promptTemplate: (inputs) => `Solve the problem to find the difference between Compound Interest and Simple Interest: ${inputs.problem}. Explain the shortcut formulas for 2 years [Diff = P(R/100)^2] and 3 years [Diff = P(R/100)^2 * (300+R)/100] and also solve using the basic method. Provide a detailed explanation in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the difference between compound and simple interest for 2 or 3 years. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
                      expertPromptTemplate: expertPromptGenerator('चक्रवाढ व्याज आणि सरळव्याज यांतील फरक')
                  },
                  {
                      key: 'ci_applications',
                      name: 'वाढ / घट (Growth/Depreciation)',
                      icon: React.createElement(IncreaseDecreaseIcon),
                      inputs: [
                          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शहराची लोकसंख्या 1,00,000 आहे आणि ती दरवर्षी 10% ने वाढते. 2 वर्षांनी लोकसंख्या किती होईल? OR एका मशीनची किंमत 20,000 आहे आणि दरवर्षी 10% ने कमी होते, 2 वर्षांनी तिची किंमत किती असेल?' },
                      ],
                      promptTemplate: (inputs) => `Solve the following application problem based on compound interest principles (like population growth or depreciation): ${inputs.problem}. Explain how the compound interest formula applies to these scenarios. Provide a detailed solution in Marathi.`,
                      mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on applications of compound interest like population growth or depreciation of value. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
                  }
              ]
          }
      ]
  },
  {
    key: 'time_work',
    name: 'वेळ व काम',
    icon: React.createElement(TimeWorkIcon),
    subTopics: [
      {
        key: 'time_work_basics',
        name: 'मूलभूत संकल्पना',
        icon: React.createElement(TimeWorkIcon),
        subTopics: [
          {
            key: 'one_person_work',
            name: 'एक व्यक्तीचे काम',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A एक काम 10 दिवसांत पूर्ण करतो, तर तो एका दिवसात किती काम करेल?' },
            ],
            promptTemplate: (inputs) => `Solve the following basic time and work problem: ${inputs.problem}. Explain the unit work concept in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the per-day work of a person. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ],
      },
      {
        key: 'time_work_multiple_people',
        name: 'एकापेक्षा जास्त व्यक्ती',
        icon: React.createElement(TimeWorkIcon),
        subTopics: [
          {
            key: 'two_people_together',
            name: 'दोन व्यक्ती एकत्र काम',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'a_days', label: 'A चे दिवस', type: 'number', placeholder: 'उदा. 10', unit: 'दिवस', validation: { min: 0, errorMessage: 'दिवस ॠण असू शकत नाहीत.' } },
              { key: 'b_days', label: 'B चे दिवस', type: 'number', placeholder: 'उदा. 15', unit: 'दिवस', validation: { min: 0, errorMessage: 'दिवस ॠण असू शकत नाहीत.' } },
            ],
            promptTemplate: (inputs) => `A can do a piece of work in ${inputs.a_days} days and B can do the same work in ${inputs.b_days} days. In how many days will they complete the work together? Solve using both LCM and per-day work methods and explain in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the total time taken for two people to complete a work together. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'three_people_together',
            name: 'तीन व्यक्ती एकत्र काम',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A, B आणि C एक काम अनुक्रमे 10, 12, आणि 15 दिवसांत करतात, तर तिघे मिळून ते काम किती दिवसांत पूर्ण करतील?' },
            ],
            promptTemplate: (inputs) => `Solve the following time and work problem with three people: ${inputs.problem}. Explain the steps clearly in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the total time taken for three people to complete a work together. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'alternate_work',
            name: 'आळीपाळीने काम',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A एक काम 10 दिवसांत व B तेच काम 15 दिवसांत करतो. जर त्यांनी आळीपाळीने काम केले आणि सुरुवात A ने केली, तर काम किती दिवसांत पूर्ण होईल?' },
            ],
            promptTemplate: (inputs) => `Solve the following alternate work problem: ${inputs.problem}. Explain the cycle method step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on two people working on alternate days. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('वेळ आणि काम - आळीपाळीने काम')
          },
        ]
      },
      {
          key: 'time_work_efficiency',
          name: 'कार्यक्षमता',
          icon: React.createElement(SpeedIcon),
          subTopics: [
              {
                  key: 'efficiency_ratio',
                  name: 'कार्यक्षमता गुणोत्तर',
                  icon: React.createElement(SpeedIcon),
                  inputs: [
                      { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A ची कार्यक्षमता B पेक्षा दुप्पट आहे. दोघे मिळून एक काम 15 दिवसांत पूर्ण करतात, तर A एकटा ते काम किती दिवसांत करेल?' },
                  ],
                  promptTemplate: (inputs) => `Solve the following problem based on work efficiency: ${inputs.problem}. Explain how to use efficiency ratios to solve time and work problems in Marathi.`,
                  mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on work efficiency ratios. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
              },
              {
                  key: 'wages_problem',
                  name: 'वेतन/मजुरी वाटप',
                  icon: React.createElement(WagesIcon),
                  inputs: [
                      { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A एक काम 10 दिवसांत आणि B 15 दिवसांत करतो. दोघांनी मिळून काम पूर्ण केल्यास 5000 रुपयांच्या मजुरीपैकी A चा वाटा किती असेल?' },
                  ],
                  promptTemplate: (inputs) => `Solve the wages distribution problem based on work done or efficiency: ${inputs.problem}. Explain the principle behind wage distribution in Marathi.`,
                  mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on distribution of wages according to work done. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
              }
          ]
      },
      {
        key: 'pipes_cisterns',
        name: 'पाईप व टाकी',
        icon: React.createElement(PipeIcon),
        subTopics: [
          {
            key: 'pipes_cisterns_generic',
            name: 'पाईप व टाकी प्रश्न',
            icon: React.createElement(PipeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक नळ टाकी 10 तासांत भरतो आणि दुसरा नळ 15 तासांत रिकामी करतो. दोन्ही नळ एकत्र सुरू केल्यास टाकी किती वेळात भरेल?' },
            ],
            promptTemplate: (inputs) => `Solve the following pipes and cisterns problem: ${inputs.problem}. Treat filling pipes as positive work and emptying pipes as negative work. Provide a detailed explanation in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on pipes and cisterns problems, such as finding the time to fill a tank with multiple inlet and outlet pipes working together. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          }
        ]
      },
      {
        key: 'time_work_advanced',
        name: 'विविध प्रकारचे प्रश्न',
        icon: React.createElement(TimeWorkIcon),
        subTopics: [
          {
            key: 'work_leaving',
            name: 'काम सोडून जाणे/येणे',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. A आणि B एक काम 20 दिवसांत करतात. त्यांनी 5 दिवस काम केल्यानंतर A सोडून गेला. उरलेले काम B ने 30 दिवसांत पूर्ण केले, तर B एकटा ते काम किती दिवसांत करेल?' },
            ],
            promptTemplate: (inputs) => `Solve the problem where workers leave or join in the middle of the work: ${inputs.problem}. Explain the concept of remaining work in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam for a time and work problem where a person leaves the work in between. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'group_work_m1d1h1',
            name: 'गट कार्य (M1D1H1)',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 माणसे रोज 6 तास काम करून एक काम 18 दिवसांत पूर्ण करतात, तर 15 माणसे रोज 9 तास काम करून तेच काम किती दिवसांत पूर्ण करतील?' },
            ],
            promptTemplate: (inputs) => `Solve the following group work problem using the M1D1H1/W1 = M2D2H2/W2 formula: ${inputs.problem}. Explain the formula and each component in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the group work formula (M1D1H1/W1 = M2D2H2/W2). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('गट कार्य (वेळ आणि काम)')
          }
        ]
      }
    ],
  },
  {
    key: 'speed_time_distance',
    name: 'वेग, वेळ व अंतर',
    icon: React.createElement(SpeedIcon),
    subTopics: [
      {
        key: 'speed_basic_formulas',
        name: 'मूलभूत सूत्रे',
        icon: React.createElement(SpeedIcon),
        inputs: [
          { key: 'distance', label: 'अंतर', type: 'number', placeholder: 'उदा. 120 (माहित नसल्यास 0 लिहा)', unit: 'किमी', validation: { min: 0, errorMessage: 'अंतर ॠण असू शकत नाही.' } },
          { key: 'speed', label: 'वेग', type: 'number', placeholder: 'उदा. 60 (माहित नसल्यास 0 लिहा)', unit: 'किमी/तास', validation: { min: 0, errorMessage: 'वेग ॠण असू शकत नाही.' } },
          { key: 'time', label: 'वेळ', type: 'number', placeholder: 'उदा. 2 (माहित नसल्यास 0 लिहा)', unit: 'तास', validation: { min: 0, errorMessage: 'वेळ ॠण असू शकत नाही.' } },
        ],
        promptTemplate: (inputs) => `Calculate the missing value (distance, speed, or time) given the following: Distance = ${inputs.distance || 'unknown'}, Speed = ${inputs.speed || 'unknown'}, Time = ${inputs.time || 'unknown'}. Explain the formula used (Distance = Speed × Time) and show the calculation step-by-step in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the basic formula of speed, distance, and time, where one value is missing. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'speed_relative_speed',
        name: 'एकाच/विरुद्ध दिशेने गती',
        icon: React.createElement(SpeedIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन गाड्या 60 किमी/तास आणि 40 किमी/तास वेगाने एकाच दिशेने जात आहेत, त्यांचा सापेक्ष वेग किती? किंवा विरुद्ध दिशेने येत असल्यास किती?' },
        ],
        promptTemplate: (inputs) => `Solve the following relative speed problem: ${inputs.problem}. Explain the concept for both same direction and opposite direction travel in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on relative speed (objects moving in the same or opposite directions). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'speed_average_speed',
        name: 'सरासरी वेग',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक व्यक्ती A पासून B पर्यंत 40 किमी/तास वेगाने जाते आणि 60 किमी/तास वेगाने परत येते, तर प्रवासाचा सरासरी वेग किती?' },
        ],
        promptTemplate: (inputs) => `Solve the following average speed problem: ${inputs.problem}. Explain the formula for average speed and provide a step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on calculating average speed, especially for a journey with two equal parts travelled at different speeds. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('सरासरी वेग')
      },
      {
        key: 'speed_train_problems',
        name: 'रेल्वेचे प्रश्न',
        icon: React.createElement(TrainIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 300 मीटर लांबीची ट्रेन 72 किमी/तास वेगाने एका खांबाला किती वेळात ओलांडेल? किंवा 200 मीटर लांबीच्या प्लॅटफॉर्मला किती वेळात ओलांडेल?' },
        ],
        promptTemplate: (inputs) => `Solve the following train problem: ${inputs.problem}. Explain the concepts of a train crossing a point object (pole) and a length object (platform or another train). Provide a detailed solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on train problems (e.g., crossing a pole, platform, or another train). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('रेल्वेचे प्रश्न (वेग, वेळ, अंतर)')
      },
      {
        key: 'speed_boats_streams',
        name: 'नौका आणि प्रवाह',
        icon: React.createElement(BoatIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका बोटीचा स्थिर पाण्यातील वेग 10 किमी/तास आहे आणि प्रवाहाचा वेग 2 किमी/तास आहे. तर प्रवाहाच्या दिशेने आणि प्रवाहाच्या विरुद्ध दिशेने बोटीचा वेग किती असेल?' },
        ],
        promptTemplate: (inputs) => `Solve the following boats and streams problem: ${inputs.problem}. Explain the concepts of downstream and upstream speed in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on boats and streams problems (downstream and upstream speed). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'speed_meeting_problems',
        name: 'भेटीचे/चालण्याचे प्रश्न',
        icon: React.createElement(SpeedIcon),
        inputs: [
            { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन शहरे A आणि B मधील अंतर 300 किमी आहे. एक ट्रेन A पासून सकाळी 8 वाजता 60 किमी/तास वेगाने B ककडे निघते आणि दुसरी B पासून सकाळी 9 वाजता 40 किमी/तास वेगाने A कडे निघते. त्या एकमेकांना किती वाजता भेटतील?' },
        ],
        promptTemplate: (inputs) => `Solve the following meeting point, chasing, or walking/running problem: ${inputs.problem}. Provide a detailed step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on problems of meeting points or chasing. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'speed_early_late',
        name: 'वेळेवर आधारित प्रश्न',
        icon: React.createElement(TimeWorkIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एक विद्यार्थी 4 किमी/तास वेगाने शाळेत गेल्यास 5 मिनिटे उशिरा पोहोचतो, पण 5 किमी/तास वेगाने गेल्यास 10 मिनिटे लवकर पोहोचतो. तर घरापासून शाळेचे अंतर किती?' },
        ],
        promptTemplate: (inputs) => `Solve the following problem about reaching early or late: ${inputs.problem}. Explain the formula and method used to find the distance in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on problems of reaching early or late. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'speed_conversions',
        name: 'गती रुपांतरे (km/hr ↔ m/s)',
        icon: React.createElement(ConversionIcon),
        inputs: [
          { key: 'value', label: 'मूल्य', type: 'number', placeholder: 'उदा. 72', validation: { min: 0, errorMessage: 'मूल्य ॠण असू शकत नाही.' } },
          { key: 'from_unit', label: 'मूळ एकक (फक्त km/hr किंवा m/s लिहा)', type: 'text', placeholder: 'उदा. km/hr' },
        ],
        promptTemplate: (inputs) => `Convert ${inputs.value} ${inputs.from_unit} to the other unit (m/s if input is km/hr, and km/hr if input is m/s). Explain the conversion factor (5/18 or 18/5) and show the calculation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on converting speed from km/hr to m/s or vice versa. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      }
    ]
  },
  {
    key: 'average',
    name: 'सरासरी',
    icon: React.createElement(AverageIcon),
    subTopics: [
      {
        key: 'average_basic',
        name: 'मूलभूत सूत्र',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'numbers', label: 'संख्या (कॉमाने वेगळे करा)', type: 'text', placeholder: 'उदा. 10, 20, 30, 40, 50' },
        ],
        promptTemplate: (inputs) => `Find the average of the following numbers: ${inputs.numbers}. Explain the basic formula (Average = Sum of observations / Number of observations) and show the calculation step-by-step in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the average of a set of numbers. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'average_add_remove',
        name: 'नवी संख्या जोडली/काढली',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5 संख्यांची सरासरी 20 आहे. त्यातून एक संख्या काढल्यास सरासरी 18 होते, तर काढलेली संख्या कोणती?' },
        ],
        promptTemplate: (inputs) => `Solve the following problem about adding or removing a number from a series and its effect on the average: ${inputs.problem}. Provide a detailed step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding a new average after adding/removing a number, or finding the number that was added/removed. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('सरासरी - संख्या काढणे/जोडणे')
      },
      {
        key: 'average_group',
        name: 'गटांची सरासरी (Weighted)',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका वर्गात 30 मुलांची सरासरी उंची 160 सेमी आहे आणि 20 मुलींची सरासरी उंची 150 सेमी आहे, तर संपूर्ण वर्गाची सरासरी उंची किती?' },
        ],
        promptTemplate: (inputs) => `Solve the following group average or weighted average problem: ${inputs.problem}. Explain the concept and formula for weighted average in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on weighted average or combined average of two or more groups. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'average_applications',
        name: 'धावसंख्या, गुण, वय, वेग',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका क्रिकेटपटूने 10 डावात सरासरी 50 धावा केल्या. 11 व्या डावात किती धावा केल्यास त्याची सरासरी 52 होईल?' },
        ],
        promptTemplate: (inputs) => `Solve the following application-based average problem (related to scores, marks, age, or speed): ${inputs.problem}. Provide a detailed step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on application of average, like cricket scores, age, or marks. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'average_change',
        name: 'सरासरीत बदल',
        icon: React.createElement(AverageIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 संख्यांची सरासरी 30 आहे. प्रत्येक संख्येत 5 मिळवल्यास नवीन सरासरी किती होईल?' },
        ],
        promptTemplate: (inputs) => `Solve the following problem about the change in average due to a uniform change in each observation: ${inputs.problem}. Explain the shortcut rule for this type of problem in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on how the average changes when each number in a set is increased, decreased, multiplied, or divided by a constant. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'average_shortcuts',
        name: 'शॉर्टकट पद्धती',
        icon: React.createElement(SpeedIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'येथे Allegation किंवा Difference पद्धतीवर आधारित प्रश्न लिहा...' },
        ],
        promptTemplate: (inputs) => `Solve the following average problem: ${inputs.problem}. Provide a detailed step-by-step solution. Also, if applicable, explain how shortcut methods like the Allegation method or the Difference method could be used to solve it faster. Explain the logic of the shortcut in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam that can be solved efficiently using shortcut methods for averages, like allegation or difference method. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
    ]
  },
  {
    key: 'area_volume',
    name: 'क्षेत्रफळ व घनफळ',
    icon: React.createElement(AreaVolumeIcon),
    subTopics: [
      {
        key: 'area',
        name: 'क्षेत्रफळ (Area)',
        icon: React.createElement(AreaVolumeIcon),
        subTopics: [
          {
            key: 'square_rectangle',
            name: 'चौरस व आयत',
            icon: React.createElement(PerimeterIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10 फूट लांब आणि 12 फूट रुंद खोलीसाठी किती चौरस फूट फ्लोअरिंग लागेल? OR 8 फूट उंच and 15 फूट लांब भिंतीला रंग देण्यासाठी क्षेत्रफळ काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to the area and perimeter of a square or rectangle: ${inputs.problem}. Provide formulas and a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the area or perimeter of a square or a rectangle. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('चौरस व आयत क्षेत्रफळ')
          },
          {
            key: 'triangle',
            name: 'त्रिकोण',
            icon: React.createElement(TriangleIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका त्रिकोणी बागेच्या बाजू 10, 12, आणि 15 मीटर आहेत, तर बागेचे क्षेत्रफळ किती? OR घराच्या त्रिकोणी छताचा पाया 20 फूट आणि उंची 8 फूट असल्यास क्षेत्रफळ काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to the area of a triangle (equilateral, isosceles, right-angled, or using Heron's formula): ${inputs.problem}. Explain the formula used and provide a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the area of a triangle (e.g., equilateral, using Heron's formula). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'circle',
            name: 'वर्तुळ',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 7 फूट त्रिज्येच्या वर्तुळाकार बागेचे क्षेत्रफळ किती? OR 14-इंच व्यासाच्या पिझ्झाचे क्षेत्रफळ किती आहे?' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to a circle (area, circumference, arc, sector, segment): ${inputs.problem}. Provide all relevant formulas and a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the area or circumference of a circle, or the area of a sector. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'quadrilateral',
            name: 'चतुर्भुज',
            icon: React.createElement(PerimeterIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका शेताच्या समांतर बाजू 100 मीटर व 120 मीटर आहेत आणि त्यांतील अंतर 60 मीटर आहे, तर शेताचे क्षेत्रफळ काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to the area of quadrilaterals (Parallelogram, Rhombus, Trapezium): ${inputs.problem}. State the formula and show the calculation in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the area of quadrilaterals like parallelograms, rhombuses, or trapeziums. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'combination_figures',
            name: 'मिश्रित आकृती',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका आयताकृती शेताला लागून एक अर्धवर्तुळाकार बाग आहे. त्यांचे एकूण क्षेत्रफळ काढा...' },
            ],
            promptTemplate: (inputs) => `Solve the following problem involving a combination of figures (e.g., rectangle + triangle, square + circle): ${inputs.problem}. Break down the problem into parts and provide a detailed solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the area of a composite 2D figure. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'shaded_area',
            name: 'छायांकित क्षेत्रफळ',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका चौरसात एक वर्तुळ काढले आहे जे त्याच्या बाजूंना स्पर्श करते. चौरस आणि वर्तुळ यांच्यातील छायांकित भागाचे क्षेत्रफळ काढा...' },
            ],
            promptTemplate: (inputs) => `Solve the following problem about the shaded area: ${inputs.problem}. Explain the strategy (e.g., Area of larger shape - Area of smaller shape) and provide a detailed solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the area of a shaded region. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'volume',
        name: 'घनफळ (Volume)',
        icon: React.createElement(AreaVolumeIcon),
        subTopics: [
          {
            key: 'cube_cuboid',
            name: 'घन व घनाभ',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5 मीटर लांब, 4 मीटर रुंद आणि 3 मीटर उंच पाण्याची टाकी किती लिटर पाणी साठवू शकते? (1 घनमीटर = 1000 लिटर)' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to a cube or cuboid (volume, total surface area, lateral surface area): ${inputs.problem}. Provide formulas and a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the volume or surface area of a cube or cuboid. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'sphere_hemisphere',
            name: 'गोळा व अर्धगोळा',
            icon: React.createElement(SphereIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 7 सेमी त्रिज्येच्या वाटीत किती पाणी मावेल? (अर्धगोलाचे घनफळ). OR 21 सेमी व्यासाच्या चेंडूचे घनफळ किती?' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to a sphere or hemisphere (volume, surface area): ${inputs.problem}. Provide formulas and a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the volume or surface area of a sphere or hemisphere. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'cone_cylinder',
            name: 'शंकू व सिलेंडर',
            icon: React.createElement(CylinderConeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 7 फूट त्रिज्या आणि 10 फूट उंची असलेल्या दंडगोलाकार (cylindrical) पाण्याच्या टाकीची क्षमता किती? OR 5 सेमी त्रिज्या आणि 12 सेमी उंची असलेल्या आईस्क्रीम कोनचे घनफळ किती?' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to a cone or cylinder (volume, curved surface area, total surface area, slant height): ${inputs.problem}. Provide all relevant formulas and a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the volume or surface area of a cone or cylinder. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
           {
            key: 'frustum',
            name: 'कापलेला शंकू (Frustum)',
            icon: React.createElement(CylinderConeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका बादलीच्या (frustum) वरच्या व खालच्या त्रिज्या अनुक्रमे 14 सेमी व 7 सेमी आहेत आणि उंची 10 सेमी आहे, तर तिचे घनफळ काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem related to a frustum of a cone: ${inputs.problem}. Provide the formula for the volume of a frustum and show the detailed calculation in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the volume of a frustum of a cone. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'combination_solids',
            name: '3D घन संयोजन',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका अर्धगोळ्यावर एक शंकू ठेवला आहे. दोन्हीची त्रिज्या 7 सेमी आहे आणि शंकूची उंची 24 सेमी आहे. तर तयार झालेल्या वस्तूचे एकूण पृष्ठफळ काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem involving a combination of 3D solids (e.g., cone + hemisphere, cylinder + cone): ${inputs.problem}. Break down the problem, calculate the properties for each part (volume, surface area), and then combine them to find the final answer. Provide a detailed solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the volume or surface area of a composite 3D solid (e.g., a cone mounted on a hemisphere). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('3D घन संयोजन')
          },
        ]
      },
      {
        key: 'area_volume_extra',
        name: 'अतिरिक्त टॉपिक',
        icon: React.createElement(AreaVolumeIcon),
        subTopics: [
          {
            key: 'dimension_change',
            name: 'परिमाण बदल',
            icon: React.createElement(IncreaseDecreaseIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका चौरसाची बाजू दुप्पट केल्यास त्याचे क्षेत्रफळ किती पटीने वाढेल? OR एका गोळ्याची त्रिज्या दुप्पट केल्यास त्याचे घनफळ किती पटीने वाढेल?' },
            ],
            promptTemplate: (inputs) => `Solve the following problem about the change in area or volume due to a change in dimensions: ${inputs.problem}. Explain the relationship between the change in side/radius and the change in area/volume in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam about the change in area or volume of a shape when its dimensions are changed (e.g., side is doubled). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'unit_conversion',
            name: 'युनिट रूपांतरण',
            icon: React.createElement(ConversionIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 5 m² चे cm² मध्ये रूपांतर करा. OR 1000 cm³ म्हणजे किती लिटर?' },
            ],
            promptTemplate: (inputs) => `Solve the following unit conversion problem for area or volume: ${inputs.problem}. Provide the conversion factor and show the calculation step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on unit conversion for area or volume (e.g., m² to cm², cm³ to litres). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'real_life_examples',
            name: 'प्रत्यक्ष उदाहरणे',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10x12 फूट खोलीच्या भिंतींना रंग देण्यासाठी किती चौरस फूट क्षेत्रफळ रंगवावे लागेल? (दरवाजे/खिडक्या वगळा). OR 5 मीटर लांब, 4 मीटर रुंद, 3 मीटर उंच टाकीत किती पाणी मावेल?' },
            ],
            promptTemplate: (inputs) => `Solve the following real-life problem related to area or volume (e.g., pipe, tank, bucket, field): ${inputs.problem}. Identify the shape, state the formula, and provide a practical solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a real-life application of area or volume, such as calculating the capacity of a tank or the area of a path around a field. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          }
        ]
      }
    ]
  },
  {
    key: 'perimeter',
    name: 'परिमिती',
    icon: React.createElement(PerimeterIcon),
    subTopics: [
        {
            key: 'perimeter_square',
            name: 'चौरसाची परिमिती',
            icon: React.createElement(PerimeterIcon),
            inputs: [
                { key: 'side', label: 'बाजू', type: 'number', placeholder: 'उदा. 20', unit: 'मीटर', validation: { min: 0, errorMessage: 'बाजू ॠण असू शकत नाही.' } },
            ],
            promptTemplate: (inputs) => `Calculate the perimeter of a square with side ${inputs.side} meters. For a practical example, how much wire would be needed to fence a square garden with a side of ${inputs.side} meters? Explain the formula (Perimeter = 4 * side) and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the perimeter of a square, possibly as a real-world problem like fencing a field. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
        },
        {
            key: 'perimeter_rectangle',
            name: 'आयताची परिमिती',
            icon: React.createElement(PerimeterIcon),
            inputs: [
                { key: 'length', label: 'लांबी', type: 'number', placeholder: 'उदा. 50', unit: 'फूट', validation: { min: 0, errorMessage: 'लांबी ॠण असू शकत नाही.' } },
                { key: 'width', label: 'रुंदी', type: 'number', placeholder: 'उदा. 30', unit: 'फूट', validation: { min: 0, errorMessage: 'रुंदी ॠण असू शकत नाही.' } },
            ],
            promptTemplate: (inputs) => `Calculate the perimeter of a rectangle with length ${inputs.length} ft and width ${inputs.width} ft. For example, how much fencing is needed for a rectangular field of these dimensions? Explain the formula (Perimeter = 2 * (length + width)) and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the perimeter of a rectangle, such as finding the cost of fencing. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
        },
        {
            key: 'perimeter_triangle',
            name: 'त्रिकोणाची परिमिती',
            icon: React.createElement(TriangleIcon),
            inputs: [
                { key: 'side1', label: 'बाजू १', type: 'number', placeholder: 'उदा. 30', unit: 'मीटर', validation: { min: 0, errorMessage: 'बाजू ॠण असू शकत नाही.' } },
                { key: 'side2', label: 'बाजू २', type: 'number', placeholder: 'उदा. 40', unit: 'मीटर', validation: { min: 0, errorMessage: 'बाजू ॠण असू शकत नाही.' } },
                { key: 'side3', label: 'बाजू ३', type: 'number', placeholder: 'उदा. 50', unit: 'मीटर', validation: { min: 0, errorMessage: 'बाजू ॠण असू शकत नाही.' } },
            ],
            promptTemplate: (inputs) => `Calculate the perimeter of a triangle with sides ${inputs.side1} m, ${inputs.side2} m, and ${inputs.side3} m. For example, what is the total length of the boundary of a triangular park with these side lengths? Explain the formula (Perimeter = side1 + side2 + side3) and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the perimeter of a triangle. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
        },
        {
            key: 'perimeter_circle',
            name: 'वर्तुळाचा परीघ',
            icon: React.createElement(RatioIcon),
            inputs: [
                { key: 'radius', label: 'त्रिज्या', type: 'number', placeholder: 'उदा. 14', unit: 'इंच', validation: { min: 0, errorMessage: 'त्रिज्या ॠण असू शकत नाही.' } },
            ],
            promptTemplate: (inputs) => `Calculate the circumference of a circle with a radius of ${inputs.radius} inches. For example, what is the circumference of a circular table with this radius? Explain the formula (Circumference = 2 * π * r) and steps in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the circumference of a circle. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
        },
        {
            key: 'perimeter_combined',
            name: 'मिश्रित आकृतींची परिमिती',
            icon: React.createElement(AreaVolumeIcon),
            inputs: [
                { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका आयताकृती मैदानावर एक अर्धवर्तुळ आहे. मैदानाची लांबी 20 मी आणि रुंदी 14 मी आहे. तर संपूर्ण आकृतीची परिमिती काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the following problem to find the perimeter of a combined shape: ${inputs.problem}. Explain which sides to include in the perimeter calculation and provide a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the perimeter of a composite 2D figure (e.g., a stadium shape - rectangle with two semicircles). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('मिश्रित आकृतींची परिमिती')
        },
    ]
  },
  {
    key: 'algebra',
    name: 'बीजगणित',
    icon: React.createElement(AlgebraIcon),
    subTopics: [
      {
        key: 'algebraic_expressions',
        name: 'बीजगणितीय अभिव्यक्ती',
        icon: React.createElement(AlgebraIcon),
        subTopics: [
          {
            key: 'algebra_basic_operations',
            name: 'मूलभूत क्रिया (बेरीज, वजाबाकी)',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (2x + 3y) + (5x - y) ची बेरीज करा.' },
            ],
            promptTemplate: (inputs) => `Solve the following algebraic operation: ${inputs.problem}. Explain the process of combining like terms step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on addition or subtraction of algebraic expressions. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'algebra_multiplication',
            name: 'गुणाकार',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (x + 5)(x - 3) चा गुणाकार करा.' },
            ],
            promptTemplate: (inputs) => `Solve the multiplication of algebraic expressions: ${inputs.problem}. Explain the FOIL method or distribution method in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the multiplication of algebraic expressions. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'algebra_division',
            name: 'भागाकार',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (x² + 5x + 6) / (x + 2) चा भागाकार करा.' },
            ],
            promptTemplate: (inputs) => `Solve the division of algebraic expressions: ${inputs.problem}. Explain the polynomial long division or factorization method in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the division of algebraic expressions. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          }
        ]
      },
      {
        key: 'algebraic_formulas',
        name: 'बीजगणितीय सूत्रे',
        icon: React.createElement(AlgebraIcon),
        subTopics: [
          {
            key: 'algebra_formula_application',
            name: 'सूत्रांचा वापर',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (a+b)² = a² + 2ab + b² या सूत्राचा वापर करून (102)² ची किंमत काढा. OR जर x + 1/x = 4, तर x² + 1/x² ची किंमत काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem using algebraic formulas like (a+b)², (a-b)², (a+b)(a-b), etc.: ${inputs.problem}. Mention the formula used and provide a step-by-step solution in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the application of standard algebraic formulas, such as finding the value of x² + 1/x² given x + 1/x. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'equations',
        name: 'समीकरणे',
        icon: React.createElement(AlgebraIcon),
        subTopics: [
          {
            key: 'linear_equation_one_variable',
            name: 'एका चलातील रेषीय समीकरणे',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'equation', label: 'समीकरण', type: 'text', placeholder: 'उदा. 2x + 5 = 15' },
            ],
            promptTemplate: (inputs) => `Solve the linear equation for the variable: ${inputs.equation}. Explain each step of isolating the variable in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on solving a linear equation in one variable. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'linear_equation_two_variables',
            name: 'दोन चलातील रेषीय समीकरणे',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. x + y = 10 आणि x - y = 2, तर x आणि y ची किंमत काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the system of linear equations in two variables: ${inputs.problem}. Explain the elimination or substitution method step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on solving a system of linear equations in two variables. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('दोन चलातील रेषीय समीकरणे')
          },
          {
            key: 'quadratic_equation',
            name: 'वर्गसमीकरणे',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'equation', label: 'समीकरण', type: 'text', placeholder: 'उदा. x² - 5x + 6 = 0' },
            ],
            promptTemplate: (inputs) => `Solve the quadratic equation ${inputs.equation} to find its roots. Explain the factorization method or the quadratic formula method in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on solving a quadratic equation. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'algebra_word_problems',
        name: 'शाब्दिक उदाहरणे',
        icon: React.createElement(AlgebraIcon),
        subTopics: [
          {
            key: 'age_problems',
            name: 'वयावर आधारित प्रश्न',
            icon: React.createElement(AlgebraIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वडिलांचे वय मुलाच्या वयाच्या तिप्पट आहे. 5 वर्षांनंतर, वडिलांचे वय मुलाच्या वयाच्या 2.5 पट होईल. तर त्यांची आजची वये किती?' },
            ],
            promptTemplate: (inputs) => `Solve the age-related word problem: ${inputs.problem}. Formulate the equations and solve them step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on age-related word problems using algebra. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'number_problems',
            name: 'संख्यांवर आधारित प्रश्न',
            icon: React.createElement(NumberSystemIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन संख्यांची बेरीज 50 आहे आणि फरक 10 आहे, तर त्या संख्या कोणत्या?' },
            ],
            promptTemplate: (inputs) => `Solve the number-related word problem: ${inputs.problem}. Formulate the equations and solve them step-by-step in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on number-related word problems using algebra. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
    ]
  },
  {
    key: 'series',
    name: 'मालिका व क्रम (Series)',
    icon: React.createElement(APIcon),
    subTopics: [
      {
        key: 'arithmetic_progression',
        name: 'अंकगणिती श्रेढी (AP)',
        icon: React.createElement(APIcon),
        subTopics: [
          {
            key: 'ap_find_nth_term',
            name: 'n-वे पद शोधा',
            icon: React.createElement(APIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 2, 5, 8, 11, ... या मालिकेचे 20 वे पद काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem to find the nth term of an Arithmetic Progression: ${inputs.problem}. Explain the formula a_n = a + (n-1)d in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the nth term of an Arithmetic Progression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'ap_find_sum',
            name: 'n पदांची बेरीज शोधा',
            icon: React.createElement(APIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 3, 7, 11, ... या मालिकेच्या पहिल्या 10 पदांची बेरीज काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem to find the sum of n terms of an Arithmetic Progression: ${inputs.problem}. Explain the formula S_n = n/2 * [2a + (n-1)d] or S_n = n/2 * (a + l) in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the sum of n terms of an Arithmetic Progression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'geometric_progression',
        name: 'भूमिती श्रेढी (GP)',
        icon: React.createElement(GPIcon),
        subTopics: [
          {
            key: 'gp_find_nth_term',
            name: 'n-वे पद शोधा',
            icon: React.createElement(GPIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 3, 6, 12, 24, ... या मालिकेचे 8 वे पद काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem to find the nth term of a Geometric Progression: ${inputs.problem}. Explain the formula a_n = ar^(n-1) in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the nth term of a Geometric Progression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'gp_find_sum',
            name: 'n पदांची बेरीज शोधा',
            icon: React.createElement(GPIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 2, 6, 18, ... या मालिकेच्या पहिल्या 5 पदांची बेरीज काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem to find the sum of n terms of a Geometric Progression: ${inputs.problem}. Explain the formula S_n = a(r^n - 1) / (r - 1) in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the sum of n terms of a Geometric Progression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
        ]
      },
      {
        key: 'special_series',
        name: 'विशेष मालिका',
        icon: React.createElement(NumberSystemIcon),
        subTopics: [
          {
            key: 'sum_natural_numbers',
            name: 'नैसर्गिक संख्यांची बेरीज',
            icon: React.createElement(NumberSystemIcon),
            inputs: [
              { key: 'n', label: 'किती पदांपर्यंत?', type: 'number', placeholder: 'उदा. 50', validation: { min: 1, isInteger: true, errorMessage: 'पद संख्या 1 किंवा अधिक असावी.' } },
            ],
            promptTemplate: (inputs) => `Find the sum of the first ${inputs.n} natural numbers. Explain the formula S = n(n+1)/2 in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the sum of first n natural numbers. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
          },
          {
            key: 'sum_squares_cubes',
            name: 'वर्ग आणि घन संख्यांची बेरीज',
            icon: React.createElement(NumberSystemIcon),
            inputs: [
              { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पहिल्या 10 नैसर्गिक संख्यांच्या वर्गांची बेरीज काढा. OR पहिल्या 5 नैसर्गिक संख्यांच्या घनांची बेरीज काढा.' },
            ],
            promptTemplate: (inputs) => `Solve the problem: ${inputs.problem}. Explain the formulas for the sum of squares [n(n+1)(2n+1)/6] or sum of cubes [(n(n+1)/2)²] in Marathi.`,
            mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the sum of squares or cubes of first n natural numbers. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
            expertPromptTemplate: expertPromptGenerator('नैसर्गिक संख्यांच्या वर्गांची आणि घनांची बेरीज')
          },
        ]
      }
    ]
  },
  {
    key: 'exponents_surds',
    name: 'घातांक आणि करणी',
    icon: React.createElement(ExponentIcon),
    subTopics: [
      {
        key: 'laws_of_exponents',
        name: 'घातांकाचे नियम',
        icon: React.createElement(ExponentIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (2³) * (2⁵) ची किंमत काढा. OR (5⁶) / (5²) ची किंमत काढा.' },
        ],
        promptTemplate: (inputs) => `Solve the problem using the laws of exponents: ${inputs.problem}. State the law used (e.g., a^m * a^n = a^(m+n)) and show the calculation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on the laws of exponents. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'surds_operations',
        name: 'करणीवरील क्रिया',
        icon: React.createElement(ExponentIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. √8 + √18 ची बेरीज करा. OR √75 / √3 चा भागाकार करा.' },
        ],
        promptTemplate: (inputs) => `Solve the problem involving operations on surds: ${inputs.problem}. Explain the process of simplifying surds and performing the operation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on operations on surds (addition, subtraction, multiplication, division). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'surds_rationalization',
        name: 'छेदाचे परिमेयकरण',
        icon: React.createElement(ExponentIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 1 / (√3 - √2) च्या छेदाचे परिमेयकरण करा.' },
        ],
        promptTemplate: (inputs) => `Rationalize the denominator for the expression: ${inputs.problem}. Explain the concept of conjugate pairs and show the step-by-step process in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on rationalizing the denominator of a surd expression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('करणी - छेदाचे परिमेयकरण')
      },
    ]
  },
  {
    key: 'number_system',
    name: 'संख्या प्रणाली',
    icon: React.createElement(NumberSystemIcon),
    subTopics: [
      {
        key: 'lcm_hcf',
        name: 'लसावि आणि मसावि',
        icon: React.createElement(LcmHcfIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 12, 15 आणि 18 यांचा लसावि आणि मसावि काढा.' },
        ],
        promptTemplate: (inputs) => `Find the LCM (लसावि) and HCF (मसावि) for the numbers in the problem: ${inputs.problem}. Explain both the prime factorization method and the division method in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the LCM or HCF of a set of numbers. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'divisibility_rules',
        name: 'विभाज्यतेच्या कसोट्या',
        icon: React.createElement(NumberSystemIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 73*54 ही संख्या 9 ने पूर्ण भाग जाणारी असेल, तर * च्या जागी कोणता अंक येईल?' },
        ],
        promptTemplate: (inputs) => `Solve the problem using divisibility rules: ${inputs.problem}. State the relevant divisibility rule and explain how to apply it step-by-step in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on applying divisibility rules. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('विभाज्यतेच्या कसोट्या')
      },
      {
        key: 'unit_digit',
        name: 'एकक स्थानचा अंक',
        icon: React.createElement(NumberSystemIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. (127)³⁹ या संख्येच्या एकक स्थानी कोणता अंक येईल?' },
        ],
        promptTemplate: (inputs) => `Find the unit digit of the expression: ${inputs.problem}. Explain the concept of cyclicity of unit digits for numbers 0-9 and provide a step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the unit digit of a large exponential expression. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'remainders',
        name: 'बाकी (Remainder)',
        icon: React.createElement(NumberSystemIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 17²⁰⁰ ला 18 ने भागल्यास बाकी किती उरेल?' },
        ],
        promptTemplate: (inputs) => `Find the remainder for the given problem: ${inputs.problem}. Explain the Remainder Theorem or relevant properties of remainders and provide a step-by-step solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on finding the remainder. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
    ]
  },
  {
    key: 'probability',
    name: 'संभाव्यता',
    icon: React.createElement(ProbabilityIcon),
    subTopics: [
      {
        key: 'probability_basics',
        name: 'मूलभूत संकल्पना',
        icon: React.createElement(SetTheoryIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका फाश्याला एकदा फेकले असता, विषम संख्या मिळण्याची संभाव्यता किती?' },
        ],
        promptTemplate: (inputs) => `Solve the basic probability problem: ${inputs.problem}. Explain the formula P(E) = (Number of favorable outcomes) / (Total number of outcomes) and define the sample space and event space in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a basic probability problem involving a single event (like a coin toss or a single die roll). The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'probability_coins',
        name: 'नाणी (Coins)',
        icon: React.createElement(CoinIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन नाणी एकाच वेळी फेकली असता, कमीत कमी एक छापा मिळण्याची संभाव्यता किती?' },
        ],
        promptTemplate: (inputs) => `Solve the probability problem related to coins: ${inputs.problem}. List the sample space and the favorable outcomes, then calculate the probability. Provide a step-by-step explanation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a probability problem involving tossing two or three coins. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'probability_dice',
        name: 'फासे (Dice)',
        icon: React.createElement(DiceIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन फासे एकाच वेळी फेकले असता, दोन्ही फाश्यांवरील अंकांची बेरीज 8 असण्याची संभाव्यता किती?' },
        ],
        promptTemplate: (inputs) => `Solve the probability problem related to dice: ${inputs.problem}. Explain how to construct the sample space for two dice and identify the favorable outcomes. Provide a detailed solution in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a probability problem involving rolling two dice. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'probability_cards',
        name: 'पत्ते (Cards)',
        icon: React.createElement(CardsIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 52 पत्त्यांच्या कॅटमधून एक पत्ता यादृच्छिकपणे काढल्यास, तो एक्का असण्याची संभाव्यता किती? OR तो लाल रंगाचा राजा असण्याची संभाव्यता किती?' },
        ],
        promptTemplate: (inputs) => `Solve the probability problem related to a standard deck of 52 playing cards: ${inputs.problem}. Explain the structure of a deck of cards (suits, colors, face cards) and calculate the probability. Provide a detailed explanation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a probability problem involving drawing a card from a standard deck of 52 cards. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`
      },
      {
        key: 'probability_balls',
        name: 'चेंडू (Balls)',
        icon: React.createElement(BallsIcon),
        inputs: [
          { key: 'problem', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. एका पिशवीत 4 लाल आणि 6 निळे चेंडू आहेत. यादृच्छिकपणे एक चेंडू काढल्यास तो लाल असण्याची संभाव्यता किती?' },
        ],
        promptTemplate: (inputs) => `Solve the probability problem related to drawing balls from a bag/urn: ${inputs.problem}. Explain the steps to find the total number of balls and the number of favorable balls to calculate the probability. Provide a detailed explanation in Marathi.`,
        mcqPromptTemplate: (difficulty: Difficulty) => `Generate a multiple-choice question (MCQ) for a competitive exam based on a probability problem involving drawing one or more balls from a bag containing balls of different colors. The question should be in Marathi. Provide four options (A, B, C, D), the correct answer, and a step-by-step explanation.`,
        expertPromptTemplate: expertPromptGenerator('संभाव्यता - चेंडू काढणे')
      },
    ]
  }
];

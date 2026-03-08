
import React from 'react';
import type { Topic, Difficulty } from './types';
import {
  PercentageIcon, RatioIcon, InterestIcon, ProfitLossIcon, TimeWorkIcon, SpeedIcon,
  AverageIcon, AreaVolumeIcon, PerimeterIcon, AlgebraIcon, APIcon, ExponentIcon,
  GPIcon, NumberSystemIcon, LcmHcfIcon, ProbabilityIcon, IncreaseDecreaseIcon, DiscountIcon, ExamIcon, MixtureIcon, ComparisonIcon, WagesIcon, PipeIcon, TrainIcon, BoatIcon, ConversionIcon, TriangleIcon, SphereIcon, CylinderConeIcon, SetTheoryIcon, CoinIcon, DiceIcon, CardsIcon, BallsIcon, LightbulbIcon, SearchIcon, QuestionIcon
} from './components/Icons';

const expertPromptGenerator = (topicName: string) => {
    return () => `Generate a single, challenging, multi-step math problem based on the topic of '${topicName}', suitable for a competitive exam like UPSC or MPSC in India. The problem must be in Marathi. Then provide the final answer and a detailed explanation. The explanation must be in Marathi and formatted with markdown. It must include the following sections in order: the problem statement under the heading '**प्रश्न:**', a detailed step-by-step solution under '**सविस्तर स्पष्टीकरण:**' (this section MUST be a numbered list, e.g., 1. Step one... 2. Step two...), an explanation of any advanced concepts used under '**प्रगत संकल्पना:**', any relevant shortcuts under '**शॉर्टकट पद्धत:**', and finally, a section on common mistakes related to this type of problem under the heading '**टाळण्यायोग्य चुका:**'.`;
};

export const TOPICS: Topic[] = [
  {
    key: 'percentage',
    name: 'टक्केवारी',
    englishName: 'Percentage',
    icon: React.createElement(PercentageIcon),
    subTopics: [
      {
        key: 'perc_basics',
        name: '1) टक्केवारीची मूलभूत संकल्पना',
        icon: React.createElement(NumberSystemIcon),
        subTopics: [
          {
            key: 'what_is_perc',
            name: 'टक्केवारी म्हणजे काय?',
            icon: React.createElement(QuestionIcon),
            subTopics: [
              { key: 'per_hundred', name: 'शेकडा (Per Hundred) संकल्पना', icon: React.createElement(NumberSystemIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. शेकडा म्हणजे काय?' }], promptTemplate: (i) => `शेकडा (Per Hundred) संकल्पना स्पष्ट करा: ${i.p}` },
              { key: 'perc_to_frac_dec', name: '% चे भिन्न आणि दशांशात रूपांतर', icon: React.createElement(ConversionIcon), inputs: [{ key: 'p', label: 'टक्केवारी', type: 'number', placeholder: '25' }], promptTemplate: (i) => `${i.p}% चे भिन्न (Fraction) आणि दशांश (Decimal) मध्ये रूपांतर करा.` },
              { key: 'frac_dec_to_perc', name: 'भिन्न / दशांश ते टक्केवारी रूपांतर', icon: React.createElement(ConversionIcon), inputs: [{ key: 'p', label: 'अपूर्णांक/दशांश', type: 'text', placeholder: '3/4 किंवा 0.75' }], promptTemplate: (i) => `${i.p} चे टक्केवारीमध्ये रूपांतर करा.` }
            ]
          },
          {
            key: 'imp_conversions',
            name: 'महत्त्वाचे रूपांतरण प्रकार',
            icon: React.createElement(ConversionIcon),
            subTopics: [
              { key: 'conv_1_2', name: '1/2 = 50%', icon: React.createElement(ConversionIcon), inputs: [], promptTemplate: () => `1/2 = 50% हे कसे येते ते स्पष्ट करा.` },
              { key: 'conv_1_4', name: '1/4 = 25%', icon: React.createElement(ConversionIcon), inputs: [], promptTemplate: () => `1/4 = 25% हे कसे येते ते स्पष्ट करा.` },
              { key: 'conv_0_75', name: '0.75 = 75%', icon: React.createElement(ConversionIcon), inputs: [], promptTemplate: () => `0.75 = 75% हे कसे येते ते स्पष्ट करा.` },
              { key: 'conv_1_8', name: '12.5% = 1/8', icon: React.createElement(ConversionIcon), inputs: [], promptTemplate: () => `12.5% = 1/8 हे कसे येते ते स्पष्ट करा.` }
            ]
          }
        ]
      },
      {
        key: 'perc_inc_dec_group',
        name: '2) टक्केवारी वाढ व घट (Increase & Decrease)',
        icon: React.createElement(IncreaseDecreaseIcon),
        subTopics: [
          {
            key: 'perc_inc_sub',
            name: 'टक्केवारी वाढ',
            icon: React.createElement(IncreaseDecreaseIcon),
            subTopics: [
              { key: 'inc_on_orig', name: 'मूळ किमतीवर वाढ काढणे', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'orig', label: 'मूळ किंमत', type: 'number', placeholder: '100' }, { key: 'perc', label: 'वाढ (%)', type: 'number', placeholder: '20' }], promptTemplate: (i) => `${i.orig} वर ${i.perc}% वाढ काढण्याची पद्धत स्पष्ट करा.` },
              { key: 'find_new_price', name: 'नवीन किंमत शोधणे', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'orig', label: 'मूळ किंमत', type: 'number', placeholder: '500' }, { key: 'perc', label: 'वाढ (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `${i.orig} वर ${i.perc}% वाढ झाल्यावर नवीन किंमत किती होईल?` },
              { key: 'succ_inc', name: 'सलग वाढ (Successive Increase)', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'p1', label: 'पहिली वाढ (%)', type: 'number', placeholder: '10' }, { key: 'p2', label: 'दुसरी वाढ (%)', type: 'number', placeholder: '20' }], promptTemplate: (i) => `${i.p1}% आणि ${i.p2}% सलग वाढीचा एकूण परिणाम काढा.` }
            ]
          },
          {
            key: 'perc_dec_sub',
            name: 'टक्केवारी घट',
            icon: React.createElement(IncreaseDecreaseIcon),
            subTopics: [
              { key: 'dec_on_orig', name: 'मूळ किमतीवर घट काढणे', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'orig', label: 'मूळ किंमत', type: 'number', placeholder: '200' }, { key: 'perc', label: 'घट (%)', type: 'number', placeholder: '15' }], promptTemplate: (i) => `${i.orig} वर ${i.perc}% घट काढण्याची पद्धत स्पष्ट करा.` },
              { key: 'find_new_price_dec', name: 'नवीन किंमत शोधणे', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'orig', label: 'मूळ किंमत', type: 'number', placeholder: '1000' }, { key: 'perc', label: 'घट (%)', type: 'number', placeholder: '25' }], promptTemplate: (i) => `${i.orig} वर ${i.perc}% घट झाल्यावर नवीन किंमत किती होईल?` },
              { key: 'succ_dec', name: 'सलग घट (Successive Decrease)', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'p1', label: 'पहिली घट (%)', type: 'number', placeholder: '10' }, { key: 'p2', label: 'दुसरी घट (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `${i.p1}% आणि ${i.p2}% सलग घटीचा एकूण परिणाम काढा.` }
            ]
          },
          {
            key: 'mixed_inc_dec',
            name: 'वाढ-घट मिश्र प्रकार',
            icon: React.createElement(ComparisonIcon),
            subTopics: [
              { key: 'inc_then_dec', name: 'आधी वाढ नंतर घट', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'inc', label: 'वाढ (%)', type: 'number', placeholder: '20' }, { key: 'dec', label: 'घट (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `एका संख्येवर आधी ${i.inc}% वाढ आणि नंतर ${i.dec}% घट केल्यास होणारा बदल काढा.` },
              { key: 'dec_then_inc', name: 'आधी घट नंतर वाढ', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'dec', label: 'घट (%)', type: 'number', placeholder: '20' }, { key: 'inc', label: 'वाढ (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `एका संख्येवर आधी ${i.dec}% घट आणि नंतर ${i.inc}% वाढ केल्यास होणारा बदल काढा.` },
              { key: 'net_perc_change', name: 'Net Percentage Change', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'p1', label: 'पहिला बदल (%)', type: 'number', placeholder: '15' }, { key: 'p2', label: 'दुसरा बदल (%)', type: 'number', placeholder: '-5' }], promptTemplate: (i) => `${i.p1}% आणि ${i.p2}% बदलांचा निव्वळ टक्केवारी बदल (Net Percentage Change) काढा.` }
            ]
          }
        ]
      },
      {
        key: 'perc_pl_group',
        name: '3) टक्केवारी आधारित नफा-तोटा प्रश्न',
        icon: React.createElement(ProfitLossIcon),
        subTopics: [
          { key: 'cp_sp', name: 'खर्च किंमत व विक्री किंमत', icon: React.createElement(ProfitLossIcon), inputs: [{ key: 'cp', label: 'खरेदी किंमत', type: 'number', placeholder: '500' }, { key: 'sp', label: 'विक्री किंमत', type: 'number', placeholder: '600' }], promptTemplate: (i) => `खरेदी किंमत ${i.cp} आणि विक्री किंमत ${i.sp} असताना नफा/तोटा काढा.` },
          { key: 'profit_perc', name: 'नफा %', icon: React.createElement(ProfitLossIcon), inputs: [{ key: 'cp', label: 'खरेदी किंमत', type: 'number', placeholder: '400' }, { key: 'profit', label: 'नफा', type: 'number', placeholder: '80' }], promptTemplate: (i) => `खरेदी किंमत ${i.cp} वर ${i.profit} नफा झाल्यास नफा टक्केवारी काढा.` },
          { key: 'loss_perc', name: 'तोटा %', icon: React.createElement(ProfitLossIcon), inputs: [{ key: 'cp', label: 'खरेदी किंमत', type: 'number', placeholder: '1000' }, { key: 'loss', label: 'तोटा', type: 'number', placeholder: '200' }], promptTemplate: (i) => `खरेदी किंमत ${i.cp} वर ${i.loss} तोटा झाल्यास तोटा टक्केवारी काढा.` },
          { key: 'mp_dis', name: 'Marked Price व Discount', icon: React.createElement(DiscountIcon), inputs: [{ key: 'mp', label: 'छापील किंमत', type: 'number', placeholder: '1200' }, { key: 'dis', label: 'सूट (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `छापील किंमत ${i.mp} वर ${i.dis}% सूट दिल्यास विक्री किंमत काढा.` },
          { key: 'succ_dis', name: 'सलग सवलत (Successive Discount)', icon: React.createElement(DiscountIcon), inputs: [{ key: 'd1', label: 'पहिली सूट (%)', type: 'number', placeholder: '20' }, { key: 'd2', label: 'दुसरी सूट (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `${i.d1}% आणि ${i.d2}% सलग सवलतींची एकत्रित सूट काढा.` }
        ]
      },
      {
        key: 'perc_avg_group',
        name: '4) टक्केवारी व सरासरी (Average Based)',
        icon: React.createElement(AverageIcon),
        subTopics: [
          { key: 'calc_total_perc', name: 'एकूण टक्केवारी काढणे', icon: React.createElement(AverageIcon), inputs: [{ key: 'vals', label: 'टक्केवारी मूल्ये (स्वल्पविराम)', type: 'text', placeholder: '70, 80, 90' }], promptTemplate: (i) => `${i.vals} या मूल्यांची सरासरी टक्केवारी काढा.` },
          { key: 'pass_perc', name: 'निकालातील पास टक्केवारी', icon: React.createElement(ExamIcon), inputs: [{ key: 'total', label: 'एकूण विद्यार्थी', type: 'number', placeholder: '500' }, { key: 'pass', label: 'पास विद्यार्थी', type: 'number', placeholder: '450' }], promptTemplate: (i) => `${i.total} पैकी ${i.pass} विद्यार्थी पास झाल्यास पास टक्केवारी काढा.` },
          { key: 'boy_girl_perc', name: 'मुलगे-मुली प्रमाण टक्केवारी', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'boys', label: 'मुलगे', type: 'number', placeholder: '30' }, { key: 'girls', label: 'मुली', type: 'number', placeholder: '20' }], promptTemplate: (i) => `${i.boys} मुलगे आणि ${i.girls} मुली असल्यास प्रत्येकाची टक्केवारी काढा.` },
          { key: 'weighted_avg', name: 'वजनित सरासरी (Weighted Average)', icon: React.createElement(AverageIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दोन वर्गांची सरासरी टक्केवारी...' }], promptTemplate: (i) => `वजनित सरासरी (Weighted Average) आधारित टक्केवारीचा प्रश्न सोडवा: ${i.p}` }
        ]
      },
      {
        key: 'perc_marks_group',
        name: '5) टक्केवारी व गुण (Marks Based Problems)',
        icon: React.createElement(ExamIcon),
        subTopics: [
          { key: 'perc_on_total', name: 'एकूण गुणांवर आधारित टक्केवारी', icon: React.createElement(ExamIcon), inputs: [{ key: 'marks', label: 'मिळालेले गुण', type: 'number', placeholder: '450' }, { key: 'total', label: 'एकूण गुण', type: 'number', placeholder: '600' }], promptTemplate: (i) => `${i.total} पैकी ${i.marks} गुण मिळाल्यास टक्केवारी काढा.` },
          { key: 'pass_req_perc', name: 'पास होण्यासाठी आवश्यक टक्केवारी', icon: React.createElement(ExamIcon), inputs: [{ key: 'total', label: 'एकूण गुण', type: 'number', placeholder: '100' }, { key: 'pass', label: 'पासिंग गुण', type: 'number', placeholder: '35' }], promptTemplate: (i) => `${i.total} पैकी ${i.pass} गुण पासिंग असल्यास किती टक्के गुण लागतील?` },
          { key: 'marks_inc_perc', name: 'किती गुण वाढल्यास किती % वाढ', icon: React.createElement(ExamIcon), inputs: [{ key: 'total', label: 'एकूण गुण', type: 'number', placeholder: '500' }, { key: 'inc', label: 'वाढलेले गुण', type: 'number', placeholder: '25' }], promptTemplate: (i) => `${i.total} गुणांच्या परीक्षेत ${i.inc} गुण वाढल्यास किती टक्के वाढ होईल?` },
          { key: 'compare_marks', name: 'दोन विद्यार्थ्यांच्या टक्केवारीची तुलना', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'p', label: 'तुलना प्रश्न', type: 'textarea', placeholder: 'उदा. A ला B पेक्षा 10% जास्त गुण मिळाले...' }], promptTemplate: (i) => `दोन विद्यार्थ्यांच्या गुणांची तुलना करा: ${i.p}` }
        ]
      },
      {
        key: 'perc_pop_group',
        name: '6) लोकसंख्या आधारित प्रश्न',
        icon: React.createElement(NumberSystemIcon),
        subTopics: [
          { key: 'annual_growth', name: 'वार्षिक वाढ टक्केवारी', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'pop', label: 'सध्याची लोकसंख्या', type: 'number', placeholder: '10000' }, { key: 'rate', label: 'वाढ दर (%)', type: 'number', placeholder: '5' }], promptTemplate: (i) => `${i.pop} लोकसंख्या असलेल्या शहरात वार्षिक ${i.rate}% वाढ होत असल्यास एका वर्षानंतरची लोकसंख्या काढा.` },
          { key: 'succ_year_growth', name: 'सलग वर्षांची वाढ', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'pop', label: 'सध्याची लोकसंख्या', type: 'number', placeholder: '50000' }, { key: 'r1', label: 'पहिल्या वर्षी वाढ (%)', type: 'number', placeholder: '10' }, { key: 'r2', label: 'दुसऱ्या वर्षी वाढ (%)', type: 'number', placeholder: '20' }], promptTemplate: (i) => `${i.pop} लोकसंख्येवर सलग दोन वर्षे ${i.r1}% आणि ${i.r2}% वाढ झाल्यास अंतिम लोकसंख्या काढा.` },
          { key: 'depreciation_rate', name: 'घट दर (Depreciation type)', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'val', label: 'किंमत/लोकसंख्या', type: 'number', placeholder: '100000' }, { key: 'rate', label: 'घट दर (%)', type: 'number', placeholder: '10' }], promptTemplate: (i) => `${i.val} वर वार्षिक ${i.rate}% दराने घट (Depreciation) होत असल्यास मूल्य काढा.` },
          { key: 'census_based', name: 'जनगणना आधारित प्रश्न', icon: React.createElement(SearchIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. साक्षरता प्रमाण, स्त्री-पुरुष प्रमाण...' }], promptTemplate: (i) => `जनगणना आधारित टक्केवारीचा प्रश्न सोडवा: ${i.p}` }
        ]
      },
      {
        key: 'perc_income_group',
        name: '7) वेतन, उत्पन्न आणि खर्च',
        icon: React.createElement(WagesIcon),
        subTopics: [
          { key: 'salary_inc', name: 'पगार वाढ %', icon: React.createElement(WagesIcon), inputs: [{ key: 'sal', label: 'मूळ पगार', type: 'number', placeholder: '20000' }, { key: 'inc', label: 'वाढ (%)', type: 'number', placeholder: '15' }], promptTemplate: (i) => `${i.sal} पगारावर ${i.inc}% वाढ मिळाल्यास नवीन पगार काढा.` },
          { key: 'inflation_rate', name: 'महागाई दर', icon: React.createElement(SpeedIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वस्तूची किंमत महागाईमुळे वाढली...' }], promptTemplate: (i) => `महागाई दर आणि टक्केवारी आधारित प्रश्न सोडवा: ${i.p}` },
          { key: 'exp_inc_dec', name: 'खर्चात वाढ-घट', icon: React.createElement(WagesIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. उत्पन्नाच्या 70% खर्च होतो...' }], promptTemplate: (i) => `उत्पन्न आणि खर्च आधारित वाढ-घट प्रश्न सोडवा: ${i.p}` },
          { key: 'savings_perc', name: 'बचत टक्केवारी', icon: React.createElement(WagesIcon), inputs: [{ key: 'sal', label: 'उत्पन्न', type: 'number', placeholder: '30000' }, { key: 'sav', label: 'बचत', type: 'number', placeholder: '6000' }], promptTemplate: (i) => `${i.sal} उत्पन्नापैकी ${i.sav} बचत असल्यास बचत टक्केवारी काढा.` }
        ]
      },
      {
        key: 'perc_exam_types',
        name: '8) परीक्षा विशेष Types',
        icon: React.createElement(SearchIcon),
        subTopics: [
          { key: 'ratio_to_perc', name: 'Ratio ते Percentage', icon: React.createElement(RatioIcon), inputs: [{ key: 'r', label: 'प्रमाण (Ratio)', type: 'text', placeholder: '3:5' }], promptTemplate: (i) => `${i.r} या प्रमाणाचे टक्केवारीमध्ये रूपांतर करा.` },
          { key: 'perc_to_ratio', name: 'Percentage ते Ratio', icon: React.createElement(RatioIcon), inputs: [{ key: 'p', label: 'टक्केवारी', type: 'number', placeholder: '60' }], promptTemplate: (i) => `${i.p}% चे प्रमाण (Ratio) मध्ये रूपांतर करा.` },
          { key: 'x_perc_of_y', name: 'X% of Y प्रकार', icon: React.createElement(PercentageIcon), inputs: [{ key: 'x', label: 'X (%)', type: 'number', placeholder: '20' }, { key: 'y', label: 'Y (संख्या)', type: 'number', placeholder: '500' }], promptTemplate: (i) => `${i.y} चे ${i.x}% किती?` },
          { key: 'y_is_what_perc_x', name: 'Y is what percent of X', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'y', label: 'Y', type: 'number', placeholder: '50' }, { key: 'x', label: 'X', type: 'number', placeholder: '200' }], promptTemplate: (i) => `${i.y} हे ${i.x} च्या किती टक्के आहे?` },
          { key: 'x_more_less_y', name: 'X is what percent more/less than Y', icon: React.createElement(ComparisonIcon), inputs: [{ key: 'x', label: 'X', type: 'number', placeholder: '120' }, { key: 'y', label: 'Y', type: 'number', placeholder: '100' }], promptTemplate: (i) => `${i.x} हे ${i.y} पेक्षा किती टक्के जास्त किंवा कमी आहे?` },
          { key: 'data_interp', name: 'Data Interpretation (Pie Chart / Bar Graph आधारित टक्केवारी)', icon: React.createElement(SearchIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. पाय चार्ट मधील कोनाचे टक्केवारी रूपांतर...' }], promptTemplate: (i) => `Data Interpretation आधारित टक्केवारीचा प्रश्न सोडवा: ${i.p}` }
        ]
      },
      {
        key: 'perc_adv_group',
        name: '9) प्रगत (Advanced) Types',
        icon: React.createElement(LightbulbIcon),
        subTopics: [
          { key: 'pop_growth_formula', name: 'Population Growth Formula आधारित प्रश्न', icon: React.createElement(NumberSystemIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. P(1+R/100)^n सूत्र वापरून...' }], promptTemplate: (i) => `Population Growth Formula वापरून प्रश्न सोडवा: ${i.p}` },
          { key: 'compound_inc_dec', name: 'Compound Increase / Decrease', icon: React.createElement(IncreaseDecreaseIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. चक्रवाढ पद्धतीने होणारी वाढ...' }], promptTemplate: (i) => `Compound Increase/Decrease आधारित प्रश्न सोडवा: ${i.p}` },
          { key: 'mixture_perc', name: 'Mixture Problems मधील टक्केवारी', icon: React.createElement(MixtureIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. दुध आणि पाण्याच्या मिश्रणात...' }], promptTemplate: (i) => `मिश्रण (Mixture) आधारित टक्केवारीचा प्रश्न सोडवा: ${i.p}` },
          { key: 'profit_dis_comb', name: 'Profit + Discount Combined Problems', icon: React.createElement(ProfitLossIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 10% सूट देऊनही 20% नफा झाला...' }], promptTemplate: (i) => `नफा आणि सूट एकत्रित प्रश्न सोडवा: ${i.p}` },
          { key: 'succ_perc_tricks', name: 'Successive Percentage Shortcut Tricks', icon: React.createElement(SpeedIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. सलग बदलांसाठी शॉर्टकट...' }], promptTemplate: (i) => `सलग टक्केवारी बदलांसाठी शॉर्टकट ट्रिक्स स्पष्ट करा: ${i.p}` }
        ]
      },
      {
        key: 'perc_shortcuts_group',
        name: '10) जलद सोडवण्यासाठी महत्त्वाचे Shortcuts',
        icon: React.createElement(SpeedIcon),
        subTopics: [
          { key: 'mental_math_perc', name: '10%, 20%, 25%, 50% चे जलद मानसिक गणित', icon: React.createElement(SpeedIcon), inputs: [{ key: 'n', label: 'संख्या', type: 'number', placeholder: '1200' }], promptTemplate: (i) => `${i.n} चे 10%, 20%, 25%, आणि 50% मानसिकरित्या कसे काढायचे ते स्पष्ट करा.` },
          { key: 'find_1_perc', name: '1% काढण्याची पद्धत', icon: React.createElement(SpeedIcon), inputs: [{ key: 'n', label: 'संख्या', type: 'number', placeholder: '850' }], promptTemplate: (i) => `${i.n} चा 1% काढण्याची जलद पद्धत स्पष्ट करा.` },
          { key: 'perc_mult_trick', name: 'Percentage Multiplication Trick', icon: React.createElement(SpeedIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. 16% of 25 = 25% of 16...' }], promptTemplate: (i) => `Percentage Multiplication Trick स्पष्ट करा: ${i.p}` },
          { key: 'vedic_math_perc', name: 'Vedic Math आधारित वेगवान पद्धती', icon: React.createElement(SpeedIcon), inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'उदा. वैदिक गणिताने टक्केवारी...' }], promptTemplate: (i) => `वैदिक गणित वापरून टक्केवारी काढण्याच्या पद्धती स्पष्ट करा: ${i.p}` }
        ]
      }
    ],
  },
  {
    key: 'profit_loss',
    name: 'नफा-तोटा व सूट',
    englishName: 'Profit & Loss',
    icon: React.createElement(ProfitLossIcon),
    subTopics: [
        {
            key: 'pl_basics',
            name: 'खरेदी-विक्री (CP-SP)',
            icon: React.createElement(ProfitLossIcon),
            inputs: [
                { key: 'cp', label: 'खरेदी किंमत', type: 'number', placeholder: '500' },
                { key: 'sp', label: 'विक्री किंमत', type: 'number', placeholder: '600' }
            ],
            promptTemplate: (i) => `Calculate profit or loss percentage for CP: ${i.cp} and SP: ${i.sp} in Marathi.`,
        },
        {
            key: 'discount',
            name: 'सूट व छापील किंमत',
            icon: React.createElement(DiscountIcon),
            inputs: [
                { key: 'mp', label: 'छापील किंमत', type: 'number', placeholder: '1000' },
                { key: 'dis', label: 'सूट (%)', type: 'number', placeholder: '10' }
            ],
            promptTemplate: (i) => `Calculate Selling Price after ${i.dis}% discount on ${i.mp} in Marathi.`,
        }
    ]
  },
  {
    key: 'ratio_proportion',
    name: 'प्रमाण व समप्रमाण',
    englishName: 'Ratio & Proportion',
    icon: React.createElement(RatioIcon),
    subTopics: [
      {
        key: 'ratio_ops',
        name: 'प्रमाण (Ratio) क्रिया',
        icon: React.createElement(RatioIcon),
        subTopics: [
          {
            key: 'simplify',
            name: 'प्रमाण सोपे करणे',
            icon: React.createElement(RatioIcon),
            inputs: [
              { key: 'a', label: 'पहिली संख्या', type: 'number', placeholder: '15' },
              { key: 'b', label: 'दुसरी संख्या', type: 'number', placeholder: '20' },
            ],
            promptTemplate: (inputs) => `Simplify ratio ${inputs.a}:${inputs.b} in Marathi.`,
          },
          {
              key: 'combine',
              name: 'प्रमाण एकत्र करणे',
              icon: React.createElement(RatioIcon),
              inputs: [{ key: 'prob', label: 'प्रश्न', type: 'textarea', placeholder: 'A:B=2:3, B:C=4:5' }],
              promptTemplate: (i) => `Solve ratio combination ${i.prob} in Marathi.`,
          }
        ]
      },
      {
          key: 'partnership',
          name: 'भागीदारी (Partnership)',
          icon: React.createElement(WagesIcon),
          inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'A आणि B ची गुंतवणूक...' }],
          promptTemplate: (i) => `Solve partnership problem in Marathi: ${i.p}`,
      }
    ]
  },
  {
    key: 'interest',
    name: 'व्याज (Interest)',
    englishName: 'Interest',
    icon: React.createElement(InterestIcon),
    subTopics: [
        {
            key: 'si',
            name: 'साधे व्याज (Simple)',
            icon: React.createElement(InterestIcon),
            inputs: [
                { key: 'p', label: 'मुद्दल', type: 'number', placeholder: '10000' },
                { key: 'r', label: 'दर (%)', type: 'number', placeholder: '8' },
                { key: 't', label: 'वर्षे', type: 'number', placeholder: '5' }
            ],
            promptTemplate: (i) => `Calculate SI for P:${i.p}, R:${i.r}, T:${i.t} in Marathi.`,
        },
        {
            key: 'ci',
            name: 'चक्रवाढ व्याज (Compound)',
            icon: React.createElement(InterestIcon),
            inputs: [
                { key: 'p', label: 'मुद्दल', type: 'number', placeholder: '10000' },
                { key: 'r', label: 'दर (%)', type: 'number', placeholder: '10' },
                { key: 't', label: 'वर्षे', type: 'number', placeholder: '2' }
            ],
            promptTemplate: (i) => `Calculate CI for P:${i.p}, R:${i.r}, T:${i.t} in Marathi.`,
        }
    ]
  },
  {
    key: 'time_work',
    name: 'वेळ व काम',
    englishName: 'Time & Work',
    icon: React.createElement(TimeWorkIcon),
    subTopics: [
        {
            key: 'together',
            name: 'एकत्र काम करणे',
            icon: React.createElement(TimeWorkIcon),
            inputs: [
                { key: 'a', label: 'A चे दिवस', type: 'number', placeholder: '10' },
                { key: 'b', label: 'B चे दिवस', type: 'number', placeholder: '15' }
            ],
            promptTemplate: (i) => `If A takes ${i.a} days and B takes ${i.b} days, together they take? Solve in Marathi.`,
        },
        {
            key: 'pipes',
            name: 'नळ आणि टाकी',
            icon: React.createElement(PipeIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'एक नळ 5 तासात भरतो...' }],
            promptTemplate: (i) => `Solve pipe problem in Marathi: ${i.p}`,
        },
        {
            key: 'wages',
            name: 'मजुरी (Wages)',
            icon: React.createElement(WagesIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'A आणि B चे काम आणि मजुरी...' }],
            promptTemplate: (i) => `Solve work-wages problem in Marathi: ${i.p}`,
        }
    ]
  },
  {
    key: 'speed_time_distance',
    name: 'वेग, वेळ व अंतर',
    englishName: 'Speed, Time & Distance',
    icon: React.createElement(SpeedIcon),
    subTopics: [
        {
            key: 'basic_std',
            name: 'मूलभूत सूत्रे',
            icon: React.createElement(SpeedIcon),
            inputs: [
                { key: 'd', label: 'अंतर (किमी)', type: 'number', placeholder: '120' },
                { key: 's', label: 'वेग (किमी/तास)', type: 'number', placeholder: '60' }
            ],
            promptTemplate: (i) => `Find time for D:${i.d} and S:${i.s} in Marathi.`,
        },
        {
            key: 'trains',
            name: 'रेल्वेचे प्रश्न',
            icon: React.createElement(TrainIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: '300 मी ट्रेन 72 किमी वेगाने...' }],
            promptTemplate: (i) => `Solve train problem in Marathi: ${i.p}`,
        },
        {
            key: 'boats',
            name: 'नाव आणि प्रवाह',
            icon: React.createElement(BoatIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'प्रवाहाच्या दिशेने वेग...' }],
            promptTemplate: (i) => `Solve boat problem in Marathi: ${i.p}`,
        }
    ]
  },
  {
    key: 'average',
    name: 'सरासरी (Average)',
    englishName: 'Average',
    icon: React.createElement(AverageIcon),
    subTopics: [
        {
            key: 'avg_basic',
            name: 'साधी सरासरी',
            icon: React.createElement(AverageIcon),
            inputs: [{ key: 'n', label: 'संख्या (स्वल्पविराम)', type: 'text', placeholder: '10, 20, 30' }],
            promptTemplate: (i) => `Find average of ${i.n} in Marathi.`,
        },
        {
            key: 'age_avg',
            name: 'वयाची सरासरी',
            icon: React.createElement(AlgebraIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: '5 जणांची सरासरी...' }],
            promptTemplate: (i) => `Solve age-average problem in Marathi: ${i.p}`,
        }
    ]
  },
  {
    key: 'area_volume',
    name: 'क्षेत्रफळ व घनफळ',
    englishName: 'Area & Volume',
    icon: React.createElement(AreaVolumeIcon),
    subTopics: [
        {
            key: 'area_2d',
            name: 'क्षेत्रफळ (2D)',
            icon: React.createElement(TriangleIcon),
            subTopics: [
                { key: 'rect', name: 'आयत/चौरस', icon: React.createElement(PerimeterIcon), inputs: [{key:'l', label:'लांबी', type:'number', placeholder:'10'}, {key:'w', label:'रुंदी', type:'number', placeholder:'5'}], promptTemplate: (i)=>`Area of ${i.l}x${i.w} in Marathi.` },
                { key: 'circle', name: 'वर्तुळ', icon: React.createElement(SphereIcon), inputs: [{key:'r', label:'त्रिज्या', type:'number', placeholder:'7'}], promptTemplate: (i)=>`Area of circle with radius ${i.r} in Marathi.` }
            ]
        },
        {
            key: 'vol_3d',
            name: 'घनफळ (3D)',
            icon: React.createElement(SphereIcon),
            subTopics: [
                { key: 'cube', name: 'घन/इष्टिकाचिती', icon: React.createElement(AreaVolumeIcon), inputs: [{key:'s', label:'बाजू', type:'number', placeholder:'5'}], promptTemplate: (i)=>`Volume of cube side ${i.s} in Marathi.` },
                { key: 'cylinder', name: 'दंडगोल/शंकू', icon: React.createElement(CylinderConeIcon), inputs: [{key:'r', label:'त्रिज्या', type:'number', placeholder:'7'}, {key:'h', label:'उंची', type:'number', placeholder:'10'}], promptTemplate: (i)=>`Volume calculation in Marathi.` }
            ]
        }
    ]
  },
  {
    key: 'algebra',
    name: 'बीजगणित (Algebra)',
    englishName: 'Algebra',
    icon: React.createElement(AlgebraIcon),
    subTopics: [
        {
            key: 'linear',
            name: 'समीकरणे सोडवणे',
            icon: React.createElement(AlgebraIcon),
            inputs: [{ key: 'eq', label: 'समीकरण', type: 'text', placeholder: '2x + 5 = 15' }],
            promptTemplate: (i) => `Solve equation ${i.eq} in Marathi step-by-step.`,
        },
        {
            key: 'age_prob',
            name: 'वयाचे प्रश्न (Algebra)',
            icon: React.createElement(AlgebraIcon),
            inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: 'वडिलांचे वय मुलाच्या तिप्पट...' }],
            promptTemplate: (i) => `Solve age algebra problem in Marathi: ${i.p}`,
        }
    ]
  },
  {
    key: 'number_system',
    name: 'संख्या प्रणाली',
    englishName: 'Number System',
    icon: React.createElement(NumberSystemIcon),
    subTopics: [
        {
            key: 'lcm_hcf',
            name: 'लसावि-मसावि',
            icon: React.createElement(LcmHcfIcon),
            inputs: [{ key: 'n', label: 'संख्या', type: 'text', placeholder: '12, 18, 24' }],
            promptTemplate: (i) => `Find LCM and HCF of ${i.n} in Marathi.`,
        },
        {
            key: 'simplify',
            name: 'अपूर्णांक साधे करणे',
            icon: React.createElement(APIcon),
            inputs: [{ key: 'f', label: 'अपूर्णांक', type: 'text', placeholder: '15/25' }],
            promptTemplate: (i) => `Simplify fraction ${i.f} in Marathi.`,
        }
    ]
  },
  {
    key: 'probability',
    name: 'संभाव्यता (Probability)',
    englishName: 'Probability',
    icon: React.createElement(ProbabilityIcon),
    subTopics: [
        { key: 'coins', name: 'नाणी व फासे', icon: React.createElement(DiceIcon), inputs: [{key:'p', label:'प्रश्न', type:'textarea', placeholder:'दोन नाणी फेकली असता...'}], promptTemplate: (i)=>`Solve probability in Marathi: ${i.p}` },
        { key: 'cards', name: 'पत्ते (Cards)', icon: React.createElement(CardsIcon), inputs: [{key:'p', label:'प्रश्न', type:'textarea', placeholder:'एक पत्ता काढला असता...'}], promptTemplate: (i)=>`Solve card probability in Marathi: ${i.p}` }
    ]
  },
  {
    key: 'series',
    name: 'श्रेढी (Series)',
    englishName: 'Series',
    icon: React.createElement(APIcon),
    subTopics: [
        { key: 'ap', name: 'अंकगणिती श्रेढी (AP)', icon: React.createElement(APIcon), inputs: [{key:'p', label:'प्रश्न', type:'textarea', placeholder:'2, 5, 8... 10वे पद?'}], promptTemplate: (i)=>`Solve AP in Marathi: ${i.p}` },
        { key: 'gp', name: 'भूमिती श्रेढी (GP)', icon: React.createElement(GPIcon), inputs: [{key:'p', label:'प्रश्न', type:'textarea', placeholder:'2, 4, 8...'}], promptTemplate: (i)=>`Solve GP in Marathi: ${i.p}` }
    ]
  },
  {
    key: 'exponents',
    name: 'घातांक व करणी',
    englishName: 'Exponents & Surds',
    icon: React.createElement(ExponentIcon),
    inputs: [{ key: 'p', label: 'प्रश्न', type: 'textarea', placeholder: '2^3 * 2^5 = ?' }],
    promptTemplate: (i) => `Solve exponent/surd problem in Marathi: ${i.p}`,
  }
];

const projects = [
  {
    id: "retail-sales",
    title: "Retail Sales Intelligence Dashboard",
    domain: "Business Intelligence",
    tools: ["Power BI", "SQL", "Excel"],
    tagline: "Turning raw retail data into profit-driving decisions.",
    problem:
      "A mid-size retail chain had no visibility into which product categories, regions, or discount strategies were driving or eroding profit. Decisions were made on gut feel rather than data, resulting in margin leakage that went undetected for years.",
    approach:
      "Extracted and cleaned 3 years of transactional sales data across 4 regions and 12 product categories. Built a relational data model in Power BI connecting sales, products, regions, and discount tiers. Designed an interactive dashboard enabling management to slice performance by time period, region, and category, replacing static spreadsheet reports.",
    insights: [
      "The South-West region consistently underperformed despite high sales volume. Root cause identified as excessive discounting eroding margins by up to 22% in peak quarters.",
      "Technology products generated the highest revenue but the lowest profit margin, with bulk discount abuse reducing net returns by an estimated 18% annually.",
      "Q4 revenue spikes masked persistent year-round losses in the Furniture category, which showed negative profit in 9 of 12 months analysed.",
      "The West region contributes the highest revenue-to-margin ratio, indicating a strategic opportunity for inventory expansion and targeted marketing investment.",
    ],
    metrics: [
      { label: "Profit Margin Loss from Discounts", value: "~18%" },
      { label: "Regions Analysed", value: "4" },
      { label: "Years of Data Processed", value: "3" },
      { label: "Categories Tracked", value: "12" },
    ],
    impact:
      "Identified that reducing discount rates on Technology products by 5–8% could recover an estimated 12–18% in profit margin. Provided management with a single source of truth for monthly performance reviews, replacing a fragmented reporting process. Recommended a regional discount cap policy projected to improve overall profitability within two quarters.",
    image: "/images/Adiddas-retail.png",
    demo: "/images/Adiddas-retail.gif",
    link: "#",
    slug: "retail",
  },
  {
    id: "regional-profit",
    title: "Regional Profit & Discount Analysis",
    domain: "Data Visualisation",
    tools: ["Tableau", "Excel", "Python"],
    tagline: "Visualising where discounts help and where they hurt.",
    problem:
      "Sales leadership could not determine whether their discount strategy was growing market share or simply cannibalising margins across regions. Without a clear visual framework, discount decisions were made inconsistently, with no evidence base for what thresholds were sustainable.",
    approach:
      "Used Python (pandas) to clean and reshape the dataset, handling missing values and normalising discount tiers. Built a Tableau story with regional maps, scatter plots correlating discount rate vs profit, and trend lines per product sub-category. Designed the visualisation to be self-explanatory for non-technical stakeholders.",
    insights: [
      "Discounts above 20% consistently produced negative profit across all regions, providing a clear, data-backed threshold for policy reform.",
      "The Central region achieved the best discount-to-profit ratio, demonstrating that moderate, targeted discounting can drive volume without sacrificing margin. This is a replicable model for other regions.",
      "Binders and Machines sub-categories showed the steepest profit decline under discounting, suggesting these categories are price-inelastic and should be excluded from blanket discount campaigns.",
      "The East region showed the highest variance in profitability, indicating inconsistent discount application that requires standardisation.",
    ],
    metrics: [
      { label: "Discount Threshold for Negative Profit", value: ">20%" },
      { label: "Best Performing Region", value: "Central" },
      { label: "Sub-categories Analysed", value: "17" },
      { label: "Profit Correlation (Discount vs Profit)", value: "r = −0.71" },
    ],
    impact:
      "Delivered a clear visual case for restructuring the discount policy. Recommended a tiered discount cap by product category, projected to improve overall margin by 10–15%. The Tableau story was designed for direct use in executive presentations, reducing the time from insight to decision.",
    image: "/images/regional-profit.png",
    demo: "/images/regional-profit.gif",
    link: "#",
    slug: "profit",
  },
  {
    id: "health-data",
    title: "Blood Pressure Prediction — ML Web App",
    domain: "Machine Learning",
    tools: ["Python", "Scikit-learn", "Flask", "Pandas", "Matplotlib", "Seaborn"],
    tagline: "Building a genuine ML classifier by diagnosing and fixing a broken model.",
    problem:
      "Hypertension affects 1 in 3 adults and often goes undetected until serious damage has occurred. The goal was to build a machine learning model that predicts whether a patient has high or normal blood pressure based on basic health inputs: age, sex, BMI, systolic BP, diastolic BP, and heart rate. The deeper challenge turned out to be the data itself.",
    approach:
      "Started with 219 patient records and 8 features. Before touching any model, performed exploratory data analysis and found a critical issue: the dataset had a perfect SBP boundary — every patient with SBP below 140 was labeled Normal, every patient above was labeled High, with zero overlap. This was a labeling artifact, not real clinical data. Generated 800 synthetic patient records using ACC/AHA clinical guidelines (SBP >= 130 OR DBP >= 80) with realistic noise to introduce genuine variability. Retrained Logistic Regression on the combined 1,019-record dataset. Deployed as a Flask web app with a redesigned UI including BMI auto-calculation and color-coded results.",
    insights: [
      "The original model scored 97% accuracy but was essentially a single threshold check on SBP. It completely ignored DBP, BMI, Age, and all other features — high accuracy does not mean a good model.",
      "The correlation heatmap revealed SBP correlated 0.77 with the target and DBP at 0.57, while BMI and Age were only 0.2 to 0.25. The scatter plot showed near-perfect class separation along SBP = 130, a red flag for real-world data.",
      "After data augmentation, the model learned coefficients that genuinely weighted multiple features. Cases where SBP is 128 but DBP is 85 (High), or SBP is 135 but DBP is 72 (Normal) were now classified correctly.",
      "Accuracy dropped from 97% to 90% after augmentation — but the model became genuinely useful, using DBP, BMI, and Age as real predictors rather than exploiting a clean boundary.",
      "Female patients and younger age groups were underrepresented in the original dataset, a limitation that affects generalisability and highlights the need for diverse clinical data.",
    ],
    metrics: [
      { label: "Original Model Accuracy", value: "97%" },
      { label: "Retrained Model Accuracy", value: "90%" },
      { label: "Total Records After Augmentation", value: "1,019" },
      { label: "Features Used", value: "8" },
    ],
    impact:
      "Demonstrated that a 97% accurate model can be fundamentally broken — and fixed it. The retrained model genuinely uses multiple clinical features to classify blood pressure status, making it suitable as a triage support tool. The project is deployed as a live Flask web app and the full codebase is available on GitHub. The key takeaway: diagnosing why a model behaves the way it does, and fixing data bias, is what separates real ML work from just running a notebook.",
    image: "/images/health-data.png",
    demo: null,
    link: "https://github.com/usman-abdul/blood-pressure-prediction",
    slug: "health",
  },
];

export default projects;

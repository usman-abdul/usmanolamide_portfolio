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
    demo: null,
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
    title: "Hypertension Risk Analysis",
    domain: "Healthcare Analytics",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    tagline: "Identifying who is most at risk and why, using clinical data.",
    problem:
      "Hypertension is a leading and often silent risk factor for cardiovascular disease, stroke, and kidney failure. Despite its prevalence, many high-risk individuals go unscreened. The goal was to identify which demographic and lifestyle factors most strongly predict elevated blood pressure, enabling earlier and more targeted clinical intervention.",
    approach:
      "Analysed a clinical dataset of 1,000+ patient records using Python. Performed exploratory data analysis (EDA), Pearson correlation analysis, and feature importance ranking. Visualised distributions, risk clusters, and factor relationships using Matplotlib and Seaborn. Segmented patients by age group, BMI range, smoking status, and sodium intake to identify compound risk profiles.",
    insights: [
      "Patients over 40 were 2.3x more likely to present with elevated blood pressure, with risk increasing sharply after age 50. This supports age-stratified screening protocols.",
      "BMI showed a strong positive correlation with systolic blood pressure (r ≈ 0.65), making it one of the most reliable single predictors of hypertension risk in this dataset.",
      "Smoking combined with high sodium intake was the strongest compound risk factor, associated with a 3.1x increase in hypertension likelihood compared to non-smokers with low sodium intake.",
      "Female patients in the 50–65 age group were the most underdiagnosed segment, with elevated BP present in 41% of cases but flagged in only 18% of records. This represents a significant clinical gap.",
      "Patients with BMI above 30 and age over 45 formed a high-density risk cluster, representing the highest-priority group for preventive intervention.",
    ],
    metrics: [
      { label: "Risk Increase (Age 40+)", value: "2.3×" },
      { label: "BMI vs Systolic BP Correlation", value: "r ≈ 0.65" },
      { label: "Compound Risk (Smoking + Sodium)", value: "3.1×" },
      { label: "Underdiagnosed (Women 50–65)", value: "41%" },
    ],
    impact:
      "Analysis supports prioritising early screening for patients over 40 with high BMI, particularly women in the 50–65 age group who are statistically underdiagnosed. Findings align with WHO hypertension prevention guidelines and provide an evidence base for targeted public health interventions. The compound risk model could be integrated into clinical triage workflows to flag high-risk patients before symptoms present.",
    image: "/images/health-data.png",
    demo: null,
    link: "#",
    slug: "health",
  },
];

export default projects;

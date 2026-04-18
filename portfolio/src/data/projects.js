const projects = [
  {
    id: "retail-sales",
    title: "Retail Sales Intelligence Dashboard",
    domain: "Business Intelligence",
    tools: ["Power BI", "SQL", "Excel"],
    tagline: "Turning raw retail data into profit-driving decisions.",
    problem:
      "A mid-size retail chain had no visibility into which product categories, regions, or discount strategies were driving or eroding profit. Decisions were made on gut feel rather than data.",
    approach:
      "Extracted and cleaned 3 years of transactional sales data. Built a relational data model in Power BI connecting sales, products, regions, and discount tiers. Designed an interactive dashboard for management to slice performance by time, region, and category.",
    insights: [
      "The South-West region consistently underperformed despite high sales volume — driven by excessive discounting.",
      "Technology products had the highest revenue but lowest profit margin due to bulk discount abuse.",
      "Q4 spikes masked year-round losses in the Furniture category.",
    ],
    metrics: [
      { label: "Profit Margin Loss from Discounts", value: "~18%" },
      { label: "Regions Analysed", value: "4" },
      { label: "Years of Data Processed", value: "3" },
      { label: "Categories Tracked", value: "12" },
    ],
    impact:
      "Identified that reducing discount rates on Technology products by 5–8% could recover an estimated 12–18% in profit margin. Gave management a single source of truth for monthly performance reviews.",
    image: "/images/retail-dashboard.png",
    link: "#",
    slug: "retail",
  },
  {
    id: "regional-profit",
    title: "Regional Profit & Discount Analysis",
    domain: "Data Visualisation",
    tools: ["Tableau", "Excel", "Python"],
    tagline: "Visualising where discounts help — and where they hurt.",
    problem:
      "Sales leadership couldn't determine whether their discount strategy was growing market share or simply cannibalising margins across regions.",
    approach:
      "Used Python (pandas) to clean and reshape the dataset. Built a Tableau story with regional maps, scatter plots correlating discount rate vs profit, and trend lines per product sub-category.",
    insights: [
      "Discounts above 20% consistently produced negative profit across all regions.",
      "The Central region had the best discount-to-profit ratio — a model for other regions.",
      "Binders and Machines sub-categories showed the steepest profit decline under discounting.",
    ],
    metrics: [
      { label: "Discount Threshold for Negative Profit", value: ">20%" },
      { label: "Best Performing Region", value: "Central" },
      { label: "Sub-categories Analysed", value: "17" },
      { label: "Profit Correlation (Discount vs Profit)", value: "r = -0.71" },
    ],
    impact:
      "Provided a clear visual case for restructuring the discount policy. Recommended a tiered discount cap by product category, projected to improve overall margin by 10–15%.",
    image: "/images/regional-profit.png",
    link: "#",
    slug: "profit",
  },
  {
    id: "health-data",
    title: "Health Data Analysis — Hypertension Risk",
    domain: "Healthcare Analytics",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    tagline: "Using data to understand who is most at risk — and why.",
    problem:
      "Hypertension is a leading risk factor for cardiovascular disease, yet many cases go undetected. The goal was to identify which demographic and lifestyle factors most strongly predict elevated blood pressure.",
    approach:
      "Analysed a clinical dataset of 1,000+ patient records. Performed EDA, correlation analysis, and feature importance ranking. Visualised distributions, risk clusters, and factor relationships using Matplotlib and Seaborn.",
    insights: [
      "Patients over 40 were 2.3x more likely to have elevated blood pressure.",
      "BMI showed a strong positive correlation with systolic BP (r ≈ 0.65).",
      "Smoking combined with high sodium intake was the strongest compound risk factor.",
      "Female patients in the 50–65 age group were the most underdiagnosed segment.",
    ],
    metrics: [
      { label: "Risk Increase (Age 40+)", value: "2.3x" },
      { label: "BMI vs BP Correlation", value: "r ≈ 0.65" },
      { label: "Patient Records Analysed", value: "1,000+" },
      { label: "Key Risk Factors Identified", value: "6" },
    ],
    impact:
      "Analysis supports early screening prioritisation for patients over 40 with high BMI. Findings align with WHO hypertension guidelines and could inform targeted public health interventions.",
    image: "/images/health-data.png",
    link: "#",
    slug: "health",
  },
];

export default projects;

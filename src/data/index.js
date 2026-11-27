export const personalInfo = {
  name: "Madhavan K M",
  headline: "Aspiring Software Engineer & AI/ML Developer",
  title: "AI/ML & Full-Stack Developer",
  role: "B.Tech in Artificial Intelligence & Data Science",
  location: "Chennai, Tamil Nadu, India",
  phone: "7358618233",
  email: "madhavankm2006@gmail.com",
  linkedin: "https://linkedin.com/in/madhavankm366",
  github: "https://github.com/madhavan-366",
  instagram: "https://www.instagram.com/_.__maddyyy_.__/",
  availability: "Open to Internships & Entry-Level Roles",
  summary: "Detail-oriented B.Tech AI & Data Science student at Rajalakshmi Institute of Technology (8.4 CGPA). Experienced in building end-to-end applied AI applications, predictive analytics workflows, and full-stack web apps with React, Node.js, FastAPI, and Python.",
  bio: "Motivated and detail-oriented B.Tech student specializing in Artificial Intelligence and Data Science, passionate about solving real-world problems through AI, Machine Learning, and Data Analytics. Interested in building intelligent applications, data-driven solutions, and modern full-stack systems.",
  goal: "Become an AI/ML Engineer and Software Developer while continuously mastering emerging technologies and scalable architectures.",
  stats: [
    { label: "Academic CGPA", value: "8.4", detail: "Rajalakshmi Institute of Tech" },
    { label: "Featured Projects", value: "3", detail: "Full-Stack & Applied AI" },
    { label: "Industry Internship", value: "1", detail: "Elevate Labs · Best Performer" },
    { label: "Certifications", value: "6", detail: "NPTEL, Forage, Simplilearn, Springpod" },
  ],
  typingStrings: [
    "AI/ML & Full-Stack Developer",
    "Building Explainable Computer Vision Apps",
    "Developing AI Agents with LangGraph & Gemini",
    "Designing Predictive Analytics & RFM Models",
    "Building Full-Stack React & Node Applications",
  ]
};

export const education = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Rajalakshmi Institute of Technology",
    location: "Chennai, India",
    period: "2023 – 2027",
    score: "8.4",
    scoreLabel: "CGPA",
    status: "Currently Pursuing (2023 – 2027)",
    coursework: [
      "Machine Learning & Deep Learning",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Statistics & Data Analytics",
      "Full-Stack Web Development"
    ],
    highlights: "Consistent academic performance with practical focus on machine learning, data analytics, and software engineering."
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC — Class XII)",
    institution: "Brotherhood Matric Hr Sec School",
    location: "Chennai, India",
    period: "2022 – 2023",
    score: "90.3%",
    scoreLabel: "Percentage",
    status: "Completed",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science"
    ],
    highlights: "Completed Higher Secondary Education with 90.3%, building a strong foundation in mathematics and computer science."
  }
];

export const skillCategories = [
  {
    id: "aiml",
    title: "AI & Machine Learning",
    subtitle: "Predictive modeling, deep learning, and LLM agent workflows",
    skills: [
      { name: "Machine Learning", level: "Core" },
      { name: "Deep Learning", level: "Core" },
      { name: "Computer Vision (Xception CNN)", level: "Core" },
      { name: "NLP", level: "Core" },
      { name: "LangGraph & Gemini API", level: "Core" },
      { name: "Scikit-Learn", level: "Core" },
      { name: "TensorFlow", level: "Familiar" }
    ]
  },
  {
    id: "engineering",
    title: "Full-Stack & Backend Engineering",
    subtitle: "Modern client-server architectures and web application frameworks",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "React.js", level: "Core" },
      { name: "Node.js", level: "Core" },
      { name: "Express.js", level: "Core" },
      { name: "FastAPI", level: "Core" },
      { name: "Flask", level: "Core" },
      { name: "Tailwind CSS", level: "Core" }
    ]
  },
  {
    id: "database",
    title: "Data Science, BI & Databases",
    subtitle: "Data analysis, business intelligence reporting, and database systems",
    skills: [
      { name: "Pandas & NumPy", level: "Core" },
      { name: "Matplotlib & Seaborn", level: "Core" },
      { name: "SQL (MySQL)", level: "Core" },
      { name: "MongoDB Atlas", level: "Core" },
      { name: "Power BI", level: "Core" },
      { name: "Excel", level: "Core" },
      { name: "RFM Analysis", level: "Core" }
    ]
  },
  {
    id: "analytics_tools",
    title: "Tools & Cloud Deployment",
    subtitle: "Version control, interactive apps, and hosting platforms",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "Streamlit", level: "Core" },
      { name: "Vercel", level: "Core" },
      { name: "Render", level: "Core" }
    ]
  }
];

export const allSkillsList = [
  "Python", "JavaScript", "SQL (MySQL)", "React.js", "Node.js", "Express.js",
  "FastAPI", "Flask", "Tailwind CSS", "Machine Learning", "Deep Learning",
  "Computer Vision", "NLP", "LangGraph", "Gemini API", "Scikit-Learn",
  "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI",
  "Excel", "MongoDB Atlas", "Streamlit", "Git & GitHub", "Vercel", "Render"
];

export const projects = [
  {
    id: 1,
    slug: "deepfake-detector",
    title: "Deepfake Detector",
    subtitle: "Explainable Deepfake Detection System",
    category: "AI & Computer Vision",
    tagline: "AI-powered image authenticity verification with plain-language explanations",
    description: "Built a full-stack deepfake image detection web application using React, Node.js, and Python. Integrated a custom Xception CNN model that analyzes photos to highlight specific signs of manipulation, paired with an AI chatbot that explains technical details in simple language.",
    problem: "As synthetic media proliferates, non-technical users need accessible tools to check image authenticity without relying on opaque predictions.",
    solution: "Integrated an Xception-based deep learning model with visual region highlighting and an AI explanation chatbot that translates model outputs into clear summaries.",
    tech: ["React.js", "Node.js", "Python", "Xception CNN", "AI Chatbot", "Tailwind CSS"],
    liveDemo: "https://madhavan-366.github.io/deepfake-detector-app/",
    github: "https://github.com/madhavan-366",
    features: [
      "Custom Xception CNN model for deepfake image detection",
      "Visual heatmap highlighting potentially manipulated regions",
      "AI chatbot explaining technical findings in plain language",
      "Full-stack React, Node.js, and Python architecture"
    ],
    architecture: "React Frontend → Node.js Backend → Python Model Service (Xception CNN) → AI Explanation Chatbot",
    color: "from-[#C49A6C] to-[#8F6339]",
    badge: "AI / Computer Vision"
  },
  {
    id: 2,
    slug: "ltv-predictor",
    title: "LTV Predictor",
    subtitle: "Customer Lifetime Value Prediction App",
    category: "Machine Learning & Analytics",
    tagline: "Predictive customer scoring and RFM segmentation dashboard",
    description: "Built an interactive customer lifetime value prediction application using Python and Streamlit that forecasts CLV from raw transactional data. Integrated automated RFM (Recency, Frequency, Monetary) analysis and multi-currency adjustments to organize customers into actionable High, Mid, and Low tiers.",
    problem: "Businesses struggle to identify their most valuable customer segments and allocate marketing budgets effectively from raw transaction logs.",
    solution: "Automated RFM feature engineering and multi-currency normalization in Python, feeding an ML scoring model surfaced through an interactive Streamlit dashboard.",
    tech: ["Python", "Streamlit", "Machine Learning", "RFM Analysis", "Pandas", "NumPy", "Data Analytics"],
    liveDemo: "https://customer-ltv-prediction-project-bpqvpimbborsioqfrskaxb.streamlit.app/",
    github: "https://github.com/madhavan-366",
    features: [
      "Automated RFM (Recency, Frequency, Monetary) analysis",
      "Multi-currency adjustments for transactional datasets",
      "Interactive Streamlit dashboard with High, Mid, and Low segments",
      "ML model predicting customer lifetime value from raw transaction data"
    ],
    architecture: "Raw Transaction Data → Automated RFM & Currency Processing → ML Scoring Model → Interactive Streamlit Dashboard",
    color: "from-[#D4AD83] to-[#C49A6C]",
    badge: "Data Science / ML"
  },
  {
    id: 3,
    slug: "go-plan",
    title: "Go Plan",
    subtitle: "AI Travel Planner Agent",
    category: "Generative AI & LLMs",
    tagline: "Multi-modal travel itinerary planning with LangGraph and Gemini",
    description: "Developed an AI-powered travel planning platform using LangGraph and the Gemini API. Generates personalized itineraries tailored to user preferences, budget, and travel style across flights, trains, and road options, and stores itineraries in MongoDB Atlas.",
    problem: "Coordinating travel options, budgets, and daily schedules across multiple tools is fragmented and time-consuming.",
    solution: "Built a stateful LangGraph agent workflow backed by Express and FastAPI services that generates structured multi-modal itineraries and persists them in MongoDB Atlas.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Python", "FastAPI", "LangGraph", "Gemini API"],
    liveDemo: "https://travel-planner-agent-seven.vercel.app/",
    github: "https://github.com/madhavan-366",
    features: [
      "LangGraph-powered AI agent with multi-step reasoning",
      "Gemini API integration for natural language itinerary generation",
      "Multi-modal transport support: flights, trains, and road trips",
      "MongoDB Atlas integration for persistent itinerary storage"
    ],
    architecture: "React Web App → Express & FastAPI Backends → LangGraph Agent (Gemini API) → MongoDB Atlas",
    color: "from-[#C49A6C] to-[#40332A]",
    badge: "Generative AI / LLM"
  }
];

export const experience = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    period: "22 Sep 2025 – 08 Nov 2025",
    type: "Remote Internship · Best Performer",
    summary: "Completed a Data Analyst Internship at Elevate Labs (recognized as Best Performer), contributing to real-world data projects using Python, SQL, and Power BI.",
    contributions: [
      "Applied Python and SQL for end-to-end data cleaning, preprocessing, and exploratory analysis.",
      "Designed and published dynamic, interactive dashboards in Power BI to visualize key metrics.",
      "Extracted actionable insights from structured datasets to support analytical reporting and organizational strategy."
    ],
    skills: ["Python", "SQL", "Power BI", "Data Cleaning", "Data Analysis", "Dashboard Development", "Business Insights"],
    certFile: "/internship/internship-certificate.pdf"
  }
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn SkillUP",
    category: "AI & Machine Learning",
    date: "Aug 2024",
    skillsCovered: "Foundational artificial intelligence concepts, machine learning basics, and core AI workflows.",
    file: "intro-ai-simplilearn.pdf"
  },
  {
    id: 2,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata · Forage",
    category: "Business Intelligence",
    date: "Oct 2025",
    skillsCovered: "Framing business scenarios, choosing and creating effective visuals, and communicating analytical insights.",
    file: "tata-data-viz-forage.pdf"
  },
  {
    id: 3,
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    category: "Data Analytics",
    date: "Oct 2025",
    skillsCovered: "Practical tasks in data analysis and forensic technology examination.",
    file: "deloitte-analytics-forage.pdf"
  },
  {
    id: 4,
    title: "Digital Skills: Data Analysis & Storytelling",
    issuer: "Springpod · Amazon",
    category: "Analytics & Storytelling",
    date: "Oct 2025",
    skillsCovered: "Data analysis and storytelling in partnership with Amazon (Springpod career experience).",
    file: "digital-skills-springpod.pdf"
  },
  {
    id: 5,
    title: "Research Methods in Health Promotion",
    issuer: "NPTEL · IIT Kharagpur",
    category: "Elite · 86%",
    date: "Jul–Oct 2025",
    skillsCovered: "12-week NPTEL Elite certification covering structured research methodology and study design (Score: 86%).",
    file: "research-method-nptel.pdf"
  },
  {
    id: 6,
    title: "Entrepreneurship Essentials",
    issuer: "NPTEL · IIT Kharagpur",
    category: "Elite · 67%",
    date: "Jan–Apr 2026",
    skillsCovered: "12-week NPTEL Elite certification covering entrepreneurship fundamentals and venture planning (Score: 67%).",
    file: "entrepreneurship-nptel.pdf"
  }
];

export const events = [
  {
    id: 1,
    title: "Agentic AI Day",
    organizer: "Google Cloud · Hack2skill",
    badge: "Certificate of Participation",
    date: "2025",
    description: "Submitted an innovative Agentic AI idea for Google Cloud Agentic AI Day, powered by Hack2skill.",
    file: "ai-agentic-hackathon.pdf"
  },
  {
    id: 2,
    title: "Solution Challenge",
    organizer: "Google Developer Student Clubs",
    badge: "Participation",
    date: null,
    description: "Participated in the Solution Challenge, collaborating on technology-driven problem solving.",
    file: null
  },
  {
    id: 3,
    title: "Trend. Set. Go. Challenge",
    organizer: "Myntra · Unstop",
    badge: "Certificate of Participation",
    date: null,
    description: "Participated in the Trend. Set. Go. Challenge hosted by Myntra on Unstop.",
    file: "trend-set-go-unstop.pdf"
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "academics", label: "Academics" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" }
];

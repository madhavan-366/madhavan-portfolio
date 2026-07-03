export const personalInfo = {
  name: "Madhavan K M",
  title: "AI/ML Engineer & Data Analyst",
  location: "Chennai, India",
  phone: "7358618233",
  email: "madhavankm2006@gmail.com",
  linkedin: "https://linkedin.com/in/madhavankm366",
  github: "https://github.com/madhavan-366",
  instagram: "https://www.instagram.com/_.__maddyyy_.__/",
  bio: "Motivated and detail-oriented B.Tech student specializing in Artificial Intelligence and Data Science, passionate about solving real-world problems through AI, Machine Learning, and Data Analytics. Interested in building intelligent applications, data-driven solutions, and modern full-stack systems.",
  goal: "Become an AI/ML Engineer and Data Analyst while continuously learning emerging technologies.",
  typingStrings: [
    "Building AI Solutions",
    "Machine Learning Enthusiast",
    "Data Analyst",
    "Full Stack Developer",
    "Problem Solver",
  ]
};

export const education = [
  {
    id: 1,
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Rajalakshmi Institute of Technology",
    period: "2023 – 2027",
    score: "8.35 CGPA",
    scoreLabel: "CGPA",
    icon: "🎓",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    degree: "Higher Secondary Education (HSC)",
    institution: "Brotherhood Matric Hr Sec School",
    period: "2022 – 2023",
    score: "90.3%",
    scoreLabel: "Percentage",
    icon: "🏫",
    color: "from-cyan-500 to-blue-600",
  }
];

export const skills = {
  programming: {
    label: "Programming",
    color: "indigo",
    icon: "💻",
    items: ["Python", "SQL", "JavaScript"]
  },
  frontend: {
    label: "Frontend",
    color: "cyan",
    icon: "🎨",
    items: ["React.js", "Tailwind CSS"]
  },
  backend: {
    label: "Backend",
    color: "blue",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Flask", "FastAPI"]
  },
  aiml: {
    label: "AI / ML",
    color: "purple",
    icon: "🧠",
    items: ["Machine Learning", "Deep Learning", "NLP", "RAG"]
  },
  database: {
    label: "Database",
    color: "emerald",
    icon: "🗄️",
    items: ["MongoDB", "MySQL"]
  },
  analytics: {
    label: "Analytics",
    color: "amber",
    icon: "📊",
    items: ["Power BI", "Excel"]
  },
  deployment: {
    label: "Deployment & Tools",
    color: "violet",
    icon: "🚀",
    items: ["Git", "GitHub", "Vercel", "Render", "Streamlit"]
  }
};

export const alsoFamiliar = [
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn",
  "HTML5", "CSS3", "REST APIs", "JSON", "Postman", "VS Code", "Vite",
  "TensorFlow", "Keras", "Jupyter"
];

export const projects = [
  {
    id: 1,
    title: "Deepfake Detector",
    subtitle: "Explainable Deepfake Detection System",
    tagline: "AI-powered image authenticity verification",
    description: "Built a full-stack deepfake image detection application using React, Node.js, and Python. Integrated a custom Xception AI model that analyzes photos to highlight specific signs of manipulation. Features an AI chatbot that explains technical details in simple language, making image verification accessible to everyone.",
    problem: "As synthetic media proliferates, people need reliable tools to verify image authenticity without needing deep technical knowledge.",
    tech: ["React", "Node.js", "Python", "Xception", "AI Chatbot"],
    liveDemo: "https://madhavan-366.github.io/deepfake-detector-app/",
    github: "https://github.com/madhavan-366",
    features: [
      "Custom Xception CNN model for deepfake detection",
      "Visual heatmap highlighting manipulated regions",
      "AI chatbot for plain-language explanations",
      "Full-stack React + Node.js architecture"
    ],
    color: "from-blue-500 to-indigo-600",
    titleGradient: "from-blue-400 to-indigo-400",
    glowColor: "blue",
    badge: "AI / Computer Vision",
    icon: "🔍"
  },
  {
    id: 2,
    title: "LTV Predictor",
    subtitle: "Customer Lifetime Value Prediction App",
    tagline: "ML-powered business intelligence platform",
    description: "Built using Python and Streamlit, this app predicts Customer Lifetime Value from raw transactional data. Integrated automated RFM analysis and multi-currency adjustments to engineer robust features for scoring. Features an interactive dashboard with actionable customer segments for data-driven marketing decisions.",
    problem: "Businesses struggle to identify their most valuable customers and allocate marketing budgets effectively without predictive analytics tools.",
    tech: ["Python", "Streamlit", "Machine Learning", "RFM Analysis", "Data Analytics"],
    liveDemo: "https://customer-ltv-prediction-project-bpqvpimbborsioqfrskaxb.streamlit.app/",
    github: "https://github.com/madhavan-366",
    features: [
      "Automated RFM (Recency, Frequency, Monetary) analysis",
      "Multi-currency support for global businesses",
      "Interactive dashboard with customer segments",
      "ML model predicting CLV from raw transaction data"
    ],
    color: "from-purple-500 to-fuchsia-600",
    titleGradient: "from-purple-400 to-fuchsia-400",
    glowColor: "purple",
    badge: "Data Science / ML",
    icon: "📊"
  },
  {
    id: 3,
    title: "Go Plan",
    subtitle: "AI Travel Planner Agent",
    tagline: "Intelligent multi-modal travel planning",
    description: "Developed an AI-powered travel planning platform using LangGraph and Gemini AI. Generates personalized itineraries considering user preferences, budget, and travel style. Supports flights, trains, and road travel options. Stores itineraries securely in MongoDB Atlas for future reference.",
    problem: "Fragmented travel planning across multiple platforms wastes hours of research. This AI agent consolidates everything into one seamless, personalized experience.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Python", "FastAPI", "LangGraph", "Gemini API"],
    liveDemo: "https://travel-planner-agent-seven.vercel.app/",
    github: "https://github.com/madhavan-366",
    features: [
      "LangGraph-powered AI agent with multi-step reasoning",
      "Gemini AI for natural language itinerary generation",
      "Multi-modal transport: flights, trains, road trips",
      "MongoDB Atlas for persistent itinerary storage"
    ],
    color: "from-cyan-500 to-teal-600",
    titleGradient: "from-cyan-400 to-teal-400",
    glowColor: "cyan",
    badge: "Generative AI / LLM",
    icon: "✈️"
  }
];

export const experience = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    period: "Sep 2025 – Nov 2025",
    type: "Remote Internship",
    description: "Completed a Data Analyst Internship at Elevate Labs, contributing to real-world projects with analytical precision. Applied Python and SQL for end-to-end data cleaning and analysis, while designing and publishing dynamic dashboards in Power BI. Focused on extracting actionable insights to deliver solutions that enhanced organizational strategy.",
    skills: ["Python", "SQL", "Power BI", "Data Cleaning", "Data Analysis", "Dashboard Development", "Business Insights"],
    color: "from-indigo-500 to-purple-600",
    certFile: "/internship/internship-certificate.pdf"
  }
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "Aug 2024",
    color: "from-indigo-500 to-purple-600",
    icon: "🤖",
    file: "intro-ai-simplilearn.pdf"
  },
  {
    id: 2,
    title: "Tata Data Visualization",
    issuer: "Forage",
    date: "Oct 2025",
    color: "from-cyan-500 to-blue-600",
    icon: "🎨",
    file: "tata-data-viz-forage.pdf"
  },
  {
    id: 3,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
    color: "from-green-500 to-teal-600",
    icon: "💼",
    file: "deloitte-analytics-forage.pdf"
  },
  {
    id: 4,
    title: "Digital Skills: Data Analytics & Storytelling",
    issuer: "Springpod",
    date: "2024",
    color: "from-violet-500 to-purple-600",
    icon: "📖",
    file: "digital-skills-springpod.pdf"
  },
  {
    id: 5,
    title: "Research Method in Health Promotion",
    issuer: "NPTEL",
    date: "2024",
    color: "from-teal-500 to-green-600",
    icon: "🔬",
    file: "research-method-nptel.pdf"
  },
  {
    id: 6,
    title: "Entrepreneurship Essentials",
    issuer: "NPTEL",
    date: "2024",
    color: "from-amber-500 to-orange-600",
    icon: "💡",
    file: "entrepreneurship-nptel.pdf"
  }
];

export const events = [
  {
    id: 1,
    title: "AI Agentic Hackathon",
    badge: "Participation",
    icon: "🤖",
    color: "from-indigo-500 to-purple-600",
    file: "ai-agentic-hackathon.pdf"
  },
  {
    id: 2,
    title: "Solution Challenge",
    badge: "Participation",
    icon: "💡",
    color: "from-cyan-500 to-blue-600",
    file: "solution-challenge.pdf"
  },
  {
    id: 3,
    title: "Trend Set Go",
    subtitle: "Unstop",
    badge: "Participation",
    icon: "🏆",
    color: "from-pink-500 to-rose-600",
    file: "trend-set-go-unstop.pdf"
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "academics", label: "Academics" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "events", label: "Events" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

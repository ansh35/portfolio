export interface Skill {
  name: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  problem: string
  solution: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
  demoUrl?: string
  features: string[]
  contribution: string
  imageUrl: string
}

export interface Experience {
  role: string
  company: string
  type?: string
  duration: string
  highlights: string[]
  certificateUrl?: string
}

export interface Certification {
  title: string
  issuer: string
  certificateUrl?: string
}

export const portfolioData = {
  personalInfo: {
    name: "Ansh Khare",
    email: "khareansh075@gmail.com",
    phone: "+91-9343984204",
    linkedin: "https://www.linkedin.com/in/ansh-khare-4019a53aa/",
    github: "https://github.com/ansh35",
    resumeUrl: "https://drive.google.com/file/d/1ThxeINzxiL7CwFC6hfQqpWlLhqA9aU-4/view?usp=sharing",
    roles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Next.js Developer",
      "AI Application Developer",
      "Backend Developer",
      "Problem Solver"
    ],
    heroTagline: "Building Intelligent Web Experiences.",
    heroSubtitle: "From Idea To Deployment.",
    bio: "Building scalable web applications with a focus on AI integration, backend API development, and modern frontend engineering. I bring a product-focused mindset to every project, ensuring high performance and seamless user experiences."
  },

  aboutCards: [
    {
      title: "Full Stack Development",
      tech: ["Next.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend & Real-Time",
      tech: ["REST APIs", "Pusher WebSockets", "NextAuth.js", "Zod", "JWT"]
    },
    {
      title: "Databases & ORM",
      tech: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "SQLite"]
    },
    {
      title: "Cloud, DevOps & AI",
      tech: ["Vercel", "Railway", "Render", "Groq SDK", "Git & GitHub"]
    }
  ],

  skillCategories: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React.js", "Tailwind CSS", "Radix UI", "Framer Motion"]
    },
    {
      title: "Backend & Real-Time",
      skills: ["Node.js", "Express.js", "REST APIs", "Pusher WebSockets", "NextAuth.js", "Zod", "JWT"]
    },
    {
      title: "Databases & ORM",
      skills: ["MongoDB", "PostgreSQL", "SQLite", "Prisma", "Mongoose"]
    },
    {
      title: "AI & Cloud/DevOps",
      skills: ["Groq SDK", "Git", "GitHub", "Postman", "Vercel", "Railway", "Render"]
    },
    {
      title: "Security & Concepts",
      skills: ["Role-Based Access Control (RBAC)", "OAuth 2.0", "OWASP Top 10", "Object-Oriented Programming (OOP)"]
    }
  ],

  projects: [
    {
      id: "comment-glow",
      title: "CommentGlow",
      category: "VS Code Extension & Dev Tool",
      description: "An intelligent VS Code extension that highlights TODO, FIXME, Critical, and custom comment markers with rich colors, interactive hovers, and a dedicated Comment Explorer.",
      problem: "Developers often lose track of inline TODOs, bugs, and important notes scattered across large codebases without a structured, visual tracking mechanism.",
      solution: "Provides real-time multi-language syntax parsing, customizable glow markers, rich hover tooltips, and a native Activity Bar explorer for seamless project navigation.",
      tech: ["VS Code API", "JavaScript", "TypeScript", "Node.js", "Regex Engine", "Mocha / Security Tests"],
      githubUrl: "https://github.com/ansh35/CommentGlow",
      liveUrl: "https://marketplace.visualstudio.com/items?itemName=commentglow.commentglow",
      features: [
        "Smart marker highlighting (TODO, FIXME, BUG)",
        "Interactive Activity Bar Comment Explorer",
        "Safe Markdown hover cards & tooltips",
        "Deep customization for markers & colors",
        "Multi-language regex parsing & ReDoS safety",
        "Debounced performance & security hardened"
      ],
      contribution: "Designed and engineered the complete VS Code extension architecture, multi-language comment parser, tree data provider for sidebar navigation, and security-hardened hover card system.",
      imageUrl: "/images/commentglow.png"
    },
    {
      id: "json-iq",
      title: "JSON-IQ",
      category: "AI-Powered JSON Workstation",
      description: "A studio-grade, keyboard-first JSON workstation architected with Next.js 15, TypeScript, and Monaco Editor. Features an Obsidian-styled dark UI with a custom Cmd+K command palette for 100% mouse-free developer operations.",
      problem: "Developers frequently struggle with fragmented tools for inspecting, repairing broken JSON syntax, querying deep payloads, and generating type schemas without security leaks.",
      solution: "Delivers an all-in-one workstation pairing Monaco diff engine syntax repairs, natural language data queries (Cmd+I), multi-target code generation (Zod, TS, Python, Go), and one-click mock HTTP endpoints.",
      tech: ["Next.js 15", "TypeScript", "Monaco Editor", "Tailwind CSS", "Groq SDK", "Zod", "Serverless AI", "Vercel"],
      githubUrl: "https://github.com/ansh35/JSON_IQ",
      liveUrl: "https://json-iq.vercel.app/",
      features: [
        "Keyboard-first workflow & Cmd+K command palette",
        "Natural language data queries (Cmd+I) via Groq",
        "Interactive Monaco Diff engine auto-repair for broken syntax",
        "Multi-target code gen (TypeScript, Zod, Python, Go)",
        "One-click public mock HTTP API endpoints",
        "Client-side secret leak interception regex",
        "JSON Tree Viewer, Formatter, Minifier & Analytics"
      ],
      contribution: "Architected a keyboard-first workstation pairing an Obsidian UI with Cmd+K palette, engineered serverless AI query/repair pipelines with Monaco Diff engine, built multi-target code generation and mock APIs, and hardened edge security.",
      imageUrl: "/images/json-iq.png"
    },
    {
      id: "ai-email-cleaner",
      title: "AI Email Cleaner",
      category: "AI Productivity Tool",
      description: "An intelligent AI-powered email management and inbox cleaner that automatically analyzes, classifies, filters, and summarizes cluttered emails using high-speed LLM inference.",
      problem: "Modern inboxes are overwhelmed with spam, promotional clutter, and newsletters, forcing professionals to waste valuable hours sorting critical communications.",
      solution: "Integrates Groq LPU inference and Google Gemini AI to intelligently classify email priority, isolate unwanted clutter, and generate concise summaries with zero data retention.",
      tech: ["Node.js", "TypeScript", "Groq SDK", "Google Gemini API", "REST APIs", "Security Audited"],
      githubUrl: "https://github.com/ansh35/AI_Email_Cleaner",
      demoUrl: "https://drive.google.com/file/d/1J_q7gsQEIEWfTLsRs7jVTbajLbHDWUpD/view?usp=sharing",
      features: [
        "Multi-LLM inference (Groq & Gemini)",
        "Automated spam & promotional clutter filtering",
        "Smart email summarization & prioritization",
        "Fast batch email processing pipeline",
        "Security-hardened sensitive data handling",
        "Privacy-first architecture"
      ],
      contribution: "Architected the full email analysis pipeline, integrated dual-provider LLM inference (Groq & Gemini), and implemented security standards for sensitive email handling.",
      imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ai-healthcare-crm",
      title: "AI Healthcare CRM Assistant",
      category: "AI Application",
      description: "An AI-powered CRM module for healthcare professionals to log and manage interactions.",
      problem: "Healthcare representatives spend excessive time manually logging interaction notes, often missing key clinical context.",
      solution: "AI-driven logging system that extracts core clinical data and provides context-aware suggestions during interaction entries.",
      tech: ["React", "TypeScript", "FastAPI", "LangChain", "LangGraph", "Groq LLM"],
      githubUrl: "https://github.com/ansh35/ai_first_crm_hcp_module_log_interaction_screen",
      demoUrl: "https://drive.google.com/file/d/1Mug3GnV0eAxMQAr1VFgCsQwdfonFioO7/view?usp=sharing",
      features: ["AI-driven interaction logging", "Context-aware suggestions", "Healthcare clinical data handling"],
      contribution: "Architected the LangChain workflow for clinical data extraction and built the FastAPI backend services.",
      imageUrl: "/images/ai-crm.png"
    }
  ],

  experience: [
    {
      role: "Data & Operations Intern",
      company: "Haldiram's Private Limited",
      duration: "May 2025 – July 2025",
      highlights: [
        "Audited operational data pipelines and standardized digital logging workflows across 10+ daily supply chain systems, eliminating tracking discrepancies.",
        "Automated and digitized operational tracking pipelines using data scripts, eliminating data entry bottlenecks to improve daily workflow turnaround times by 25%."
      ],
      certificateUrl: "https://drive.google.com/file/d/1r4Uz7NVGNusYVoiC_xV16zrpayYRwy1d/view?usp=sharing"
    }
  ] as Experience[],

  certifications: [
    { title: "Infosys TechA Python Foundation", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/1h4MlBfVuki3kD5BTSgEoNZkoP7U2JcFH/view?usp=sharing" },
    { title: "Mastering Git & GitHub Foundation", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/1-TtDOalFmNnL3MOMzZ0d1LhIF9KPKVlp/view?usp=sharing" },
    { title: "Infosys Agile Scrum Certification", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/13eGGs6QWGQiikYMGicS4GdJogTKFGvhL/view?usp=sharing" },
    { title: "Software Engineering Specialization", issuer: "Infosys / Academic", certificateUrl: "https://drive.google.com/drive/folders/13sJ6L_xTy2ay2NnLCBHTl9-epT-dt-DA?usp=sharing" }
  ],
  certificateFolderUrl: "https://drive.google.com/drive/folders/13sJ6L_xTy2ay2NnLCBHTl9-epT-dt-DA?usp=sharing"
}


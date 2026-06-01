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
  type: string
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
    location: "Madhya Pradesh, India",
    email: "khareansh075@gmail.com",
    phone: "+91-9343984204",
    linkedin: "https://www.linkedin.com/in/ansh-khare-4019a53aa/",
    github: "https://github.com/ansh35",
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
      tech: ["React.js", "Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "AI-Powered Applications",
      tech: ["LangChain", "LangGraph", "Groq LLM"]
    },
    {
      title: "Cloud Deployment",
      tech: ["Vercel", "Render", "Railway", "Nextify"]
    },
    {
      title: "Backend Engineering",
      tech: ["REST APIs", "JWT Authentication", "MVC Architecture"]
    }
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "C++", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "SQL"]
    },
    {
      title: "AI & Automation",
      skills: ["LangChain", "LangGraph", "Groq LLM"]
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Render", "Railway", "Nextify"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Axios"]
    }
  ],

  projects: [
    {
      id: "workzen",
      title: "WorkZen",
      category: "Full Stack Application",
      description: "A collaborative workspace and task management platform built with the MERN stack.",
      problem: "Teams often struggle with fragmented communication and disorganized task tracking across multiple tools.",
      solution: "Centralized workspace providing real-time collaboration, structured task tracking, and integrated team management in one unified platform.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/ansh35/Workzen",
      liveUrl: "https://workzen-navy.vercel.app/",
      features: ["Real-time collaboration", "Task tracking", "Team management", "Secure JWT authentication"],
      contribution: "Developed the core MERN architecture, implemented secure authentication, and designed the responsive frontend components.",
      imageUrl: "/images/workzen.png"
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
      imageUrl: "/images/ai-crm.png?v=2"
    },
    {
      id: "sign-decoder",
      title: "Sign Decoder",
      category: "Recognition System",
      description: "A specialized tool for decoding and interpreting various sign systems.",
      problem: "Communication barriers exist for those unfamiliar with sign systems, requiring an automated interpretation tool for better accessibility.",
      solution: "Leverages computer vision techniques to identify and decode sign systems in real-time, providing immediate text-based translations.",
      tech: ["React", "AI/ML", "Computer Vision"],
      githubUrl: "https://github.com/ansh35/Sign_decoder",
      features: ["Real-time sign recognition", "High accuracy decoding", "Intuitive user interface"],
      contribution: "Explored AI/ML models for sign recognition and developed the React-based visual feedback interface.",
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "emotion-detection",
      title: "Emotion Detection Using Keystroke Dynamics",
      category: "Backend Engineering",
      description: "Contributed to backend development for an emotion detection system based on keystroke dynamics.",
      problem: "Detecting user emotions usually requires invasive biometric sensors or camera-based analysis, which compromises privacy.",
      solution: "Non-invasive detection system that analyzes keystroke timing and patterns to identify emotional states with high accuracy.",
      tech: ["FastAPI", "Node.js", "Data Processing", "API Design"],
      githubUrl: "https://github.com/ansh35/emotion-detection-using-keystrokes-dynamics",
      features: ["API Development", "Request Handling", "Backend Services", "Data Processing", "System Integration"],
      contribution: "Worked on API development, request handling, backend services, and data processing for system integration.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    }
  ],

  experience: [
    {
      role: "Developer Intern",
      company: "Haldiram's Private Limited",
      type: "Remote Internship",
      duration: "May 2025 - July 2025",
      highlights: [
        "Backend API Integration",
        "Request Handling",
        "Server-Side Business Logic",
        "Git/GitHub Collaboration",
        "Agile Workflow Experience"
      ],
      certificateUrl: "https://drive.google.com/file/d/1r4Uz7NVGNusYVoiC_xV16zrpayYRwy1d/view?usp=sharing"
    }
  ],

  certifications: [
    { title: "Infosys TechA Python Foundation", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/1h4MlBfVuki3kD5BTSgEoNZkoP7U2JcFH/view?usp=sharing" },
    { title: "Infosys GitHub Foundation", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/1-TtDOalFmNnL3MOMzZ0d1LhIF9KPKVlp/view?usp=sharing" },
    { title: "Infosys Agile Scrum Certification", issuer: "Infosys", certificateUrl: "https://drive.google.com/file/d/13eGGs6QWGQiikYMGicS4GdJogTKFGvhL/view?usp=sharing" }
  ],
  certificateFolderUrl: "https://drive.google.com/drive/folders/13sJ6L_xTy2ay2NnLCBHTl9-epT-dt-DA?usp=sharing"
}


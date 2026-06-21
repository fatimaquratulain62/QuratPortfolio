import { PersonalInfo, AboutMe, SkillCategory, Project, ExperienceItem, EducationItem, Certification, Achievement, Service, Testimonial, Blog } from "@/types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Qurat-ul-Ain Fatima",
  role: "Flutter Developer | Full-Stack Developer | Software Engineering Student",
  bio: "Building beautiful, scalable, and user-focused applications. I specialize in Flutter, Firebase, and modern web technologies.",
  location: "Gujrat, Pakistan",
  email: "quratulain2405qz@gmail.com",
  phone: "03251021060",
  resumeUrl: "/assets/cv.pdf",
  image: "/assets/profile.png",
  socials: {
    github: "https://github.com/fatimaquratulain62",
    linkedin: "https://linkedin.com/in/quratulain-fatimaa",
    email: "mailto:quratulain2405qz@gmail.com",
  }
};

export const ABOUT_ME: AboutMe = {
  journey: "I'm a Software Engineering student passionate about Flutter, Firebase, AI-powered applications, and modern web technologies. I enjoy solving real-world problems through clean, maintainable code.",
  interests: "Mobile App Development, UI/UX Design, Artificial Intelligence, Open Source Contributing.",
  goals: "To become a Lead Mobile Engineer and build AI-driven applications that impact millions of users globally."
};

export const SKILLS: SkillCategory[] = [
  { category: "Languages", items: [{ name: "Dart", level: 90 }, { name: "JavaScript", level: 85 }, { name: "TypeScript", level: 80 }, { name: "Python", level: 75 }, { name: "C++", level: 70 }] },
  { category: "Frameworks", items: [{ name: "Flutter", level: 95 }, { name: "Next.js", level: 85 }, { name: "React", level: 85 }, { name: "Node.js", level: 80 }] },
  { category: "Backend", items: [{ name: "Firebase", level: 90 }, { name: "REST APIs", level: 85 }, { name: "Express.js", level: 75 }] },
  { category: "Database", items: [{ name: "Firestore", level: 90 }, { name: "SQLite", level: 80 }, { name: "MySQL", level: 75 }, { name: "MongoDB", level: 70 }] },
  { category: "Tools", items: [{ name: "Git", level: 90 }, { name: "GitHub", level: 90 }, { name: "VS Code", level: 95 }, { name: "Android Studio", level: 90 }, { name: "Figma", level: 85 }] },
];

export const PROJECTS: Project[] = [
  {
    title: "JobApplier AI",
    description: "An AI-powered job search agent platform that assists users in finding jobs and building tailored resumes automatically.",
    image: "/assets/job.jpeg",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    tags: ["Web", "AI"],
    features: ["AI Resume Builder", "Auto Job Matching", "Dark Mode UI"],
    github: "https://github.com/fatimaquratulain62/JobApplierSaaS",
    // demo: "#",
  },
  {
    title: "Budget Tracker App",
    description: "A clean, intuitive budget tracking application to monitor spending, update budgets, and categorize expenses with clarity.",
    image: "/assets/budget.jpeg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["Web"],
    features: ["Visual Charts", "Category Management", "Secure Auth"],
    github: "https://github.com/fatimaquratulain62/expense",
    // demo: "#",
  },
  {
    title: "NearHelp Services",
    description: "A mobile application to find local services near you, featuring a seamless onboarding and authentication flow including Google Sign-In.",
    image: "/assets/nearhelp.jpeg",
    tech: ["Flutter", "Firebase", "Google Auth"],
    tags: ["Flutter", "Firebase"],
    features: ["Geo-location", "Google Auth", "Real-time Chat"],
    github: "https://github.com/fatimaquratulain62/nearHelpService",
    // demo: "#",
  },
  {
    title: "E-Commerce Shop UI",
    description: "A modern e-commerce mobile interface showcasing categorized product browsing with an elegant and minimalistic design.",
    image: "/assets/ba.jpeg",
    tech: ["Flutter", "Redux", "Stripe API"],
    tags: ["Flutter"],
    features: ["Smooth Animations", "Cart Management", "Stripe Payments"],
    github: "https://github.com/fatimaquratulain62/bags",
    // demo: "#",
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  { role: "Flutter Developer ",  duration: "Present", description: "Developed cross-platform mobile applications with seamless UI and robust Firebase backend integration." },
  { role: "Tech Club Lead", company: "Software Engineering University of Gujrat Tech Club", duration: "2024 - 2026", description: "Led a team of 5 designers to organize university hackathons and events." },
];

export const EDUCATION: EducationItem[] = [
  { degree: "BS Software Engineering", institution: "University of Gujrat", duration: "2023 - 2027 (Expected)", details: "GPA: 3.91/4.0. Relevant Coursework: Data Structures, OOP, Database Systems, Software Design." },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Inovent-Innovation & Entrepreneurship Event", issuer: "University of Gujrat", year: "2024" }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Winner - University Requirement Engineering Hackathon 2025", description: "1st place for building an AI-driven disaster management app." },
  { title: "Certificate of Appreciation by Student Service Centre", description: "Successfully organized the event." },
  { title: "Winner - University Requirement Engineering Competition 2025", description: "1st place out of 30 teams for requirement engineering and designing." },
];

export const SERVICES: Service[] = [
  { title: "Flutter App Development", icon: "FaMobile", description: "Cross-platform iOS & Android apps with native performance." },
  { title: "Web Development", icon: "FaLaptop", description: "Responsive websites with modern design and functionality." },
  { title: "UI Implementation", icon: "FaPaintBrush", description: "Converting Figma designs into pixel-perfect, animated UI." },
  { title: "Firebase Integration", icon: "FaDatabase", description: "Real-time databases, authentication, and cloud functions." },
];

// Exporting empty arrays so the website doesn't crash if you want to keep them hidden
export const TESTIMONIALS: Testimonial[] = [];
export const BLOGS: Blog[] = [];

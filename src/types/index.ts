export interface Socials {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  image: string;
  socials: Socials;
}

export interface AboutMe {
  journey: string;
  interests: string;
  goals: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  tags: string[];
  features: string[];
  github: string;
  demo?: string; // Optional because you commented it out
}

export interface ExperienceItem {
  role: string;
  company?: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Blog {
  title: string;
  image: string;
  date: string;
  excerpt: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / NLP' | 'Machine Learning' | 'Computer Vision';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focusAreas: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  role?: string;
  period?: string;
  description: string;
  tag: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

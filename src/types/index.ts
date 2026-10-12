export type ProjectCategory = 'All' | 'Flutter' | 'Web' | 'UI/UX' | 'Other';

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectCaseStudy {
  overview: string;
  myRole: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureHighlights?: string[];
  screenshots: ProjectScreenshot[];
  challenges: string[];
  whatILearned: string[];
  futureImprovements: string[];
  isPlaceholderData?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Flutter' | 'Web' | 'UI/UX' | 'Other';
  categories?: ('Flutter' | 'Web' | 'UI/UX' | 'Other')[];
  subtitle: string;
  shortDescription: string;
  featured: boolean;
  heroImage?: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  videoDemoUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText?: string;
  date?: string;
  duration?: string;
  image: string;
  description: string;
  credentialUrl?: string;
  skillsLearned: string[];
}

export interface SkillItem {
  name: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  institutionArabic?: string;
  faculty: string;
  degreeStatus: string; // Strictly "Computer Science Student", NOT "Bachelor's Degree"
  years: string;
  location: string;
  description: string;
  coreFoundations: string[];
}

export interface SocialLinks {
  name: string;
  title: string;
  email: string;
  github: string;
  currentPortfolio: string;
  linkedin: string;
  linkedinIsPlaceholder: boolean;
  whatsappPlaceholder: string;
  cvPath: string;
}

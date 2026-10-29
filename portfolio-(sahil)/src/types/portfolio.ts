export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  subRole: string;
  intro: string;
  bio: string;
  dob?: string;
  branch?: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  status: string;
  stats: {
    projectsCount: string;
    dsaProblemsCount: string;
    technologiesCount: string;
    certificationsCount: string;
  };
}

export interface WhatIDoItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  problemSolved: string;
  solution: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'AI / Deep Learning' | 'All' | string;
  imageGradient: string;
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  details: {
    overview: string;
    keyFeatures: string[];
    architecture: string;
    challenges: string;
    whatILearned: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  duration: string;
  gpa: string;
  relevantCoursework: string[];
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  highlight?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  organizer: string;
  type: 'Workshop' | 'Seminar';
  description: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  type: 'Leadership' | 'Co-Curricular' | 'Sports';
}

export interface CodingProfileItem {
  id: string;
  platform: string;
  username: string;
  profileUrl: string;
  stat: string;
  description: string;
  badge?: string;
}

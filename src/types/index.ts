export interface Project {
  title: string;
  description: string;
  preview: string;
  github?: string;
  website?: string;
  technologies?: string[];
}

export interface ProjectCategory {
  category: string;
  projects: Project[];
}

export interface ProjectsData {
  categories: ProjectCategory[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

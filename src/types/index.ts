export interface PersonalInfo {
  name: string;
  tagline: string;
  overview: string;
  photoUrl: string;
  cvUrl: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  name: string;
  githubUrl: string;
  images: string[];
  techStack: string[];
  description: string;
}

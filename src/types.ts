export type PortfolioData = {
  personal: personalInfo;
  social: Record<string, string>;
  technologies: Technology[];
  projects: Project[];
  about: About;
  contact: Contact[];
  stats: Record<string, string>;
};

export type Project = {
  name: string;
  filename: string;
  description: string;
  technologies: string[];
  metrics?: string;
  type: "Professional" | "Freelance";
};

export type Section<T> = {
  title?: string;
  content?: T;
  icon: string;
  iconClassName: string;
};

export type About = {
  developer: Section<string[]>;
  philosophy: Section<string[]>;
};

export type Developer = {
  name: string;
  title: string;
};

export type personalInfo = {
  name: string;
  title: string;
  location: string;
  email: string;
  responseTime: string;
  experience: string;
  status: string;
};

export type Contact = {
  title: string;
  description: string;
  value: string;
  href: string;
  icon: string;
  color: string;
};

export type Technology = {
  name: string;
  color: string;
  icon: string;
};

export type Interest = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type ContactMethod = {
  title: string;
  description: string;
  value: string;
  href: string;
  icon: string;
  color: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type BlogTopic = {
  title: string;
  description: string;
  icon: string;
};

export type TimelineItem = {
  task: string;
  status: "completed" | "in-progress" | "coming-soon";
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  metrics?: string;
  type: "Professional" | "Freelance";
};

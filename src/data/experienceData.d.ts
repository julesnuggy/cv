export type ExperienceData = {
  employer: string;
  from: string;
  to: number | string;
  location: string;
  summary: string;
  projects: ProjectData[];
}

type ProjectData = {
  name: string;
  role: string;
  from: number;
  to: number | string;
  techStack: string[];
  description: string;
}
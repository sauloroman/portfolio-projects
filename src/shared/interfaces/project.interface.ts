export interface Project {
  id: string,
  title: string,
  description: string,
  descriptionCard: string,
  githubRepositories: string[],
  categories: string[],
  projectNumber: number,
  url: string,
  images: string[],
  imagesDark: string[],
  video: string,
  databaseDiagram: string[];
  technologies: string[],
  noMobile: boolean,
  isMainProject: boolean
}
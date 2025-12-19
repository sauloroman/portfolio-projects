export interface Project {
  id: string,
  title: string,
  description: string,
  descriptionCard: string,
  githubRepository: string,
  categories: string[],
  projectNumber: number,
  url: string,
  images: string[],
  imagesDark: string[],
  technologies: string[],
  noMobile: boolean,
  isMainProject: boolean
}
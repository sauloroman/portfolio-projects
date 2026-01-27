export const ModalNames = {
  noModal: '',
  contact: 'contact',
  showImage: 'show-image',
  projectVideo: 'projectVideo',
  projectGithubLinks: 'projectGithubLinks',
  projectImage: 'projectImage'
} as const;
export type ModalNames = typeof ModalNames[keyof typeof ModalNames];
export interface Modal {
  isOpen: boolean,
  name: ModalNames,
}

export const ThemeNames = {
  light: 'light',
  dark: 'dark'
} as const
export type ThemeNames = typeof ThemeNames[keyof typeof ThemeNames]

export interface Education {
  name: string,
  image: string,
  career: string,
  specialty: string,
  date: string
}

export interface Job {
  company: string,
  image: string,
  project: string,
  date: string,
  type: string
}

export interface Contact {
  icon: string,
  concept: string,
  value: string,
  message: string,
  link: string
}

export interface ContactFormInfo {
  title: string,
  email: string,
  message: string
}

export type AlertType = 'success' | 'error' | 'warning'
export const AlertType = {
    success: 'success' as AlertType,
    error: 'error' as AlertType,
    warning: 'warning' as AlertType,
}
export interface Alert {
    isOpen: boolean,
    type: AlertType,
    title: string,
    text: string
}

export interface NavItem {
  label: string
  href: string
  icon: string
}

export const filters: string[] = ['FrontEnd', 'BackEnd', 'FullStack', 'Desktop', 'All']

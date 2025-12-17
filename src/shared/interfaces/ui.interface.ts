export const ModalNames = {
  noModal: '',
  contact: 'contact',
  showImage: 'show-image'
} as const;

export type ModalNames = typeof ModalNames[keyof typeof ModalNames];

export interface Modal {
  isOpen: boolean,
  name: ModalNames,
}

export interface Education {
  name: string,
  image: string,
  career: string,
  specialty: string,
  date: string
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
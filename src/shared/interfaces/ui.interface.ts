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

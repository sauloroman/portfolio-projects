import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const ModalNames = {
  noModal: '',
  contact: 'contact',
  showImage: 'show-image'
} as const;

export type ModalNames = typeof ModalNames[keyof typeof ModalNames];

interface Modal {
  isOpen: boolean,
  name: ModalNames,
}

interface InitialStateUI {
  modal: Modal
}

const initialState: InitialStateUI = {
  modal: {
    isOpen: false,
    name: ModalNames.noModal
  }
}

export const uiSlice = createSlice({
  initialState: initialState,
  name: 'ui',
  reducers: {

    openModal: ( state, { payload }: PayloadAction<ModalNames> ) => {
      state.modal.isOpen = true
      state.modal.name = payload
    },

    closeModal: ( state ) => {
      state.modal.isOpen = false
      state.modal.name = ModalNames.noModal
    }

  }
})

export const {
  openModal,
  closeModal,
} = uiSlice.actions
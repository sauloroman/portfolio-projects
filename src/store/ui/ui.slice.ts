import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ModalNames, type Modal } from "../../shared/interfaces/ui.interface";

interface InitialStateUI {
  modal: Modal,
  imageSelected: string | null,
}

const initialState: InitialStateUI = {
  modal: {
    isOpen: false,
    name: ModalNames.noModal
  },
  imageSelected: null,
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
    },

    setImageSelected: ( state, { payload }: PayloadAction<string | null> ) => {
      state.imageSelected = payload
    }

  }
})

export const {
  openModal,
  closeModal,
  setImageSelected,
} = uiSlice.actions
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { AlertType, ModalNames, ThemeNames, type Alert, type Modal } from "../../shared/interfaces/ui.interface";

interface InitialStateUI {
  modal: Modal,
  alert: Alert,
  imageSelected: string | null,
  asideMenuOpen: boolean,
  theme: ThemeNames
}

const initialState: InitialStateUI = {
  modal: {
    isOpen: false,
    name: ModalNames.noModal
  },
  alert: {
    isOpen: false,
    text: '',
    title: '',
    type: AlertType.warning
  },
  imageSelected: null,
  asideMenuOpen: false,
  theme: ThemeNames.light
}

export const uiSlice = createSlice({
  initialState: initialState,
  name: 'ui',
  reducers: {

    openModal: (state, { payload }: PayloadAction<ModalNames>) => {
      state.modal.isOpen = true
      state.modal.name = payload
    },

    closeModal: (state) => {
      state.modal.isOpen = false
      state.modal.name = ModalNames.noModal
    },

    setImageSelected: (state, { payload }: PayloadAction<string | null>) => {
      state.imageSelected = payload
    },

    setAsideMenuOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.asideMenuOpen = payload
    },

    setAlert: (state, { payload }: PayloadAction<Alert>) => {
      state.alert = payload
    },

    setTheme: ( state, { payload }: PayloadAction<ThemeNames>) => {
      state.theme = payload
    }

  }
})

export const {
  openModal,
  closeModal,
  setImageSelected,
  setAsideMenuOpen,
  setAlert,
  setTheme
} = uiSlice.actions
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { closeModal, openModal, setAlert, setAsideMenuOpen, setImageSelected, setTheme } from "../store/ui/ui.slice"
import { AlertType, ModalNames, ThemeNames } from "../shared/interfaces/ui.interface"

export const useUI = () => {

  const dispatch = useDispatch<any>()

  const { modal, imageSelected, asideMenuOpen, alert, theme } = useSelector((state: RootState) => state.ui)

  const onOpenModal = (modalName: ModalNames) => {
    dispatch(openModal(modalName))
  }

  const onCloseModal = () => {
    dispatch(closeModal())
    if (imageSelected) dispatch(setImageSelected(null))
  }

  const onWatchImage = (image: string) => {
    dispatch(setImageSelected(image))
    dispatch(openModal(ModalNames.showImage))
  }

  const onRemoveImage = () => {
    dispatch(setImageSelected(null))
    dispatch(closeModal())
  }

  const onOpenAsideMenu = () => {
    dispatch(setAsideMenuOpen(true))
  }

  const onCloseAsideMenu = () => {
    dispatch(setAsideMenuOpen(false))
  }

  const onShowAlert = (title: string, text: string, type: AlertType) => {
    dispatch(setAlert({
      isOpen: true,
      title,
      text,
      type
    }))
  }

  const onCloseAlert = () => {
    dispatch(setAlert({
      isOpen: false,
      title: '',
      text: '',
      type: AlertType.warning
    }))
  }

  const onActiveLightMode = () => {
    dispatch( setTheme( ThemeNames.light ))
    localStorage.setItem('theme-portfolio', 'light')
  }
  
  const onActiveDarkMode = () => {
    dispatch( setTheme( ThemeNames.dark ))
    localStorage.setItem('theme-portfolio', 'dark')
  }

  return {
    modal,
    imageSelected,
    asideMenuOpen,
    alert,
    isDarkMode: theme === ThemeNames.dark,

    onOpenModal,
    onCloseModal,
    onWatchImage,
    onRemoveImage,
    onOpenAsideMenu,
    onCloseAsideMenu,
    onShowAlert,
    onCloseAlert,
    onActiveDarkMode,
    onActiveLightMode
  }

}
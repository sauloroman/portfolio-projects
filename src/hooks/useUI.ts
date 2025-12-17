import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { closeModal, openModal, setAsideMenuOpen, setImageSelected } from "../store/ui/ui.slice"
import { ModalNames } from "../shared/interfaces/ui.interface"

export const useUI = () => {

  const dispatch = useDispatch<any>()

  const { modal, imageSelected, asideMenuOpen } = useSelector( (state: RootState) => state.ui )

  const onOpenModal = ( modalName: ModalNames ) => {
    dispatch( openModal( modalName ) )
  }

  const onCloseModal = () => {
    dispatch( closeModal() )
    if ( imageSelected ) dispatch( setImageSelected(null) )
  }

  const onWatchImage = ( image: string ) => {
    dispatch( setImageSelected( image) )
    dispatch( openModal( ModalNames.showImage ) )
  }

  const onRemoveImage = () => {
    dispatch( setImageSelected( null ) )
    dispatch( closeModal() )
  }

  const onOpenAsideMenu = () => {
    dispatch(setAsideMenuOpen(true))
  }
  
  const onCloseAsideMenu = () => {
    dispatch(setAsideMenuOpen(false))
  }

  return {
    modal,
    imageSelected,
    asideMenuOpen,

    onOpenModal,
    onCloseModal,
    onWatchImage,
    onRemoveImage,
    onOpenAsideMenu,
    onCloseAsideMenu,
  }

}
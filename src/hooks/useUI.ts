import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { closeModal, openModal, setImageSelected } from "../store/ui/ui.slice"
import { ModalNames } from "../shared/interfaces/ui.interface"

export const useUI = () => {

  const dispatch = useDispatch<any>()

  const { modal, imageSelected } = useSelector( (state: RootState) => state.ui )

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

  return {
    modal,
    imageSelected,

    onOpenModal,
    onCloseModal,
    onWatchImage,
    onRemoveImage
  }

}
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { closeModal, openModal, type ModalNames } from "../store/ui/ui.slice"

export const useUI = () => {

  const dispatch = useDispatch<any>()

  const { modal } = useSelector( (state: RootState) => state.ui )

  const onOpenModal = ( modalName: ModalNames ) => {
    dispatch( openModal( modalName ) )
  }

  const onCloseModal = () => {
    dispatch( closeModal() )
  }

  return {
    modal,

    onOpenModal,
    onCloseModal,
  }

}
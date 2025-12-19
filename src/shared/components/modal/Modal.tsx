import React from 'react'
import { MdClose } from "react-icons/md";
import { useUI } from '../../../hooks';

interface ModalProps {
  children: React.ReactNode,
  onCloseFn?: () => void,
  title: string,
}

export const Modal: React.FC<ModalProps> = ({ children, title, onCloseFn = () => {} }) => {
  
  const { onCloseModal } = useUI()

  const closeModal = () => {
    onCloseModal()
    onCloseFn()
  }
  
  return (
    <div className='modal'>
      <div className="modal__container">
        <header className="modal__header">
          <p className='modal__title'>{title}</p>
          <MdClose onClick={ closeModal } className='modal__close' />
        </header>
        { children }
      </div>
    </div>
  )
}

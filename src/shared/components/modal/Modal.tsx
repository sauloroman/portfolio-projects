import React from 'react'
import { MdClose } from "react-icons/md";
import { useUI } from '../../../hooks';

interface ModalProps {
  children: React.ReactNode,
  title: string,
}

export const Modal: React.FC<ModalProps> = ({ children, title }) => {
  
  const { onCloseModal } = useUI()
  
  return (
    <div className='modal'>
      <div className="modal__container">
        <header className="modal__header">
          <p>{title}</p>
          <MdClose onClick={ onCloseModal } className='modal__close' />
        </header>
        { children }
      </div>
    </div>
  )
}

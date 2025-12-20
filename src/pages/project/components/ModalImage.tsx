import React from 'react'
import { Modal } from '../../../shared/components/modal/Modal'
import { useProjects, useUI } from '../../../hooks'

export const ModalImage: React.FC = () => {
  const { imageSelected } = useUI()
  const { projectOnPage } = useProjects()
  if ( !imageSelected || ! projectOnPage) return null
  
  const noMobile = projectOnPage?.noMobile

  return (
    <Modal title='Imagen Seleccionada'>
      <img
        className={`${!noMobile ? 'project-modal__mobile' : 'project-modal__image'}`}
        src={imageSelected}   
        alt="Imagen de proyecto o sistema" 
      />
    </Modal>
  )
}

import React from 'react'
import { Modal } from '../../../shared/components/modal/Modal'
import { useProjects } from '../../../hooks'

interface Props {
    title: string
}

export const ProjectImageModal: React.FC<Props> = ({ title }) => {
    const { projectImage } = useProjects()

    return (
        <Modal width={800} title={title}>
            <img 
                className='project-image-modal'
                src={projectImage ?? ''} 
                alt={title} 
            />
        </Modal>
    )
}

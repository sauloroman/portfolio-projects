import React from 'react'
import { Modal } from '../../../shared/components/modal/Modal'

interface Props {
  video: string
  title: string
}

export const ProjectVideoModal: React.FC<Props> = ({ video, title }) => {        
    return (
        <Modal width={700} title={title}>
            <video 
            loop={true}
            controls={true}
            className='project-content__img' 
            src={video}
            ></video>
        </Modal>
    )
}

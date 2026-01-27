import React from 'react'
import { useProjects, useUI } from '../../../hooks'
import { ModalNames } from '../../../shared/interfaces/ui.interface'

interface Props {
    imageDB: string,
    link: string,
}

export const ProjectDB: React.FC<Props> = ({ imageDB, link }) => {
    const { onSetProjectImage } = useProjects()
    const { onOpenModal } = useUI()

     const onOpenImage = () => {
        onOpenModal(ModalNames.projectImage)
        onSetProjectImage(imageDB)
      }

    return (
        <aside className="project-aside">
            <h3 className='project-aside__title'>Database Design</h3>
            <div className="project-aside__phone">
                <img
                    onClick={onOpenImage}
                    className="project-aside__imgPhone"
                    src={imageDB}
                    alt="Project design phone"
                />
            </div>
            <a target='_blank' className='btn btn--purple project-aside__buttonDB' href={link}>Check Online</a>
        </aside>
    )
}

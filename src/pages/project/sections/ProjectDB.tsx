import React from 'react'
import { useUI } from '../../../hooks'

interface Props {
    imageDB: string,
    link: string,
}

export const ProjectDB: React.FC<Props> = ({ imageDB, link }) => {
    const { onWatchImage } = useUI()
    
    return (
        <aside className="project-aside">
            <h3 className='project-aside__title'>Database Design</h3>
            <div className="project-aside__phone">
                <img
                    onClick={() => onWatchImage(imageDB)}
                    className="project-aside__imgPhone"
                    src={imageDB}
                    alt="Project design phone"
                />
            </div>
            <a target='_blank' className='btn btn--purple project-aside__buttonDB' href={link}>Check Online</a>
        </aside>
    )
}

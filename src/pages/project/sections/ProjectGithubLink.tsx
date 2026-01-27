import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
    link: string,
    title: string
}

export const ProjectGithubLink: React.FC<Props> = ({ link, title }) => {
    return (
        <a href={link} target='_blank' key={link} className="project-github__link">
            <div className='project-github__main'>

                <div className="project-github__content">
                    <div className="project-github__icon">
                        <i className="devicon-github-original project-github__img"></i>
                    </div>
                    <div className="project-github__info">
                        <p className='project-github__title'>{title}</p>
                        <p className='project-github__item'>{link}</p>
                    </div>
                </div>

                <div className='project-github__button'>
                    <FaExternalLinkAlt size={15} />
                </div>
            </div>
        </a>
    )
}

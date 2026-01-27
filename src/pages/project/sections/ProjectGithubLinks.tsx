import React from 'react'
import { Modal } from '../../../shared/components/modal/Modal'
import { ProjectGithubLink } from './ProjectGithubLink';

interface Props {
    title: string,
    links: string[]
}

export const ProjectGithubLinks: React.FC<Props> = ({ title, links }) => {
    return (
        <Modal width={600} title='Enlaces Github'>
            <div className="project-github">
                <p className="project-github__message">Select a repository to open in a new tab</p>

                <ul className="project-github__list">
                    {links.map( link => (
                        <ProjectGithubLink 
                            key={link}
                            link={link}
                            title={title}
                        />
                    ))}
                </ul>
            </div>
        </Modal>
    )
}

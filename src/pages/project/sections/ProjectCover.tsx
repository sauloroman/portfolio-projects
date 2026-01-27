import React from 'react'
import { useUI } from '../../../hooks';
import { ModalNames } from '../../../shared/interfaces/ui.interface';

interface ProjectCoverProps {
    title: string; 
    description: string;  
    url: string;
}

export const ProjectCover: React.FC<ProjectCoverProps> = ({ title, description, url }) => {    
    const { onOpenModal } = useUI()

    return (
        <section className="project-cover">
            <div className="container">
                <div className="project-cover__container">
                    <h1 className='project-cover__title heading-special gradient'>
                        <span className='period period--medium'></span> 
                        {title}
                        <span className='period period--medium'></span> 
                    </h1>
                    <p className='project-cover__desc'>{description}</p>
                    <div className='project-cover__breadcrumb'>
                        <p>Home </p>
                        <p>&rarr;</p>
                        <p>Projects</p>
                        <p>&rarr;</p>
                        <span>{title}</span>
                    </div>
                    <div className="project-cover__buttons">
                        <a target='_blank' onClick={() => onOpenModal(ModalNames.projectVideo)} className='project-cover__link btn btn--purple'><span></span>Video</a>
                        {url && <a target='_blank' href={url} className='project-cover__link btn btn--purple'><span></span>Online</a>}
                        <a target='_blank' onClick={() => onOpenModal(ModalNames.projectGithubLinks)} className='project-cover__link btn btn--purple'><i className="devicon-github-original"></i>GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

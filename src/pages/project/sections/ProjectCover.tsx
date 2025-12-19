import React from 'react'

interface ProjectCoverProps {
    title: string; 
    description: string;  
    github: string;
    url: string;
}

export const ProjectCover: React.FC<ProjectCoverProps> = ({ title, description, github, url }) => {
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
                        <p>Portfolio</p>
                        <p>&rarr;</p>
                        <span>{title}</span>
                    </div>
                    <div className="project-cover__buttons">
                        {
                            url === ''
                            ? (
                                <a target='_blank' className='project-cover__link btn btn--purple'>
                                    <span></span>
                                    Video
                                </a>
                            )
                            : (
                                <a target='_blank' href={url} className='project-cover__link btn btn--purple'>
                                    <span></span>
                                    Online
                                </a>
                            )
                        }
                        <a target='_blank' href={github} className='project-cover__link btn btn--purple'>
                            <i className="devicon-github-original"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

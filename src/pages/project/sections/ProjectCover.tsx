import React from 'react'

interface ProjectCoverProps {
    title: string; 
    description: string;  
}

export const ProjectCover: React.FC<ProjectCoverProps> = ({ title, description }) => {
    return (
        <section className="project-cover">
            <div className="container project-cover__container">
                <h1 className='project-cover__title'>
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
            </div>
        </section>
    )
}

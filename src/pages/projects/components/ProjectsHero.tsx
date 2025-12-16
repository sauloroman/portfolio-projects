import React from 'react'
import { ProjectsTitle } from './ProjectsTitle'

export const ProjectsHero: React.FC = () => {
  return (
    <section className="projects-hero">
        <div className="projects-hero__container container">
            <div className='projects-hero__content'>
                <h1 className='heading-special gradient projects-hero__title'>
                    <ProjectsTitle />
                </h1>
                <p className='projects-hero__text'>Showcasing a selection of the projects I’ve built, combining clean architecture, solid performance, and thoughtful design.</p>
            </div>
        </div>  
    </section>
  )
}

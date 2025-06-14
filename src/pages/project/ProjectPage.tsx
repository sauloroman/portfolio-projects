import React, { useEffect } from 'react'
import { useProjects } from '../../hooks'
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectCover } from './sections/ProjectCover';
import { ProjectContent } from './sections/ProjectContent';
import { ProjectAside } from './sections/ProjectAside';

export const ProjectPage: React.FC = () => {

  const { projectOnPage, onSetProjectPage } = useProjects();
  const project = projectOnPage!! ?? {}

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('projectOnPagePortfolio') || '{}');
    onSetProjectPage(project);
  }, [])

  return (
    <div className='project'>
      <ProjectHeader />
      <ProjectCover 
        github={project.githubRepository}
        url={project.url}
        title={project.title} 
        description={project.descriptionCard}
      />

      <main className='project-main container'>
        <div className="project-main__container">
          <ProjectContent  
            description={project.description}
            image={project.images?.[0]}
            title={project.title}
          />
          <ProjectAside 
            category={ project.category }
            image={ project.images?.[1] }
            technologies={ project?.technologies }
          />
        </div>
      </main>

      <section className="container project-images">
        <h2 className="project-images__title">Project Images</h2>
        <ul className="project-images__list">
          {
            project.images?.map( (image, i) => (
              i >= 2 &&
              <li key={ image } className="project-images__box">
                <div className="project-images__overlay">
                  <div className="project-images__overlay-content">
                    <a target='_blank' href={project.url} className='btn btn--purple'>
                      <i className='bxr bx-iframe btn__icon'></i> 
                      View Site
                    </a>
                    <a href={project.url} className='btn btn--outline'>
                      <i className='bxr bx-finger-up btn__icon'></i> 
                      View image
                    </a>
                  </div>
                </div>
                <img 
                  className='project-images__img' 
                  src={ image } 
                  alt="Projectt image cellphone" 
                />
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useProjects } from '../../hooks'
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectCover } from './sections/ProjectCover';

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
        title={project.title} 
        description={project.descriptionCard}
      />

      <main className='project-main'>
        <div className="project-main__container">
          <section className='project-content'>
            
            <img 
              className='project-content__img' 
              src={project.images[0]}
              alt="" 
            />
            
          </section>
          <aside className='project-aside'>
            Aside
          </aside>
        </div>
      </main>

    </div>
  )
}

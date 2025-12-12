import React, { useEffect } from 'react'
import { useProjects } from '../../hooks'
import { ProjectHeader } from '../../shared/components/ProjectHeader';
import { ProjectCover } from './sections/ProjectCover';
import { ProjectContent } from './sections/ProjectContent';
import { ProjectAside } from './sections/ProjectAside';
import { Footer } from '../../shared/components/footer/Footer';
// import { ProjectImages } from './sections/ProjectImages';
import { ProjectSwiper } from './sections/ProjectSwiper';

export const ProjectPage: React.FC = () => {

  const { projectOnPage, onSetProjectPage } = useProjects();
  const project = projectOnPage!! ?? {}

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('projectOnPagePortfolio') || '{}');
    onSetProjectPage(project);
  }, [])

  return (
    <div className='project'>
      <ProjectHeader title={project.title} />
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
        <ProjectSwiper 
          items={project.images ?? []}
          slidesPerView={project.noMobile ? 1 : 3} 
          from={project.noMobile ? 0 : 1 }
        />
      </main>

      {/* <ProjectImages 
        images={project?.images}
        url={ project.url }
        noMobile={project.noMobile}
      /> */}

      <Footer />
    </div>
  )
}

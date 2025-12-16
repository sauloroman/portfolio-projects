import React, { useEffect } from 'react'
import { useProjects, useUI } from '../../hooks'
import { ProjectHeader } from '../../shared/components/ProjectHeader';
import { ProjectCover } from './sections/ProjectCover';
import { ProjectContent } from './sections/ProjectContent';
import { ProjectAside } from './sections/ProjectAside';
import { Footer } from '../../shared/components/footer/Footer';
import { ProjectSwiper } from './sections/ProjectSwiper';
import { ModalNames } from '../../shared/interfaces/ui.interface';
import { ModalImage } from './components/ModalImage';

export const ProjectPage: React.FC = () => {

  const { modal } = useUI()
  const { projectOnPage, onSetProjectPage } = useProjects();
  const project = projectOnPage!! ?? {}

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('projectOnPagePortfolio') || '{}');
    onSetProjectPage(project);
  }, [])

  return (
    <> 
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
              categories={ project.categories }
              image={''}
              technologies={ project?.technologies }
            />
          </div>

          <section>
            <span className="portfolio-services__sub">Media</span>
            <h2 className="heading-section project-images__title">
              <div className="period period--medium"></div>
                Project Images
              <div className="period period--medium"></div>
            </h2>
            <ProjectSwiper 
              items={project.images ?? []}
              slidesPerView={project.noMobile ? 2 : 3} 
            />
          </section>
        </main>
        <Footer />
      </div>
      { modal.isOpen && modal.name === ModalNames.showImage && <ModalImage />}
    </>
  )
}

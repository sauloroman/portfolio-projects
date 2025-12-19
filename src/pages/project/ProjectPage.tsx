import React, { useEffect, useState } from 'react'
import { useNavPage, useProjects, useUI } from '../../hooks'
import { ProjectHeader } from '../../shared/components/ProjectHeader';
import { ProjectCover } from './sections/ProjectCover';
import { ProjectContent } from './sections/ProjectContent';
import { ProjectAside } from './sections/ProjectAside';
import { Footer } from '../../shared/components/footer/Footer';
import { ProjectSwiper } from './sections/ProjectSwiper';
import { ModalNames } from '../../shared/interfaces/ui.interface';
import { ModalImage } from './components/ModalImage';
import { Loader } from '../../shared/components/Loader';

export const ProjectPage: React.FC = () => {

  const { modal, isDarkMode } = useUI()
  const { projectOnPage, onGetProjectById, isLoading } = useProjects();
  const { params } = useNavPage()
  const [image, setImage] = useState('')
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    setImage( isDarkMode ? projectOnPage?.imagesDark[0] ?? '' : projectOnPage?.images[0] ?? '' )
    setImages(isDarkMode ? projectOnPage?.imagesDark ?? [] : projectOnPage?.images ?? [] )
  }, [projectOnPage])
  
  useEffect(() => {
    setImage( isDarkMode ? projectOnPage?.imagesDark[0] ?? '' : projectOnPage?.images[0] ?? '' )
    setImages(isDarkMode ? projectOnPage?.imagesDark ?? [] : projectOnPage?.images ?? [] )
  }, [isDarkMode])

  useEffect(() => {
    const projectId = params.pathname.split('/').at(-1)
    onGetProjectById(projectId!)
  }, [])

  if ( isLoading ) {
    return (
      <div className='project-loader'>
        <Loader />
      </div>
    )
  }

  return (
    <> 
      <div className='project'>
        <ProjectHeader title={projectOnPage?.title ?? ''} />
        <ProjectCover 
          github={projectOnPage?.githubRepository ?? ''}
          url={projectOnPage?.url ?? ''}
          title={projectOnPage?.title ?? ''} 
          description={projectOnPage?.descriptionCard ?? ''}
        />

        <main className='project-main container'>
          <div className="project-main__container">
            <ProjectContent  
              description={projectOnPage?.description ?? ''}
              image={image ?? ''}
              title={projectOnPage?.title ?? ''}
            />
            
            <ProjectAside 
              categories={ projectOnPage?.categories ?? [] }
              image={image ?? ''}
              technologies={ projectOnPage?.technologies ?? [] }
            />
          </div>

          <section>

            <div className="project-subtitle">
              <span className="portfolio-services__sub">Media</span>
              <h2 className="heading-section project-images__title">
                <div className="period period--medium"></div>
                  Project Images
                <div className="period period--medium"></div>
              </h2>
            </div>

            <ProjectSwiper 
              noMobile={projectOnPage?.noMobile ?? false}
              items={images}
              slidesPerView={projectOnPage?.noMobile ? 2 : 3} 
            />
          </section>
        </main>
        <Footer />
      </div>
      { modal.isOpen && modal.name === ModalNames.showImage && <ModalImage />}
    </>
  )
}

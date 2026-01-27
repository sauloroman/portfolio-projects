import React, { useEffect, useMemo } from 'react'
import { useNavPage, useProjects, useUI } from '../../hooks'
import { ProjectHeader } from '../../shared/components/ProjectHeader'
import { ProjectCover } from './sections/ProjectCover'
import { ProjectContent } from './sections/ProjectContent'
import { ProjectAside } from './sections/ProjectAside'
import { Footer } from '../../shared/components/footer/Footer'
import { ProjectSwiper } from './sections/ProjectSwiper'
import { ModalNames } from '../../shared/interfaces/ui.interface'
import { Loader } from '../../shared/components/Loader'
import { ProjectDB } from './sections/ProjectDB'
import { ProjectVideoModal } from './sections/ProjectVideoModal'
import { ProjectGithubLinks } from './sections/ProjectGithubLinks'
import { ProjectImageModal } from './sections/ProjectImageModal'

export const ProjectPage: React.FC = () => {

  const { modal, isDarkMode } = useUI()
  const { projectOnPage, onGetProjectById, isLoading } = useProjects()
  const { params } = useNavPage()

  useEffect(() => {
    const projectId = params.pathname.split('/').at(-1)
    if (projectId) {
      onGetProjectById(projectId)
    }
  }, [])

  const { image, imageDB, images } = useMemo(() => {
    if (!projectOnPage) {
      return { image: '', imageDB: '', images: [] }
    }

    return {
      image: isDarkMode
        ? projectOnPage.imagesDark?.[0] ?? ''
        : projectOnPage.images?.[0] ?? '',

      imageDB: isDarkMode
        ? projectOnPage.databaseDiagram?.[1] ?? ''
        : projectOnPage.databaseDiagram?.[0] ?? '',

      images: isDarkMode
        ? projectOnPage.imagesDark ?? []
        : projectOnPage.images ?? []
    }
  }, [projectOnPage, isDarkMode])

  if (isLoading) {
    return (
      <div className="project-loader">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div className="project">
        <ProjectHeader title={projectOnPage?.title ?? ''} />

        <ProjectCover
          url={projectOnPage?.url ?? ''}
          title={projectOnPage?.title ?? ''}
          description={projectOnPage?.descriptionCard ?? ''}
        />

        <main className="project-main container">
          <div className="project-main__container">
            <ProjectContent
              description={projectOnPage?.description ?? ''}
              video={projectOnPage?.video ?? ''}
              title={projectOnPage?.title ?? ''}
            />

            <div>
              <ProjectAside
                categories={projectOnPage?.categories ?? []}
                image={image}
                technologies={projectOnPage?.technologies ?? []}
              />

              {imageDB && (
                <ProjectDB
                  imageDB={imageDB}
                  link={projectOnPage?.databaseDiagram.at(-1) ?? ''}
                />
              )}

            </div>
          </div>

          <section>
            <div className="project-subtitle">
              <span className="portfolio-services__sub">Media</span>
              <h2 className="heading-section project-images__title">
                <div className="period period--medium" />
                Project Images
                <div className="period period--medium" />
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

      {modal.isOpen && modal.name === ModalNames.projectVideo && <ProjectVideoModal  title={projectOnPage?.title ?? ''} video={projectOnPage?.video ?? ''} />}
      {modal.isOpen && modal.name === ModalNames.projectGithubLinks && <ProjectGithubLinks title={projectOnPage?.title ?? ''} links={projectOnPage?.githubRepositories ?? []} />}
      {modal.isOpen && modal.name === ModalNames.projectImage && <ProjectImageModal title={projectOnPage?.title ?? ''} />}
    </>
  )
}

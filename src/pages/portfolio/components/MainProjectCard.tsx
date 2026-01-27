import React from 'react'
import type { Project } from '../../../shared/interfaces/project.interface'
import { ProjectTechnologies } from './ProjectTechnologies'
import { useUI } from '../../../hooks'
import { ModalNames } from '../../../shared/interfaces/ui.interface'

interface Props {
  project: Project
}

export const MainProjectCard: React.FC<Props> = ({ project }) => {
  const { onOpenModal } = useUI()

  return (
    <article className="portfolio-main-card">
      <div className="portfolio-main-card__image">
        <img
          src={project.images[0]}
          alt={project.title}
        />
      </div>

      <div className="portfolio-main-card__overlay">
        <span className="portfolio-main-card__title">
          {project.title}
        </span>

        <ProjectTechnologies
          technologies={project.technologies}
        />

        <div className="portfolio-main-card__actions">
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn--black"
            onClick={() => onOpenModal(ModalNames.projectGithubLinks)}
          >
            <i className="devicon-github-original"></i>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

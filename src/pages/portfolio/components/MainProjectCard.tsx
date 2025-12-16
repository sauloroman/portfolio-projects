import React from 'react'
import type { Project } from '../../../shared/interfaces/project.interface'
import { ProjectTechnologies } from './ProjectTechnologies'

interface Props {
  project: Project
}

export const MainProjectCard: React.FC<Props> = ({ project }) => {
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
            href={project.githubRepository}
            target="_blank"
            rel="noreferrer"
            className="btn btn--black"
            onClick={e => e.stopPropagation()}
          >
            <i className="devicon-github-original"></i>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

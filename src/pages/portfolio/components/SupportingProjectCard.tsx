import React from 'react'
import type { Project } from '../../../shared/interfaces/project.interface'
import { ProjectTechnologies } from './ProjectTechnologies'

interface Props {
  project: Project
  onOpen: () => void
}

export const SupportingProjectCard: React.FC<Props> = ({ project, onOpen }) => {
  return (
    <article className="support-project" onClick={onOpen}>
      <img
        src={project.images[0]}
        alt={project.title}
        className="support-project__image"
      />

      <div className="support-project__content">
        <h4>{project.title}</h4>
        <p>{project.descriptionCard}</p>

        <ProjectTechnologies technologies={project.technologies} />
      </div>
    </article>
  )
}

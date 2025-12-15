import React from 'react'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../../../shared/interfaces/project.interface'

interface Props {
  projects: Project[]
}

export const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <ul className='projects-list'>
      {
        projects.map( (project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            left={ i % 2 == 0 } 
          />
        ))
      }
    </ul>
  )
}

import React from 'react'
import { ProjectTechnologyItem } from './ProjectTechnologyItem'

interface ProjectTechnologiesProps {
  technologies: string[]
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
  return (
    <ul className='project-card__tech'>
      {
        technologies.map( tech => (
          <ProjectTechnologyItem 
            key={tech}
            tech={tech} 
          />
        ))
      }
    </ul>
  )
}

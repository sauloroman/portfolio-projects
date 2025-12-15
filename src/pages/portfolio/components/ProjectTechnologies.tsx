import React from 'react'
import { ProjectTechnologyItem } from './ProjectTechnologyItem'

interface ProjectTechnologiesProps {
  cardsBigger?: boolean,
  technologies: string[]
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies, cardsBigger = false }) => {
  return (
    <ul className='project-card__tech'>
      {
        technologies.map( tech => (
          <ProjectTechnologyItem 
            bigger={cardsBigger}
            key={tech}
            tech={tech} 
          />
        ))
      }
    </ul>
  )
}

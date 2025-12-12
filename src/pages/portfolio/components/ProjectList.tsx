import React from 'react'
import { ProjectCard } from './ProjectCard'
import { useProjects } from '../../../hooks/useProjects'

export const ProjectList: React.FC = () => {
  const { projects } = useProjects()
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

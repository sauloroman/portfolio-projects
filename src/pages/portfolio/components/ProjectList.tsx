import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectList: React.FC = () => {
  return (
    <ul className='project-list'>
      <ProjectCard left />
      <ProjectCard />
      <ProjectCard left />
    </ul>
  )
}

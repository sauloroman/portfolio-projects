import React from 'react'
import { ProjectList } from '../portfolio/components/ProjectList'
import { ProjectHeader } from '../../shared/components/ProjectHeader'

export const Projects: React.FC = () => {
  return (
    <div className='projects'>
      <ProjectHeader title='My Latest Work' />
      <div className="projects__container container">
        <ProjectList />
      </div>
    </div>
  )
}

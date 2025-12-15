import React, { useState } from 'react'
import { ProjectList } from '../portfolio/components/ProjectList'
import { ProjectHeader } from '../../shared/components/ProjectHeader'
import { ProjectsHero } from './components/ProjectsHero'
import { ProjectsFilter } from './components/ProjectsFilter'
import { useProjects } from '../../hooks'
import type { Project } from '../../shared/interfaces/project.interface'

export const Projects: React.FC = () => {

  const { projects } = useProjects()

  const [finalProjects, setFinalProjects] = useState<Project[]>(projects)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const onApplyFilter = (filter: string) => {
    setActiveFilter(filter)
    if ( filter !== 'All') {
      setFinalProjects(projects.filter(project => project.category.toLowerCase() === filter.toLowerCase()))
    } else {
      setFinalProjects(projects)
    }
  }

  return (
    <div className='projects'>
      <ProjectHeader title='My Latest Work' />
      <ProjectsHero />
      <div className="projects-container container">
        <ProjectsFilter 
          onApplyFilter={onApplyFilter}
          activeFilter={activeFilter}
          projects={finalProjects} 
        />
        <ProjectList projects={finalProjects} />
      </div>
    </div>
  )
}

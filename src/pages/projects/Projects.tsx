import React, { useEffect, useState } from 'react'
import { ProjectList } from '../portfolio/components/ProjectList'
import { ProjectHeader } from '../../shared/components/ProjectHeader'
import { ProjectsHero } from './components/ProjectsHero'
import { ProjectsFilter } from './components/ProjectsFilter'
import { useProjects } from '../../hooks'
import type { Project } from '../../shared/interfaces/project.interface'
import { Footer } from '../../shared/components/footer/Footer'
import { ProjectsFilterSelect } from './components/ProjectsFilterSelect'

export const Projects: React.FC = () => {

  const { projects, onGetProjects } = useProjects()

  const [finalProjects, setFinalProjects] = useState<Project[]>(projects)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const onApplyFilter = (filter: string) => {
    setActiveFilter(filter)
    if ( filter !== 'All') {
      setFinalProjects(projects.filter(project => project.categories.map(cat => cat.toLowerCase()).includes(filter.toLowerCase())))
    } else {
      setFinalProjects(projects)
    }
  }

  useEffect(() => {
    onGetProjects()
  }, [])

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
        <ProjectsFilterSelect 
          onApplyFilter={onApplyFilter}
          activeFilter={activeFilter}
        />
        <ProjectList projects={finalProjects} />
      </div>
      <Footer />
    </div>
  )
}

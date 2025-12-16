import React from 'react'
import { useNavPage, useProjects } from '../../../hooks'
import type { Project } from '../../../shared/interfaces/project.interface'
import { HeroProjectCase } from '../components/HeroProjectCase'

interface Props {
  mainProjects: Project[]
}

export const MainProjectsSection: React.FC<Props> = ({ mainProjects }) => {
  const { onNavigatePage } = useNavPage()
  const { onSetProjectPage } = useProjects()

  const goToProject = (project: Project) => {
    onSetProjectPage(project)
    localStorage.setItem('projectOnPagePortfolio', JSON.stringify(project))
    onNavigatePage(`/project/${project.id}`)
  }

  return (
    <section className="portfolio-projects">
      <div className="container">
        {mainProjects.map((project, i) => (
          <HeroProjectCase
            isLeftSide={ i % 2 !== 0}
            key={project.id}
            project={project}
            onOpen={() => goToProject(project)}
          />
        ))}
      </div>
    </section>
  )
}

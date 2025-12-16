import React from 'react'
import { useNavPage, useProjects } from '../../../hooks'
import { MainProjectsSection } from './MainProjectsSection'

export const PortfolioSection: React.FC = () => {

  const { projects } = useProjects()
  const { onNavigatePage } = useNavPage()

  const mainProjects = projects.filter(pro => pro.isMainProject).sort((a, b) => b.projectNumber - a.projectNumber)

  return (
    <section id='portfolio' className='portfolio-projects'>
      <div className="portfolio-projects__container container">

        <div className="portfolio-projects__top">
            <span className="portfolio-projects__sub">Latest Works</span>
            <h2 className="heading-section portfolio-projects__title">
              <div className="period period--medium"></div>
              My Portfolio
              <div className="period period--medium"></div>
            </h2>
        </div>
        <MainProjectsSection mainProjects={mainProjects} />
        <div className="portfolio-projects__line">
          <div className="line"></div>
        </div>
        <div className='portfolio-projects__cta'>
          <a onClick={() => onNavigatePage('/projects')} target='_blank' className='project-cover__link btn btn--black'>
            <span></span>
            Check all my projects
          </a>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { ProjectList } from '../components/ProjectList'

export const PortfolioSection: React.FC = () => {
  return (
    <section id='portfolio' className='portfolio-projects'>
      <div className="portfolio-projects__container">

        <div className="portfolio-projects__top">
          <div>
            <span className="portfolio-projects__sub">Latest Works</span>
            <h2 className="heading-section portfolio-projects__title">
              <div className="period period--medium"></div>
              My Portfolio
              <div className="period period--medium"></div>
            </h2>
          </div>
        </div>

        <ProjectList />

      </div>
    </section>
  )
}

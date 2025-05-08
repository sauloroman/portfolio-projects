import React from 'react'
import { ProjectList } from '../components/ProjectList'

export const PortfolioSection: React.FC = () => {
  return (
    <section id='portfolio' className='portfolio-projects'>
      <div className="portfolio-projects__container">

        <div className="portfolio-projects__top">
          <div>
            <span className="portfolio-projects__sub">My Latest Projects</span>
            <h2 className="heading-section portfolio-projects__title">
              <div className="period period--medium"></div>
              I create solutions with code
            </h2>
          </div>
          <button className='btn btn--black portfolio-projects__button'>
            <i className='bx bx-code-alt btn__icon'></i>
            View all projects
          </button>
        </div>

        <ProjectList />

      </div>
    </section>
  )
}

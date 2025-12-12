import React from 'react'
import { useNavPage } from '../../../hooks'

export const PortfolioSection: React.FC = () => {

  const { onNavigatePage } = useNavPage()

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
          <div>
            <a onClick={() => onNavigatePage('/projects') } target='_blank' className='project-cover__link btn btn--purple-online'>
              <span></span>
              Check all my projects
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

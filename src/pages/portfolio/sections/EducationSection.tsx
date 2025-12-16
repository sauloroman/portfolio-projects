import React from 'react'
import programming from '../../../assets/img/icon-programming.webp'
import type { Education } from '../../../shared/interfaces/ui.interface'

const schools: Education[] = [
  {
    name: 'Universidad Tecnológica de Aguascalientes',
    career: 'Information Technology Engineering and Digital Innovation',
    specialty: 'Multiplatform Software Development',
    date: 'August 2024 - Today',
    image: ''
  },
  {
    name: 'Academlo',
    career: 'Programming Bootcamp',
    specialty: 'Web Development',
    date: 'January 2024 - July 2024',
    image: ''
  }
]

export const EducationSection: React.FC = () => {
  return (
    <section id='education' className="portfolio-education">
      <div className="portfolio-education__container container">

        <div className="portfolio-education__top">
          <span className="portfolio-education__sub">School</span>
          <h2 className="heading-section portfolio-education__title">
            <span className="period period--medium" />
            Education
            <span className="period period--medium" />
          </h2>
        </div>

        <div className="portfolio-education__grid">
          <div className="portfolio-education__image">
            <img src={programming} alt="Programming illustration" />
          </div>

          <ul className="portfolio-education__list">
            {schools.map(item => (
              <li className="portfolio-education__item" key={item.name}>
                <div className="portfolio-education__icon">
                  <i className="devicon-codepen-original"></i>
                </div>

                <div className="portfolio-education__content">
                  <header className="portfolio-education__header">
                    <p className="portfolio-education__school">
                      {item.name}
                    </p>
                    <span className="portfolio-education__date">
                      {item.date}
                    </span>
                  </header>

                  <p className="portfolio-education__career">
                    {item.career}
                  </p>
                  <p className="portfolio-education__specialty">
                    {item.specialty}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

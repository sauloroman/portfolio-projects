import React from 'react'
import { motion } from 'framer-motion'
import programming from '../../../assets/img/icon-computer.webp'
import type { Education } from '../../../shared/interfaces/ui.interface'
import { useScrollReveal } from '../../../hooks'

const schools: Education[] = [
  {
    name: 'Universidad Tecnológica de Aguascalientes',
    career: 'Information Technology and Digital Innovation Engineering',
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
  const { containerVariants, itemVariants, viewport } = useScrollReveal()

  return (
    <motion.section
      id="education"
      className="portfolio-education"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <div className="portfolio-education__container container">

        {/* Top */}
        <motion.div
          className="portfolio-education__top"
          variants={itemVariants}
        >
          <span className="portfolio-education__sub">School</span>
          <h2 className="heading-section portfolio-education__title">
            <span className="period period--medium" />
            Education
            <span className="period period--medium" />
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="portfolio-education__grid">

          {/* Image */}
          <motion.div
            className="portfolio-education__image"
            variants={itemVariants}
          >
            <img src={programming} alt="Programming illustration" />
          </motion.div>

          {/* List */}
          <motion.ul
            className="portfolio-education__list"
            variants={containerVariants}
          >
            {schools.map(item => (
              <motion.li
                key={item.name}
                className="portfolio-education__item"
                variants={itemVariants}
              >
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
              </motion.li>
            ))}
          </motion.ul>

        </div>

      </div>
    </motion.section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import type { Job } from '../../../shared/interfaces/ui.interface'
import { useScrollReveal } from '../../../hooks'
import experienceImg from '../../../assets/img/icon-jobs.png'

const jobs: Job[] = [
  {
    company: 'Las Brasas Comedores Industriales y Eventos Sociales',
    project: 'Abrasa Platform',
    type: 'Freelance – Full Stack MERN Developer',
    date: 'Feb 2025 – Jun 2025',
    image: ''
  },
  {
    company: 'High School Cafeteria “Jesús Reyes Heroles”',
    project: 'PuntoCafé POS System',
    type: 'Freelance – Full Stack Java Developer',
    date: 'Aug 2024 – Dec 2024',
    image: ''
  },
  {
    company: 'TuAmigoInvitaciones',
    project: 'Interactive Digital Invitations',
    type: 'Freelance – Designer & Developer',
    date: 'Jul 2023 – Present',
    image: ''
  }
]

export const ExperienceSection: React.FC = () => {
  const { containerVariants, itemVariants, viewport } = useScrollReveal()

  return (
    <motion.section
      id="experience"
      className="portfolio-experience"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <div className="portfolio-experience__container container">

        <motion.div
          className="portfolio-experience__top"
          variants={itemVariants}
        >
          <span className="portfolio-experience__sub">Career</span>
          <h2 className="heading-section portfolio-experience__title">
            <span className="period period--medium" />
            Experience
            <span className="period period--medium" />
          </h2>
        </motion.div>

        <div className="portfolio-experience__grid">

          <motion.ul
            className="portfolio-experience__list"
            variants={containerVariants}
          >
            {jobs.map(job => (
              <motion.li
                key={job.project}
                className="portfolio-experience__item"
                variants={itemVariants}
              >
                <div className="portfolio-experience__icon">
                  <i className="devicon-codepen-original" />
                </div>

                <div className="portfolio-experience__content">
                  <header className="portfolio-experience__header">
                    <p className="portfolio-experience__project">
                      {job.project}
                    </p>
                    <span className="portfolio-experience__date">
                      {job.date}
                    </span>
                  </header>

                  <p className="portfolio-experience__role">
                    {job.type}
                  </p>

                  <p className="portfolio-experience__company">
                    {job.company}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

            
          <motion.div
            className="portfolio-experience__image"
            variants={itemVariants}
          >
            <img src={experienceImg} alt="Professional experience illustration" />
          </motion.div>

        </div>

      </div>
    </motion.section>
  )
}

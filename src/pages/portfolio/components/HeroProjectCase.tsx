import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../../../shared/interfaces/project.interface'
import { ProjectTechnologies } from './ProjectTechnologies'
import { getProjectBadgeName } from '../../../shared/helpers/get-badge'
import { useUI, useScrollReveal } from '../../../hooks'

interface Props {
  isLeftSide?: boolean
  project: Project
  onOpen: () => void
}

export const HeroProjectCase: React.FC<Props> = ({
  isLeftSide = false,
  project,
  onOpen
}) => {
  const { isDarkMode } = useUI()
  const { viewport } = useScrollReveal()

  const badges = getProjectBadgeName(project.categories)
  const [image, setImage] = useState('')

  useEffect(() => {
    setImage(isDarkMode ? project.imagesDark[0] : project.images[0])
  }, [isDarkMode, project])

  if (!project) return null

  return (
    <motion.article
      className="hero-project"
      onClick={onOpen}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {
          opacity: 0,
          x: isLeftSide ? 40 : -40
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.26, 1, 0.3, 1]
          }
        }
      }}
    >
      {isLeftSide ? (
        <>
          <div className="hero-project__content">
            <h3 className="hero-project__title">{project.title}</h3>

            <p className="hero-project__description">
              {project.descriptionCard.substring(0, 300) + '...'}
            </p>

            <div className="hero-project__meta">
              <div className="project-card__name">
                {badges?.map(badge => (
                  <p
                    key={badge}
                    className={`project-card__badge project-card__badge--${badge}`}
                  >
                    {badge}
                  </p>
                ))}
              </div>
            </div>

            <ProjectTechnologies
              technologies={project.technologies}
            />

            <div className="hero-project__actions">
              <button className="btn btn--purple">
                View Case Study →
              </button>

              <a
                href={project.githubRepository}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
                onClick={e => e.stopPropagation()}
              >
                <i className="devicon-github-original"></i>
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-project__image">
            <img src={image} alt={project.title} />
          </div>
        </>
      ) : (
        <>
          <div className="hero-project__image">
            <img src={image} alt={project.title} />
          </div>

          <div className="hero-project__content">
            <h3 className="hero-project__title">{project.title}</h3>

            <p className="hero-project__description">
              {project.descriptionCard.substring(0, 300) + '...'}
            </p>

            <div className="hero-project__meta">
              <div className="project-card__name">
                {badges?.map(badge => (
                  <p
                    key={badge}
                    className={`project-card__badge project-card__badge--${badge}`}
                  >
                    {badge}
                  </p>
                ))}
              </div>
            </div>

            <ProjectTechnologies
              technologies={project.technologies}
            />

            <div className="hero-project__actions">
              <button className="btn btn--purple">
                View Case Study →
              </button>

              <a
                href={project.githubRepository}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
                onClick={e => e.stopPropagation()}
              >
                <i className="devicon-github-original"></i>
                GitHub
              </a>
            </div>
          </div>
        </>
      )}
    </motion.article>
  )
}

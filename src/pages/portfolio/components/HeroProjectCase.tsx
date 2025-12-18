import React from 'react'
import type { Project } from '../../../shared/interfaces/project.interface'
import { ProjectTechnologies } from './ProjectTechnologies'
import { getProjectBadgeName } from '../../../shared/helpers/get-badge'

interface Props {
    isLeftSide?: boolean,
    project: Project
    onOpen: () => void
}

export const HeroProjectCase: React.FC<Props> = ({ isLeftSide = false, project, onOpen }) => {
    const badges = getProjectBadgeName(project.categories)
    if (!project) return null
    if (isLeftSide) {
        return (
            <article className="hero-project" onClick={onOpen}>
                <div className="hero-project__content">
                    <h3 className="hero-project__title">{project.title}</h3>

                    <p className="hero-project__description">
                        {project.descriptionCard.substring(0, 300) + '...'}
                    </p>

                    <div className="hero-project__meta">
                        <div className="project-card__name">
                            {
                                badges?.map(badge => (
                                    <p className={`project-card__badge project-card__badge--${badge}`}>{badge}</p>
                                ))
                            }
                        </div>
                    </div>

                    <ProjectTechnologies technologies={project.technologies} />

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
                    <img src={project.images[0]} alt={project.title} />
                </div>
            </article>
        )
    }

    return (
        <article className="hero-project" onClick={onOpen}>

            <div className="hero-project__image">
                <img src={project.images[0]} alt={project.title} />
            </div>

            <div className="hero-project__content">
                <h3 className="hero-project__title">{project.title}</h3>

                <p className="hero-project__description">
                    {project.descriptionCard.substring(0, 300) + '...'}
                </p>

                <div className="hero-project__meta">
                    <div className="project-card__name">
                        {
                            badges?.map(badge => (
                                <p className={`project-card__badge project-card__badge--${badge}`}>{badge}</p>
                            ))
                        }
                    </div>
                </div>

                <ProjectTechnologies technologies={project.technologies} />

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
        </article>
    )
}

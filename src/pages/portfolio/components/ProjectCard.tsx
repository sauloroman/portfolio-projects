import React, { useMemo } from 'react';
import type { Project } from '../../../shared/interfaces/project.interface';
import { getShortDescription } from '../../../shared/helpers/get-short-description';
import { ProjectTechnologies } from './ProjectTechnologies';

interface ProjectCardProps {
  left?: boolean;
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ left, project }) => {
  const {
    coverImage,
    title,
    description,
    technologies,
    url,
    githubRepository,
  } = useMemo(
    () => ({
      coverImage: project.images[0],
      title: project.title,
      description: getShortDescription(project.description),
      technologies: project.technologies,
      url: project.url,
      githubRepository: project.githubRepository,
    }),
    [project]
  );

  return (
    <div className="project-card">
      <div className="project-card__figure">
        <img
          className="project-card__image"
          src={coverImage}
          alt="Card Image Poken"
        />
      </div>
      <div className="project-card__content">
        <h4 className="project-card__title">{title}</h4>
        <p className="project-card__text">{description}</p>

        <ProjectTechnologies technologies={technologies} />

        <div className="project-card__buttons">
          <a
            target="_blank"
            href={url}
            className="btn btn--purple project-card__button"
          >
            <div className="period period--small period--green u-mr-1"></div>
            Online
          </a>
          <a
            target="_blank"
            href={githubRepository}
            className="btn btn--outline project-card__button"
          >
            <i className="bx bx-search-alt-2 btn__icon"></i>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useMemo } from 'react';
import type { Project } from '../../../shared/interfaces/project.interface';
import { ProjectTechnologies } from './ProjectTechnologies';

interface ProjectCardProps {
  left?: boolean;
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    coverImage,
    title,
    description,
    technologies,
  } = useMemo(
    () => ({
      coverImage: project.images[0],
      title: project.title,
      description: project.descriptionCard,
      technologies: project.technologies,
    }),
    [project]
  );

  return (
    <div className='project-card'>
      <div className="project-card__figure">
        <img
          loading='lazy'
          className="project-card__image"
          src={coverImage}
          alt="Card Image Poken"
        />
      </div>
      <div className="project-card__content">
        <h4 className="project-card__title">{title}</h4>
        <p className="project-card__text">{description}</p>

        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

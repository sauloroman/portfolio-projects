import React, { useMemo } from 'react';
import type { Project } from '../../../shared/interfaces/project.interface';
import { ProjectTechnologies } from './ProjectTechnologies';
import { useNavPage, useProjects } from '../../../hooks';

interface ProjectCardProps {
  left?: boolean;
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  const { onNavigatePage } = useNavPage()
  const { onSetProjectPage } = useProjects()

  const {
    coverImage,
    title,
    category,
    technologies,
  } = useMemo(
    () => ({
      category: project.category,
      coverImage: project.images[0],
      title: project.title,
      technologies: project.technologies,
    }),
    [project]
  );

  const onGoProjectPage = () => {
    onNavigatePage(`/project/${project.id}`)
    onSetProjectPage(project.id)
  }

  return (
    <div onClick={ onGoProjectPage } className='project-card'>
      <div className="project-card__figure">
        <img
          loading='lazy'
          className="project-card__image"
          src={coverImage}
          alt="Card Image Poken"
        />
      </div>
      <div className="project-card__content">
        <div className="project-card__name">
          <p className="project-card__category">&mdash; {category}</p>
        </div>
        <h4 className="project-card__title">{title}</h4>
        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

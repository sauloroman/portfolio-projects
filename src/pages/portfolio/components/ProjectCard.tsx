import React, { useMemo } from 'react';
import type { Project } from '../../../shared/interfaces/project.interface';
import { ProjectTechnologies } from './ProjectTechnologies';
import { useNavPage, useProjects } from '../../../hooks';
import { getProjectBadgeName } from '../../../shared/helpers/get-badge';

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
    technologies,
    badges
  } = useMemo(
    () => ({
      category: project.categories,
      coverImage: project.images[0],
      title: project.title,
      technologies: project.technologies,
      badges: getProjectBadgeName(project.categories)
    }),
    [project]
  );

  const onGoProjectPage = () => {
    onNavigatePage(`/project/${project.id}`)
    localStorage.setItem('projectOnPagePortfolio', JSON.stringify(project));
    onSetProjectPage(project)
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
          {
            badges?.map( badge => (
              <p className={`project-card__badge project-card__badge--${badge}`}>{badge}</p>
            ))
          }
        </div>
        <h4 className="project-card__title">{title}</h4>
        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

import React from 'react';
import { ProjectTechnologies } from '../../portfolio/components/ProjectTechnologies';
import { getProjectBadgeName } from '../../../shared/helpers/get-badge';

interface ProjectAsideProps {
  image: string,
  category: string,
  technologies: string[]
}

export const ProjectAside: React.FC<ProjectAsideProps> = ({category, image, technologies}) => {
  const badge = getProjectBadgeName(category)
  return (
    <aside className="project-aside">
      <div className="project-aside__phone">
        <img
          className="project-aside__imgPhone"
          src={image}
          alt="Project design phone"
        />
      </div>
      <div className="project-aside__details">
        <div className="project-aside__type">
          <h3 className="project-aside__title">Category</h3>
          <div className={`project-card__badge project-card__badge--${badge}`}>{category}</div>
        </div>
        <div className="project-aside__tech">
          <h3 className="project-aside__title">Technologies</h3>
          <ProjectTechnologies technologies={technologies ?? []} />
        </div>
      </div>
    </aside>
  );
};

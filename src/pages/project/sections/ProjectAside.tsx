import React from 'react';
import { ProjectTechnologies } from '../../portfolio/components/ProjectTechnologies';
import { getProjectBadgeName } from '../../../shared/helpers/get-badge';

interface ProjectAsideProps {
  image: string,
  categories: string[],
  technologies: string[]
}

export const ProjectAside: React.FC<ProjectAsideProps> = ({categories, image, technologies}) => {
  const badges = getProjectBadgeName(categories)
  console.log(badges)
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
         <div className="project-card__name">
          {
            badges?.map( badge => (
              <p className={`project-card__badge project-card__badge--${badge}`}>{badge}</p>
            ))
          }
        </div>
        </div>
        <div className="project-aside__tech">
          <h3 className="project-aside__title">Technologies</h3>
          <ProjectTechnologies 
            cardsBigger={true}
            technologies={technologies ?? []} 
          />
        </div>
      </div>
    </aside>
  );
};

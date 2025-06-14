import React from 'react';
import { ProjectTechnologies } from '../../portfolio/components/ProjectTechnologies';

interface ProjectAsideProps {
  image: string,
  category: string,
  technologies: string[]
}

export const ProjectAside: React.FC<ProjectAsideProps> = ({category, image, technologies}) => {
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
          <span>Project {category}</span>
        </div>
        <div className="project-aside__tech">
          <h3 className="project-aside__title">Technologies</h3>
          <ProjectTechnologies technologies={technologies ?? []} />
        </div>
      </div>
    </aside>
  );
};

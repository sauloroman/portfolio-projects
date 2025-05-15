import React from 'react';
import { getCorrectIconName } from '../../../shared/helpers/get-correct-icon-name';

interface ProjectTechnologyItemProps {
  tech: string;
}

export const ProjectTechnologyItem: React.FC<ProjectTechnologyItemProps> = ({
  tech,
}) => {

  const icon = getCorrectIconName( tech )

  return (
    <li className="project-card__item">
      {
        icon?.startsWith('https://')
        ? (<img src={icon} alt={tech} />)
        : (<i className={`${icon} colored`}></i>)
      }
      {tech}
    </li>
  );
};

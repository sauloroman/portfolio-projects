import React from 'react';
import { getCorrectIconName } from '../../../shared/helpers/get-correct-icon-name';

interface ProjectTechnologyItemProps {
  bigger?: boolean,
  tech: string;
}

export const ProjectTechnologyItem: React.FC<ProjectTechnologyItemProps> = ({ tech, bigger = false }) => {

  const icon = getCorrectIconName( tech )

  return (
    <li className={`project-card__item ${bigger && 'project-card__item--bigger'}`}>
      {
        icon?.startsWith('https://')
        ? (<img src={icon} alt={tech} />)
        : (<i className={`${icon}`}></i>)
      }
      {tech}
    </li>
  );
};

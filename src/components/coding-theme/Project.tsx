import React from 'react';

import { ProjectData } from '../../data/experienceData';
import '../../styles/coding-theme/project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectProps = {
  data: ProjectData;
  index: number;
  onClick: (index: number) => void;
};

const Project = ({data, index, onClick}: ProjectProps) => (
  <div className="project" onClick={() => onClick(index)}>
    <div className="project-details">
      <div className="core-information">
        <p className="core-title">{data.name}</p>
        <p>{data.role}</p>
        <p className="project-date">{data.from} - {data.to}
          <span>
            <FontAwesomeIcon icon={['far', 'plus-square']} className="project-popup-open"/>
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Project;

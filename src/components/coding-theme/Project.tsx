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
        <div>{data.name}</div>
        <div>{data.role}</div>
        <div className="project-date">{data.from} - {data.to}
          <span>
            <FontAwesomeIcon icon={['far', 'plus-square']} className="project-popup-open"/>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Project;

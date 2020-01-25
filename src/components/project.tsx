import React from 'react';

import { ProjectData } from '../data/experienceData';
import '../styles/project.scss';
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
        <div>{data.from} - {data.to}</div>
        <FontAwesomeIcon icon={['far', 'plus-square']} className="project-popup-open"/>
      </div>
    </div>
  </div>
);

export default Project;

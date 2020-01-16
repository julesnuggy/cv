import React from 'react';

import { ProjectData } from '../data/experienceData';
import '../styles/project.css'

type ProjectProps = {
  data: ProjectData;
  index: number;
  onClick: (index: number) => void;
}

const Project = ({data, index, onClick}: ProjectProps) => (
  <div className="project" onClick={() => onClick(index)}>
    <div className="project-details">
      <div className="core-information">
        <div>{data.name}</div>
        <div>{data.role}</div>
        <div>{data.from} - {data.to}</div>
      </div>
    </div>
  </div>
);

export default Project;
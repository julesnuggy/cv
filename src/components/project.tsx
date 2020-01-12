import React from 'react';
import '../styles/project.css'
import { ProjectData } from '../data/experienceData';

type ProjectProps = {
  data: ProjectData;
}

const Project = ({data}: ProjectProps) => (
  <div className="project">
    <div className="project-details">
      <div>{data.name}</div>
      <div>{data.role}</div>
      <div>{data.from} - {data.to}</div>
    </div>
  </div>
);

export default Project;
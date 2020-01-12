import React from 'react';
import '../styles/project.css'

type ProjectProps = {
  name: string;
  role: string;
  from: number;
  to: number | string;
}

const Project = ({name, role, from, to}: ProjectProps) => (
  <div className="project">
    <div className="project-details">
      <div>{name}</div>
      <div>{role}</div>
      <div>{from} - {to}</div>
    </div>
  </div>
);

export default Project;
import React, { useState } from 'react';
import '../styles/project.css'
import { ProjectData } from '../data/experienceData';

type ProjectProps = {
  data: ProjectData;
}

const Project = ({data}: ProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className="project" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="project-details">
        <div className="core-information">
          <div>{data.name}</div>
          <div>{data.role}</div>
          <div>{data.from} - {data.to}</div>
        </div>
        {isExpanded &&
        <>
          <div>Tech Stack:</div>
          <div className="tech-stack-list">
            {data.techStack.map((t, idx) => <li className="tech-stack-item" key={idx}>{t}</li>)}
          </div>
          <div>{data.description}</div>
        </>
        }
      </div>
    </div>
)};

export default Project;
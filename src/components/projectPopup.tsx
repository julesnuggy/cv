import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectData } from '../data/experienceData';
import '../styles/project.css'

type ProjectProps = {
  data: ProjectData;
  index: number;
  onClick: (index: number) => void;
}

const ProjectPopup = ({data, index, onClick}: ProjectProps) => (
  <div className="project-popup" onClick={() => onClick(index)}>
    <div className="project-details">
      <div className="core-information">
        <div>{data.name}</div>
        <div>{data.role}</div>
        <div>{data.from} - {data.to}</div>
      </div>
    <div>Tech Stack:</div>
    <div className="tech-stack-list">
      {data.techStack.map((t, idx) => <li className="tech-stack-item" key={idx}>{t}</li>)}
    </div>
      <ReactMarkdown>{data.description}</ReactMarkdown>
    </div>
  </div>
);

export default ProjectPopup ;
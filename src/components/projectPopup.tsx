import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectData } from '../data/experienceData';
import '../styles/project.css'
import '../App.css'
import Blocker from './blocker';

type ProjectProps = {
  data: ProjectData;
  index: number;
  onClick: (index: number) => void;
  onEscapePress: () => void;
}

type DataProps = {
  data: ProjectData;
}

const handleEscapePress = (event: KeyboardEvent, onEscapePress: () => void) => {
  if(event.keyCode === 27) {
    onEscapePress();
  }
};

const CoreInformation = ({data}: DataProps) => (
  <div className="core-information">
    <div className="tag">{`<BasicInfo>`}</div>
    <div className="indented-text">
      <div>{data.name}</div>
      <div>{data.role}</div>
      <div>{data.from} - {data.to}</div>
    </div>
    <div className="tag">{`</BasicInfo>`}</div>
  </div>
);

const TechStack = ({data}: DataProps) => (
  <div className="tech-stack-container">
    <div className="tag">{`<TechStack>`}</div>
    <div className="tech-stack-list">
      {data.techStack.map((t, idx) => <li className="tech-stack-item" key={idx}>{t}</li>)}
    </div>
    <div className="tag">{`</TechStack>`}</div>
  </div>
);

const Description = ({data}: DataProps) => (
  <>
    <div className="tag">{`<Description>`}</div>
    <ReactMarkdown className="description indented-text">
      {data.description}
    </ReactMarkdown>
    <div className="tag">{`</Description>`}</div>
  </>
);

const ProjectPopup = ({data, index, onClick, onEscapePress}: ProjectProps) => {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      handleEscapePress(event, onEscapePress)
    })
  });

  return (
  <>
    <Blocker/>
    <div className="project-popup code-block dark-theme" onClick={() => onClick(index)}>
      <div className="project-details">
        <CoreInformation data={data} />
        <TechStack data={data} />
        <Description data={data} />
      </div>
    </div>
  </>
)};

export default ProjectPopup ;
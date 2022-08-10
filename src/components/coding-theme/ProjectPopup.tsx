import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Blocker from './Blocker';
import LinkRenderer from '../LinkRenderer';
import { ProjectData } from '../../data/experienceData';

import '../../styles/coding-theme/project.scss';
import '../../App.scss';

type ProjectProps = {
  data: ProjectData;
  closePopup: () => void;
};

type DataProps = {
  data: ProjectData;
};

const handleEscapePress = (event: KeyboardEvent, onEscapePress: () => void) => {
  if (event.keyCode === 27) {
    onEscapePress();
  }
};

const CoreInformation = ({data}: DataProps) => (
  <>
    <div className="tag">{'<BasicInfo>'}</div>
    <div className="indented-text">
      <div>{data.name}</div>
      <div>{data.role}</div>
      <div>{data.from} - {data.to}</div>
    </div>
    <div className="tag">{'</BasicInfo>'}</div>
  </>
);

const TechStack = ({data}: DataProps) => (
    <>
      <div className="tag">{'<TechStack>'}</div>
      <div className="tech-stack-list">
        {data.techStack.map((t, idx) => <li className="tech-stack-item" key={idx}>{t}</li>)}
      </div>
      <div className="tag">{'</TechStack>'}</div>
    </>
);

const Description = ({data}: DataProps) => (
  <>
    <div className="tag">{'<Description>'}</div>
    <ReactMarkdown className="description indented-text" renderers={{link: LinkRenderer}}>
      {data.description}
    </ReactMarkdown>
    <div className="tag">{'</Description>'}</div>
  </>
);

const ProjectPopup = ({data, closePopup}: ProjectProps) => {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      handleEscapePress(event, closePopup);
    });
  });

  return (
  <>
    <Blocker closePopup={closePopup} />
    <div className="project-popup code-block dark-theme">
      <div className="project-details">
        <div className="project-popup-close" onClick={closePopup}>
          <FontAwesomeIcon icon={['far', 'times-circle']} size="lg" />
        </div>
        <CoreInformation data={data} />
        <TechStack data={data} />
        <Description data={data} />
      </div>
    </div>
  </>
); };

export default ProjectPopup ;

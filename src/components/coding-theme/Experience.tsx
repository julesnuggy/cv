import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactMarkdown from 'react-markdown';

import Project from './Project';
import ProjectPopup from './ProjectPopup';
import { ExperienceData } from '../../data/experienceData';
import '../../styles/coding-theme/experience.scss';
import '../../App.scss';

type ExperienceProjectsProps = {
  data: ExperienceData;
  expandedProjects: number[];
  handleProjectClick: (index: number) => void;
  handleClosePopup: () => void
}

type ExperienceProps = {
  data: ExperienceData;
};

const ExperienceProjects = ({ data, expandedProjects, handleProjectClick, handleClosePopup }: ExperienceProjectsProps) => {
  return (
    <div className="projects-container">
      {data.projects.map((p, idx) =>
        <div className="project-container" key={`${data.employer}-${p.name}-${idx}`}>
          <Project data={p} index={idx} onClick={handleProjectClick} />
          <CSSTransition timeout={200} in={expandedProjects.includes(idx)} classNames="project-popup" key={idx}>
            <>
              {
                expandedProjects.includes(idx) &&
                  <ProjectPopup
                      data={p}
                      key={`pp-${idx}`}
                      closePopup={handleClosePopup}
                  />
              }
            </>
          </CSSTransition>
        </div>
      )}
    </div>
  )
}

const Experience = ({data}: ExperienceProps) => {
  const [ expandedProjects, setExpandedProjects ] = useState([-1]);

  const handleProjectClick = (index: number) => {
    if (expandedProjects.includes(index)) {
      const newArray = expandedProjects.filter((p) => p !== index);
      setExpandedProjects(newArray);
    } else {
      setExpandedProjects([index]);
    }
  };

  const handleClosePopup = () => (
    setExpandedProjects([-1])
  );

  return (
    <div className="experience">
      <div className="experience-title">
        {data.employer} || {data.from} - {data.to} || {data.location}
      </div>
      <ReactMarkdown className="code-block" source={data.summary} />
      <ExperienceProjects
        data={data}
        expandedProjects={expandedProjects}
        handleProjectClick={handleProjectClick}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
};

export default Experience;

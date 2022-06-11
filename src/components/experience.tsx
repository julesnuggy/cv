import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactMarkdown from 'react-markdown';

import Project from './project';
import ProjectPopup from './projectPopup';
import { ExperienceData } from '../data/experienceData';
import '../styles/experience.scss';
import '../App.scss';

type EmployerCardProps = {
  data: ExperienceData;
};

const Experience = ({data}: EmployerCardProps) => {
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
      <div className="project-container">
        {data.projects.map((p, idx) =>
          <div key={`${data.employer}-${p.name}-${idx}`}>
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
    </div>
  );
};

export default Experience;

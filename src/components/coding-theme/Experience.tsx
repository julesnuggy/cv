import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactMarkdown from 'react-markdown';

import Project from './Project';
import ProjectPopup from './ProjectPopup';
import { ExperienceData } from '../../data/experienceData';
import '../../styles/coding-theme/experience.scss';
import '../../App.scss';

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
    </div>
  );
};

export default Experience;

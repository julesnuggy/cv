import React, { useState, useEffect } from 'react';
import '../styles/experience.css';
import Project from './project';
import { ExperienceData } from '../data/experienceData';
import { CSSTransition } from 'react-transition-group';
import ProjectPopup from './projectPopup';

type EmployerCardProps = {
  data: ExperienceData;
}

const Experience = ({data}: EmployerCardProps) => {
  const [ expandedProjects, setExpandedProjects ] = useState([-1]);

  const handleProjectClick = (index: number) => {
    if(expandedProjects.includes(index)) {
      const newArray = expandedProjects.filter(p => p !== index);
      setExpandedProjects(newArray);
    } else {
      setExpandedProjects([index]);
    }
  };

  useEffect(() => console.log('expandedProjects', expandedProjects));

  return (
  <div className="experience">
    <div className="experience-title">
      {data.employer} || {data.from} - {data.to} || {data.location}
    </div>
    <div className="experience-summary">{data.summary}</div>
    <div className="project-container">
      {data.projects.map((p, idx) =>
        <>
          <Project data={p} key={idx} index={idx} onClick={handleProjectClick} />
          <CSSTransition timeout={200} in={expandedProjects.includes(idx)} classNames="project-popup" key={idx}>
            <>
              {
                expandedProjects.includes(idx) &&
                <ProjectPopup data={p} key={idx} index={idx} onClick={handleProjectClick} />
              }
            </>
          </CSSTransition>
        </>
      )}
    </div>
  </div>
)};

export default Experience;
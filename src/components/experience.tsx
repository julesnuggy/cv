import React from 'react';
import '../styles/experience.css';
import Project from './project';
import { ExperienceData } from '../data/experienceData';

type EmployerCardProps = {
  data: ExperienceData;
}

const Experience = ({data}: EmployerCardProps) => (
  <div className="experience">
    <div className="experience-title">
      {data.employer} || {data.from} - {data.to} || {data.location}
    </div>
    <hr className="experience-break-line"/>
    <div className="experience-summary">{data.summary}</div>
    <div className="project-container">
      {
        data.projects.map((p, idx) => <Project data={p} key={idx} />)
      }
    </div>
  </div>
);

export default Experience;
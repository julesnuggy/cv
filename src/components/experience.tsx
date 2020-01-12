import React from 'react';
import '../styles/experience.css';
import Project from './project';

type EmployerCardProps = {
  employer: string;
  from: number;
  to: number | string;
  location: string;
}

const Experience = ({employer, from, to, location}: EmployerCardProps) => (
  <div className="experience">
    <div className="experience-title">
      {employer} || {from} - {to} || {location}
    </div>
    <hr className="experience-break-line"/>
    <div className="project-container">
      <Project name="Project One" role="Developer" from={2019} to="present" />
      <Project name="Project Two" role="Developer" from={2019} to={2019} />
      <Project name="Project Three" role="Developer" from={2018} to={2018} />
      <Project name="Project Four" role="Developer" from={2018} to={2018} />
      <Project name="Project Five" role="Developer" from={2018} to={2018} />
    </div>
  </div>
);

export default Experience;
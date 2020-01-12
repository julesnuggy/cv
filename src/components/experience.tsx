import React from 'react';
import '../styles/experience.css';

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
    <div className="experience-details">
      PLACEHOLDER
    </div>
    <div className="experience-details">
      PLACEHOLDER
    </div>
    <div className="experience-details">
      PLACEHOLDER
    </div>
  </div>
);

export default Experience;
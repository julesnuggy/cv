import React from 'react'
import ReactMarkdown from 'react-markdown';

import Section from './section';
import '../../styles/ff-theme/sectionExperience.scss';

type TitleValueData = {
  title: string;
  value: string;
}

type ExperienceDataProps = {
  title: string;
  description: string;
  techStack?: string[];
}

type SectionExperienceProps = {
  title: string;
  avatar_src: any;
  summary_items: TitleValueData[];
  experience_data: ExperienceDataProps[];
}

type TechStackProps = {
  techStack?: string[]
}
const TechStack = ({ techStack }: TechStackProps) => {
  if (!techStack) {
    return null;
  }

  return (
    <div>
      <div>Tech Stack:</div>
      {techStack.map((t, idx) => <li key={idx}>{t}</li>)}
    </div>
  )
}

const SectionExperience = ({ title, avatar_src, summary_items, experience_data }: SectionExperienceProps) => {
  return (
    <Section title={title}>
      <div className="ff-experience-container">
        <div className="experience-summary">
          <img className="summary-avatar" src={avatar_src} alt="DetailedImageAlt"/>
          <div className="summary-items">
            {summary_items.map(item => (
              <p className="summary-item">
                <span className="item-title">{item.title}</span>
                <span className="item-value">{item.value}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="experience-data-container">
          {experience_data.map(data => (
            <div className="experience-data">
              <Section title={data.title}>
                <ReactMarkdown className="data-description" source={data.description} />
                <TechStack techStack={data.techStack} />
              </Section>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default SectionExperience;

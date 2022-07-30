import React from 'react'
import ReactMarkdown from 'react-markdown';

import Section from './Section';
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
    <div className="data-tech-stack">
      <p>Tech Stack:</p>
      <ul>
          {techStack.map((t, idx) => <li key={idx}>{t}</li>)}
      </ul>
    </div>
  )
}

const SectionExperience = ({ title, avatar_src, summary_items, experience_data }: SectionExperienceProps) => {
  return (
    <>
      <Section title={title}>
        <div className="experience-summary">
          <img className="summary-avatar" src={avatar_src} alt="DetailedImageAlt"/>
          <div className="summary-items">
            {summary_items.map((item, idx) => (
              <p className="summary-item" key={`${item}-${idx}`}>
                <span className="item-title">{item.title}</span>
                <span className="item-value">{item.value}</span>
              </p>
            ))}
          </div>
        </div>
      </Section>
      {experience_data.map((data, idx) => (
        <div className="experience-data" key={`${data.title}-${idx}`}>
          <Section title={data.title}>
            <ReactMarkdown className="data-description" source={data.description} />
            <TechStack techStack={data.techStack} />
          </Section>
        </div>
      ))}
    </>
  )
}

export default SectionExperience;

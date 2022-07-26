import React from 'react'
import ReactMarkdown from 'react-markdown';

import Section from './section';
import '../../styles/ff-theme/sectionDetailed.scss';

type TitleValueData = {
  title: string;
  value: string;
}

type DetailedDataProps = {
  title: string;
  description: string;
  techStack?: string[];
}

type SectionDetailedProps = {
  title: string;
  avatar_src: any;
  summary_items: TitleValueData[];
  detailed_data: DetailedDataProps[];
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
      {techStack.map((t, idx) => <li className="tech-stack-item" key={idx}>{t}</li>)}
    </div>
  )
}

const SectionDetailed = ({ title, avatar_src, summary_items, detailed_data }: SectionDetailedProps) => {
  return (
    <Section title={title}>
      <div className="detailed-container">
        <div className="detailed-summary">
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

        <div className="detailed-data">
          {detailed_data.map(data => (
            <div className="data-container">
              <Section title={data.title}>
                <ReactMarkdown className="data-value" source={data.description} />
                <TechStack techStack={data.techStack} />
              </Section>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default SectionDetailed;

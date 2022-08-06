import React from 'react'
import ReactMarkdown from 'react-markdown';

import Section from './Section';
import '../../styles/ff-theme/sectionBasic.scss';

type Stat = {
  title: string;
  current: string | number;
  max?: string | number;
}

type SectionBasicProps = {
  section: string;
  avatar_src: any;
  stats: Stat[];
  free_text?: string;
}

const SectionBasic = ({ section, avatar_src, stats, free_text }: SectionBasicProps) => {
  return (
    <Section title={section}>
      <div className='basic-container'>
        <img className="basic-avatar" src={avatar_src} alt="BasicImageAlt"/>

        <div className="basic-stats">
          {stats.map((stat, idx) => (
            <BasicStatContainer
              title={stat.title}
              current={stat.current}
              max={stat.max}
              isLong={stat.title === "NA"}
              key={`${stat.title}-${idx}`} />
          ))}
        </div>
        {free_text && <ReactMarkdown className="basic-free-text" source={free_text} />}
      </div>
    </Section>
  )
}

type BasicStatProps = {
  title: string;
  current: number | string;
  max?: number | string;
  isLong?: boolean;
}

const BasicStatContainer = ({ title, current, max, isLong }: BasicStatProps) => {
  const containerClass = isLong ? "basic-stat-container long-stat" : "basic-stat-container"

  return (
    <p className={containerClass}>
      <span className="basic-stat-title">{title}</span>
      <span className="basic-stat-current">{current}</span>
      {max && <span className="basic-stat-divider">/</span>}
      {max && <span className="basic-stat-max">{max}</span>}
    </p>
  )
}

export default SectionBasic;

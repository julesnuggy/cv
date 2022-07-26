import React from 'react'

import Section from './section';
import '../../styles/ff-theme/sectionBasic.scss';

type Stat = {
  title: string;
  current: string | number;
  max?: string | number;
}

type SectionBasicProps = {
  section: string;
  title: string;
  subtitle: string;
  avatar_src: any;
  stats: Stat[];
}

const SectionBasic = ({ section, title, subtitle, avatar_src, stats }: SectionBasicProps) => {
  return (
    <Section title={section}>
      <div className='basic-container'>
        <div className="basic-title">{title}</div>
        <p><span className="basic-subtitle">{subtitle}</span></p>
        <img className="basic-avatar" src={avatar_src} alt="BasicImageAlt"/>

        <div className="basic-stats">
          {stats.map((stat, idx) => (
            <BasicStatContainer title={stat.title} current={stat.current} max={stat.max} key={`${stat.title}-${idx}`} />
          ))}
        </div>
      </div>
    </Section>
  )
}

type BasicStatProps = {
  title: string;
  current: number | string;
  max?: number | string;
}

const BasicStatContainer = ({ title, current, max }: BasicStatProps) => (
  <p>
    <span className="basic-stat-container">
      <span className="basic-stat-title">{title}</span>
      <span className="basic-stat-current">{current}</span>
      {max && <span className="basic-stat-divider">/</span>}
      {max && <span className="basic-stat-max">{max}</span>}
    </span>
  </p>
)

export default SectionBasic;

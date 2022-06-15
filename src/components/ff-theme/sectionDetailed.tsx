import React from 'react'

import Section from './section';
import '../../styles/ff-theme/sectionDetailed.scss';

type TitleValueData = {
  title: string;
  value: string;
}

type SectionDetailedProps = {
  section: string;
  avatar_src: any;
  summary_items: TitleValueData[];
  detailed_data: TitleValueData[];
}

const SectionDetailed = ({ section, avatar_src, summary_items, detailed_data }: SectionDetailedProps) => {
  return (
    <Section title={section}>
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
              <p className="data-title">{data.title}</p>
              <p className="data-value">{data.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default SectionDetailed;

import React from 'react'

import Section from './section';
import profile_photo from '../../assets/profile_photo.jpg';
import '../../styles/ff-theme/status.scss';

const Status = () => {
  return (
      <Section title="Status">
        <div className='status-container'>
          <div className="character-name">Julian Ng</div>
          <p><span className="stat-title">He / Him</span></p>
          <img className="character-avatar" src={profile_photo} alt="Julian Ng"/>

          <div className="stats">
            <StatContainer title="LV" current={86} />
            <StatContainer title="HP" current={7777} max={7777} />
            <StatContainer title="MP" current={888} max={888} />
          </div>
        </div>
      </Section>
  )
}

type StatContainerProps = {
  title: string;
  current: number;
  max?: number;
}

const StatContainer = ({ title, current, max }: StatContainerProps) => (
  <p>
    <div className="stat-value-container">
      <span className="stat-title">{title}</span>
      <span className="stat-current">{current}</span>
      {max && <span className="stat-divider">/</span>}
      {max && <span className="stat-max">{max}</span>}
    </div>
  </p>
)

export default Status;

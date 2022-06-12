import React from 'react'
import Card from './card';

import Section from './section';
import profile_photo from '../../assets/profile_photo.jpg';
import '../../styles/ff-theme/status.scss';


const Status = () => {
  return (
      <Section title="Status">
        <div className='status-container'>
          <div className="character-name">Julian Ng</div>
          <p><span className="stats-title">He / Him</span></p>
          <img className="character-avatar" src={profile_photo} alt="Julian Ng"/>

          <div className="stats">
            <p><span className="stats-title">LV</span> <span>99</span></p>
            <p><span className="stats-title">HP</span> <span>9999/9999</span></p>
            <p><span className="stats-title">MP</span> <span>999/999</span></p>
          </div>
        </div>
      </Section>
  )
}

export default Status;

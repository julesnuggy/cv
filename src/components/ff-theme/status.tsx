import React from 'react'
import Card from './card';

import SectionTitle from './sectionTitle';
import profile_photo from '../../assets/profile_photo.jpg';
import '../../styles/ff-theme/status.scss';


const Status = () => {
  return (
    <Card>
      <SectionTitle title="Status" />
      <div className="core-stats">

        <div className="character">
          <div className="name">Julian Ng (He / Him)</div>
          <img className="avatar" src={profile_photo} alt="Julian Ng"/>
        </div>

        <div className="stats">
          <div className="stats-item">
            <span className="stats-title">LV</span> <span>99</span>
          </div>
          <div className="stats-item">
            <span className="stats-title">HP</span> <span>9999/9999</span>
          </div>
          <div className="stats-item">
            <span className="stats-title">MP</span> <span>9999/9999</span>
          </div>
        </div>

      </div>
    </Card>
  )
}

export default Status;

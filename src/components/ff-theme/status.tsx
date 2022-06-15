import React from 'react'

import SectionBasic from './sectionBasic';
import profile_photo from '../../assets/profile_photo.jpg';

const Status = () => {
  return (
    <>
      <SectionBasic
        section="Status"
        title="Julian Ng"
        subtitle="He / Him"
        avatar_src={profile_photo}
        stats={[
          {
            title: 'LV',
            current: 86
          },
          {
            title: 'HP',
            current: 7777,
            max: 7777
          },
          {
            title: 'MP',
            current: 888,
            max: 888,
          }
        ]}
      />
    </>
  )
}

export default Status;

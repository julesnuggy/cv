import React from 'react'

import SectionBasic from './SectionBasic';
import basic_data from '../../data/basicData.json';
import profile_photo from '../../assets/profile_photo.jpg';

const Status = () => {
  return (
    <>
      <SectionBasic
        section="Status"
        title={basic_data.name}
        subtitle={basic_data.pronouns}
        avatar_src={profile_photo}
        stats={basic_data.stats}
        free_text={basic_data.bio}
      />
    </>
  )
}

export default Status;

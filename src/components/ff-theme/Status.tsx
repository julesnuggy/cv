import React from 'react'

import SectionBasic from './SectionBasic';
import basic_data from '../../data/basicData.json';
import profile_photo from '../../assets/profile_photo.jpg';

const Status = () => {
  const listData = {
    'Key Strengths': basic_data.keyStrengths,
    'Methods & Models': basic_data.methodsModels,
    'Favourite Tech': basic_data.favouriteTech
  }

  return (
    <>
      <SectionBasic
        section="Status"
        avatarSrc={profile_photo}
        stats={basic_data.stats}
        bio={basic_data.bio}
        listData={listData}
      />
    </>
  )
}

export default Status;

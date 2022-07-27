import React from 'react';

import AboutMe from '../components/aboutMe';
import Experience from '../components/coding-theme/experience';
import Header from '../components/coding-theme/header';
import data from '../data/experienceData.json';

type props = {
  screenSize: number
}

const ClassicLayout = ({screenSize}: props) => {
  return (
    <>
      <Header/>
      <AboutMe screenSize={screenSize}/>
      <div className="experience-container">
        {data.map((d) => <Experience data={d} key={d.employer}/>)}
      </div>
    </>
  )
}

export default ClassicLayout;

import React from 'react';

import AboutMe from '../components/coding-theme/AboutMe';
import Experience from '../components/coding-theme/Experience';
import Header from '../components/coding-theme/Header';
import data from '../data/experienceData.json';

type props = {
  screenSize: number
}

const CodingLayout = ({screenSize}: props) => {
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

export default CodingLayout;

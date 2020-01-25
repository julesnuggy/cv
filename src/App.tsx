import React, { useEffect, useState } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import AboutMe from './components/aboutMe';
import Header from './components/header';
import Experience from './components/experience';
import data from './data/experienceData.json';

library.add(faUser, faMapMarkedAlt, faLaptopCode, faAddressCard, faTimesCircle, faPlusSquare, faMinusSquare, fab);

const App: React.FC = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  });

  return (
    <div className="app-body">
      <Header />
      <AboutMe screenSize={screenSize} />
      <div className="experience-container">
        {data.map((d, idx) => <Experience data={d} key={`e-${idx}`} />)}
      </div>
    </div>
  );
};

export default App;

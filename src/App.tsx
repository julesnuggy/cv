import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import AboutMe from './components/aboutMe';
import Header from './components/header';
import Experience from './components/experience';
import data from './data/experienceData.json';

library.add(faUser, faMapMarkedAlt, faLaptopCode, faAddressCard, fab);

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Header />
      <AboutMe />
      <div className="experience-container">
        {data.map((d, idx) => <Experience data={d} key={`e-${idx}`} />)}
      </div>
    </div>
  );
};

export default App;

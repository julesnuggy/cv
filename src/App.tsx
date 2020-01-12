import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header';
import Experience from './components/experience';
import data from './data/experienceData.json';

library.add(faUser, faMapMarkedAlt, faLaptopCode, faAddressCard);

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Header />
      <div className="experience-container">
        {data.map((d, idx) => <Experience data={d} key={idx} />)}
      </div>
    </div>
  );
};

export default App;

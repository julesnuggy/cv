import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header';
import Experience from './components/experience';

library.add(faUser, faMapMarkedAlt, faLaptopCode, faAddressCard);

const App: React.FC = () => {
  return (
    <>
      <body className="app-body">
        <Header />
        <div className="experience-container">
          <Experience employer="Softwire" from={2018} to="current" location="London, UK" />
          <Experience employer="Makers Academy" from={2017} to={2018} location="London, UK" />
        </div>
      </body>
    </>
  );
};

export default App;

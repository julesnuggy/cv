import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.scss';
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
    <Router>
        <div className="app-body">
        <div>
          <NavLink to='/cv'>Default</NavLink>
          <NavLink to='/ff-theme'>FF Theme</NavLink>
        </div>
        <Header />
        <Routes>
          <Route path='/cv' element={<AboutMeSection screenSize={screenSize} />} />
          <Route path='/ff-theme' element={<div>FF Theme</div>} />
        </Routes>
        </div>
    </Router>
  );
};

type props = {
  screenSize: number
}


const AboutMeSection = ({screenSize}: props) => (
  <>
    <AboutMe screenSize={screenSize} />
    <div className="experience-container">
      {data.map((d) => <Experience data={d} key={d.employer} />)}
    </div>
  </>
)

export default App;

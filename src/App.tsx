import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faCode,
  faGamepad,
  faLaptopCode,
  faMapMarkedAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare, faPlusSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.scss';
import { HOME_URL } from './components/constants';
import AboutMe from './components/aboutMe';
import Experience from './components/coding-theme/experience';
import History from './components/ff-theme/history';
import Header from './components/coding-theme/header';
import data from './data/experienceData.json';
import ThemeSelector from './components/themeSelector';
import Status from './components/ff-theme/status';

library.add(
  faAddressCard,
  faCode,
  faGamepad,
  faLaptopCode,
  faMapMarkedAlt,
  faMinusSquare,
  faPlusSquare,
  faTimesCircle,
  faUser,
  fab,
);


const App: React.FC = () => {
  const isHome = window.location.pathname === HOME_URL;
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [theme, setTheme] = useState( isHome ? 'coding' : 'ff-theme')

  const appBodyClass = theme === 'coding' ? 'app-body' : 'app-body-ff'

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  });

  return (
    <Router>
        <div className={appBodyClass}>
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path={HOME_URL} element={<ClassicLayout screenSize={screenSize} />} />
          <Route path={`${HOME_URL}/ff-theme`} element={<FFLayout />} />
        </Routes>
        </div>
    </Router>
  );
};

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

const FFLayout = () => {
  return (
    <>
      <Status />
      <History />
    </>
  )
}

export default App;

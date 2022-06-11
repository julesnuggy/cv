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
import AboutMe from './components/aboutMe';
import Experience from './components/experience';
import Header from './components/header';
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
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [theme, setTheme] = useState('coding')

  const appBodyClass = theme === 'coding' ? 'app-body' : 'app-body-ff'

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  });

  return (
    <Router>
        <div className={appBodyClass}>
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <Header />
        <Routes>
          <Route path='/cv' element={<ClassicLayout screenSize={screenSize} />} />
          <Route path='/ff-theme' element={<FFLayout />} />
        </Routes>
        </div>
    </Router>
  );
};

type props = {
  screenSize: number
}


const ClassicLayout = ({screenSize}: props) => (
  <>
    <AboutMe screenSize={screenSize} />
    <div className="experience-container">
      {data.map((d) => <Experience data={d} key={d.employer} />)}
    </div>
  </>
)

const FFLayout = () => (
  <>
    <Status />
  </>
)

export default App;

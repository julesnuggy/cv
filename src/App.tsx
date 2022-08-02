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
import { FF_THEME_URL, HOME_URL } from './components/constants';
import ThemeSelector from './components/ThemeSelector';
import CodingLayout from './layouts/CodingLayout';
import FFLayout from './layouts/FFLayout';

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
  const isHome = [HOME_URL, `${HOME_URL}/`].includes(window.location.pathname);
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
          <Route path={HOME_URL} element={<CodingLayout screenSize={screenSize} />} />
          <Route path={FF_THEME_URL} element={<FFLayout />} />
        </Routes>
        </div>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useNavigate,
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
import { CODING_THEME_URL, FF_THEME_URL, THEME } from './components/constants';
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
  const navigate = useNavigate();
  const [theme, setTheme] = useState(THEME.CODING)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const appBodyClass = theme === THEME.CODING ? 'app-body' : 'app-body-ff'

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  });

  useEffect(() => {
    if (window.location.hash === `#${FF_THEME_URL}`) {
      navigate(FF_THEME_URL);
      setTheme(THEME.FF);
    }
    else {
      navigate(CODING_THEME_URL);
      setTheme(THEME.CODING);
    }
  }, [navigate, setTheme])

  return (
    <div className={appBodyClass}>
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path={CODING_THEME_URL} element={<CodingLayout screenSize={screenSize} />} />
        <Route path={FF_THEME_URL} element={<FFLayout />} />
      </Routes>
    </div>
  );
};

export default App;

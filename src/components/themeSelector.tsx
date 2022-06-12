import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {HOME_URL} from './constants';
import '../styles/themeSelector.scss'

type ThemeSelectorProps = {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  return (
    <div className='container'>
      Theme:
      <ThemeButton
        activeTheme={theme}
        onClick={() => setTheme('coding')}
        icon='code'
        theme='coding'
        destination={HOME_URL}
      />
      <ThemeButton
        activeTheme={theme}
        onClick={() => setTheme('ff-theme')}
        icon='gamepad'
        theme='ff-theme'
        destination={`${HOME_URL}/ff-theme`}
      />
    </div>
  )
}

type ThemeButtonProps = {
  activeTheme: string;
  onClick: () => void;
  icon: IconName;
  theme: string;
  destination: string;
}

const ThemeButton = ({ activeTheme, onClick, icon, theme, destination }: ThemeButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(theme === activeTheme);
  }, [theme, setIsActive, activeTheme])
  const buttonClasses = isActive ? 'themeButton selected' : 'themeButton'

  return (
    <button className={buttonClasses} onClick={onClick}>
      <NavLink to={destination}>
        <FontAwesomeIcon icon={icon} className='icon' size='lg' />
      </NavLink>
    </button>
  )
}

export default ThemeSelector;

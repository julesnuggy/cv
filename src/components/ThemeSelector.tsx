import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {HOME_URL} from './constants';
import pointer from '../assets/pointer_animated.gif';

import '../styles/themeSelector.scss'

type ThemeSelectorProps = {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  return (
    <div className='themeSelector'>
      Theme:
      <ThemeButton
        activeTheme={theme}
        onClick={() => setTheme('coding')}
        icon='code'
        theme='coding'
        destination={HOME_URL}
      />
      <div className='ffThemeContainer'>
        <ThemeButton
          activeTheme={theme}
          onClick={() => setTheme('ff-theme')}
          icon='gamepad'
          theme='ff-theme'
          destination={`${HOME_URL}/ff-theme`}
        />
        <div className='themePointerContainer'>
          <img className='themePointer' src={pointer} alt={'<'} />
          <span>NEW!</span>
        </div>
      </div>
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
  const navigate = useNavigate()

  const handleClick = () => {
    onClick()
    navigate(destination)
  }

  useEffect(() => {
    setIsActive(theme === activeTheme);
  }, [theme, setIsActive, activeTheme])
  const buttonClasses = isActive ? 'themeButton active' : 'themeButton'

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className='icon' size='lg' />
    </button>
  )
}

export default ThemeSelector;

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CODING_THEME_URL, FF_THEME_URL } from './constants';
import pointer from '../assets/pointer_animated.gif';

import '../styles/themeSelector.scss'

type ThemeSelectorProps = {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const [isPointerVisible, setIsPointerVisible] = useState(true)
  const handleClickCodingTheme = () => {
    setTheme('coding');
    setIsPointerVisible(true);
  }
  const handleClickFFTheme = () => {
    setTheme('ff-theme');
    setIsPointerVisible(false);
  }

  useEffect(() => {
    theme === 'coding' ? setIsPointerVisible(true) : setIsPointerVisible(false)
  }, [theme, setIsPointerVisible])


  return (
    <div className='themeSelector'>
      Theme:
      <ThemeButton
        activeTheme={theme}
        onClick={handleClickCodingTheme}
        icon='code'
        theme='coding'
        destination={CODING_THEME_URL}
      />
      <div className='ffThemeContainer'>
        <ThemeButton
          activeTheme={theme}
          onClick={handleClickFFTheme}
          icon='gamepad'
          theme='ff-theme'
          destination={FF_THEME_URL}
        />
        {isPointerVisible && <div className='themePointerContainer'>
            <img className='themePointer' src={pointer} alt={'<'}/>
            <span>NEW!</span>
            <span className="themeSubtitle">(beta)</span>
        </div>}
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

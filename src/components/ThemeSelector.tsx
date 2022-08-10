import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CODING_THEME_URL, FF_THEME_URL, THEME } from './constants';
import pointer from '../assets/pointer_animated.gif';

import '../styles/themeSelector.scss'

type ThemeSelectorProps = {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const [isPointerVisible, setIsPointerVisible] = useState(true)
  const handleClickCodingTheme = () => {
    setTheme(THEME.CODING);
    setIsPointerVisible(true);
  }
  const handleClickFFTheme = () => {
    setTheme(THEME.FF);
    setIsPointerVisible(false);
  }

  useEffect(() => {
    theme === THEME.CODING ? setIsPointerVisible(true) : setIsPointerVisible(false)
  }, [theme, setIsPointerVisible])


  return (
    <div className='themeSelector'>
      Theme:
      <ThemeButton
        activeTheme={theme}
        onClick={handleClickCodingTheme}
        icon='code'
        theme={THEME.CODING}
        destination={CODING_THEME_URL}
      />
      <div className='ffThemeContainer'>
        <ThemeButton
          activeTheme={theme}
          onClick={handleClickFFTheme}
          icon='gamepad'
          theme={THEME.FF}
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
  activeTheme: THEME;
  onClick: () => void;
  icon: IconName;
  theme: THEME;
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

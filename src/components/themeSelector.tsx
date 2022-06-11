import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

type props = {
  setIsClassicTheme: (val: boolean) => void
}

const ThemeSelector = ({ setIsClassicTheme }: props) => {
  return (
    <div>
      Theme:
      <button onClick={() => setIsClassicTheme(true)}>
        <NavLink to='/cv'>
          <FontAwesomeIcon icon='code' className='icon' size='lg' />
        </NavLink>
      </button>
      <button onClick={() => setIsClassicTheme(false)}>
        <NavLink to='/ff-theme'>
          <FontAwesomeIcon icon='gamepad' className='icon' size='lg' />
        </NavLink>
      </button>
    </div>
  )
}

export default ThemeSelector;

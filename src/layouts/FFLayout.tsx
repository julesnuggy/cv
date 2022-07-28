import React, { useState } from 'react';

import { MAIN_MENU_ITEMS } from '../components/constants';
import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';
import experience_data from '../data/experienceData.json';

import '../styles/layouts/FFLayout.scss';

type ActiveContentProps = {
  activeMainMenuItem: MAIN_MENU_ITEMS;
  activeEmployerMenuItem: string;
}

const ActiveContent = ({ activeMainMenuItem, activeEmployerMenuItem }: ActiveContentProps) => {
  switch (activeMainMenuItem) {
    case MAIN_MENU_ITEMS.STATUS:
      return <Status/>;
    case MAIN_MENU_ITEMS.ABILITIES:
      return <History activeEmployerMenuItem={activeEmployerMenuItem} />
    default:
      return null;
  }
}

const FFLayout = () => {
  const [ activeMainMenu, setActiveMainMenu ] = useState(MAIN_MENU_ITEMS.STATUS)
  const [ activeEmployerMenu, setActiveEmployerMenu ] = useState(experience_data[0].employer)
  // Only want to display software employers in Abilities section
  const recentEmployers = Object.values(experience_data.slice(0, 3).map(data => data.employer))

  const AbilitiesSubMenu = () => activeMainMenu === MAIN_MENU_ITEMS.ABILITIES
    ? <Menu
        menuItems={recentEmployers}
        onItemSelect={(menuItem: string) => setActiveEmployerMenu(menuItem)}
        activeContent={activeEmployerMenu}
      />
    : null;

  return (
    <div className="ff-layout">
      <div className="ff-layout-menu">
        <Menu
          menuItems={Object.values(MAIN_MENU_ITEMS)}
          onItemSelect={(menuItem: MAIN_MENU_ITEMS) => setActiveMainMenu(menuItem)}
          activeContent={activeMainMenu}
        />
        <AbilitiesSubMenu />
      </div>
      <div className="ff-layout-content">
        <ActiveContent activeMainMenuItem={activeMainMenu} activeEmployerMenuItem={activeEmployerMenu} />
      </div>
    </div>
  )
}

export default FFLayout;

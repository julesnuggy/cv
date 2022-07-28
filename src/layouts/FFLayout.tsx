import React, { useState } from 'react';

import { MAIN_MENU_ITEMS } from '../components/constants';
import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';
import experience_data from '../data/experienceData.json';

import '../styles/layouts/FFLayout.scss';

type ActiveContentProps = {
  activeMainMenuItem: MAIN_MENU_ITEMS;
  activeEmployerMenuItem: string; // Employment History shown in Abilities Menu
  activeBackgroundMenuItem: string; // Background History shown in Lore Menu
}

const ActiveContent = ({ activeMainMenuItem, activeEmployerMenuItem, activeBackgroundMenuItem }: ActiveContentProps) => {
  switch (activeMainMenuItem) {
    case MAIN_MENU_ITEMS.STATUS:
      return <Status/>;
    case MAIN_MENU_ITEMS.ABILITIES:
      return <History activeMenuItem={activeEmployerMenuItem} />
    case MAIN_MENU_ITEMS.LORE:
      return <History activeMenuItem={activeBackgroundMenuItem} />
    default:
      return null;
  }
}

const FFLayout = () => {
  const [ activeMainMenu, setActiveMainMenu ] = useState(MAIN_MENU_ITEMS.STATUS)

  // Only want to display software employers in Abilities section
  const recentEmployers = Object.values(experience_data.slice(0, 3).map(data => data.employer))
  const [ activeEmployerMenu, setActiveEmployerMenu ] = useState(recentEmployers[0])

  // Only want to display background data in Lore section
  const backgroundHistory = Object.values(experience_data.slice(3).map(data => data.employer))
  const [ activeBackgroundMenu, setActiveBackgroundMenu ] = useState(backgroundHistory[0])

  const AbilitiesSubMenu = () => activeMainMenu === MAIN_MENU_ITEMS.ABILITIES
    ? <Menu
        menuItems={recentEmployers}
        onItemSelect={(menuItem: string) => setActiveEmployerMenu(menuItem)}
        activeContent={activeEmployerMenu}
      />
    : null;

  const LoreSubMenu = () => activeMainMenu === MAIN_MENU_ITEMS.LORE
    ? <Menu
      menuItems={backgroundHistory}
      onItemSelect={(menuItem: string) => setActiveBackgroundMenu(menuItem)}
      activeContent={activeBackgroundMenu}
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
        <LoreSubMenu />
      </div>
      <div className="ff-layout-content">
        <ActiveContent
          activeMainMenuItem={activeMainMenu}
          activeEmployerMenuItem={activeEmployerMenu}
          activeBackgroundMenuItem={activeBackgroundMenu}
        />
      </div>
    </div>
  )
}

export default FFLayout;
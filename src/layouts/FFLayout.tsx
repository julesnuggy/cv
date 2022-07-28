import React, { useState } from 'react';

import { MAIN_MENU_ITEMS } from '../components/constants';
import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';
import experience_data from '../data/experienceData.json';

import '../styles/layouts/FFLayout.scss';

type ActiveContentProps = {
  activeContent: MAIN_MENU_ITEMS;
}

const ActiveContent = ({ activeContent }: ActiveContentProps) => {
  switch (activeContent) {
    case MAIN_MENU_ITEMS.STATUS:
      return <Status/>;
    case MAIN_MENU_ITEMS.ABILITIES:
      return <History />
    default:
      return null;
  }
}

const FFLayout = () => {
  const [ activeContent, setActiveContent ] = useState(MAIN_MENU_ITEMS.STATUS)
  const [ activeSubContent, setActiveSubContent ] = useState(experience_data[0].employer)
  // Only want to display software employers in Abilities section
  const recentEmployers = Object.values(experience_data.slice(0, 3).map(data => data.employer))

  return (
    <div className="ff-layout">
      <div className="ff-layout-menu">
        <Menu
          menuItems={Object.values(MAIN_MENU_ITEMS)}
          onItemSelect={(menuItem: MAIN_MENU_ITEMS) => setActiveContent(menuItem)}
          activeContent={activeContent}
        />
        {activeContent === MAIN_MENU_ITEMS.ABILITIES && <Menu
          menuItems={recentEmployers}
          onItemSelect={(menuItem: string) => setActiveSubContent(menuItem)}
          activeContent={activeSubContent}
        />}
      </div>
      <div className="ff-layout-content">
        <ActiveContent activeContent={activeContent} />
      </div>
    </div>
  )
}

export default FFLayout;

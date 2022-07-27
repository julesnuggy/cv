import React, { useState } from 'react';

import { MENU_ITEMS } from '../components/constants';
import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';

import '../styles/layouts/FFLayout.scss';

type ActiveContentProps = {
  activeContent: MENU_ITEMS;
}

const ActiveContent = ({ activeContent }: ActiveContentProps) => {
  switch (activeContent) {
    case MENU_ITEMS.STATUS:
      return <Status/>;
    case MENU_ITEMS.ABILITIES:
      return <History />
    default:
      return null;
  }
}

const FFLayout = () => {
  const [ activeContent, setActiveContent ] = useState(MENU_ITEMS.STATUS)

  return (
    <div className="ff-layout">
      <div className="ff-layout-menu">
        <Menu onItemSelect={(menuItem: MENU_ITEMS) => setActiveContent(menuItem)} />
      </div>
      <div className="ff-layout-content">
        <ActiveContent activeContent={activeContent} />
      </div>
    </div>
  )
}

export default FFLayout;

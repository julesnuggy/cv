import React from 'react';

import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';

import '../styles/layouts/FFLayout.scss';

const FFLayout = () => {
  return (
    <div className="ff-layout">
      <div className="ff-layout-menu">
        <Menu items={['Status', 'Abilities', 'Lore']} />
      </div>
      <div className="ff-layout-content">
        <Status />
        <History />
      </div>
    </div>
  )
}

export default FFLayout;

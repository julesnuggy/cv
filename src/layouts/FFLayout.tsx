import React from 'react';

import History from '../components/ff-theme/history';
import Menu from '../components/ff-theme/menu';
import Status from '../components/ff-theme/status';

const FFLayout = () => {
  return (
    <>
      <Menu items={['Status', 'Abilities', 'Lore']} />
      <Status />
      <History />
    </>
  )
}

export default FFLayout;

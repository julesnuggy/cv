import React from 'react';

import History from '../components/ff-theme/History';
import Menu from '../components/ff-theme/Menu';
import Status from '../components/ff-theme/Status';

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

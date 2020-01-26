import React from 'react';

import '../styles/blocker.scss';

type BlockerProps = {
  closePopup: () => void;
}

const Blocker = ({closePopup}: BlockerProps) => (
  <div className="blocker" onClick={closePopup} />
);

export default Blocker;

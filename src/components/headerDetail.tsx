import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import '../styles/header.css';

type HeaderDetailProps = {
  icon: FontAwesomeIconProps;
  itemText: string;
}

const HeaderDetail = ({icon, itemText}: HeaderDetailProps) => (
  <div className="header-detail">
    <div className="icon-container">
      <FontAwesomeIcon icon={icon.icon} />
    </div>
    <div>{itemText}</div>
  </div>
);

export default HeaderDetail;
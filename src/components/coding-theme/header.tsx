import React from 'react';

import profile_photo from '../../assets/profile_photo.jpg';
import HeaderDetail from './headerDetail';
import '../../styles/coding-theme/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div>
        <img className="profile-photo" src={profile_photo} alt="Julian Ng"/>
      </div>
      <div className="header-details">
        <HeaderDetail itemText="Julian Ng (He/Him)">
          <FontAwesomeIcon icon="user" className="icon" />
        </HeaderDetail>
        <HeaderDetail itemText="Full-Stack Developer">
          <FontAwesomeIcon icon="laptop-code" className="icon" />
        </HeaderDetail>
        <HeaderDetail itemText="London, UK">
          <FontAwesomeIcon icon="map-marked-alt" className="icon" />
        </HeaderDetail>
        <HeaderDetail itemText="LinkedIn" link="https://www.linkedin.com/in/julian-ng-43589420/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="linkedin" />
        </HeaderDetail>

      </div>
    </div>
  );
};

export default Header;

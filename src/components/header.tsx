import React from 'react';

import profile_photo from '../assets/profile_photo.jpg';
import HeaderDetail from './headerDetail';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div>
        <img className="profile-photo" src={profile_photo} alt="Julian Ng"/>
      </div>
      <div className="header_details">
        <HeaderDetail icon={{icon: "user"}} itemText="Julian Ng"/>
        <HeaderDetail icon={{icon: "laptop-code"}} itemText="Full Stack Developer" />
        <HeaderDetail icon={{icon: "map-marked-alt"}} itemText="London, UK" />
        <HeaderDetail icon={{icon: "address-card"}} itemText="Contact Me" />
      </div>
    </div>
  )
};

export default Header;
import React from 'react';
import profile_photo from '../assets/profile_photo.jpg';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div>
        <img className="profile_photo" src={profile_photo}/>
      </div>
      <div className="header_details">
        <div>Julian Ng</div>
        <div>Full Stack Developer</div>
        <div>London, UK</div>
        <div>Contact Me</div>
      </div>
    </div>
  )
};

export default Header;
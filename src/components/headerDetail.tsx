import React, { ReactNode } from 'react';
import '../styles/header.scss';

type HeaderDetailProps = {
  itemText: string;
  link?: string;
  children?: ReactNode;
};

const HeaderDetail = ({itemText, link, children}: HeaderDetailProps) => {
  return (
    <div className="header-detail">
      <div className="icon-container">
        {children}
      </div>
      {link ? <a href={link} target="_blank">{itemText}</a> : <div>{itemText}</div>}
    </div>
  );
};

export default HeaderDetail;

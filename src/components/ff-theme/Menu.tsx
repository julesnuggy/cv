import React, { useState } from 'react'

import Card from './Card';

import pointer_animated from '../../assets/pointer_animated.gif';
import '../../styles/ff-theme/menu.scss'

type MenuProps = {
  menuItems: string[];
  onItemSelect: (menuItem: any) => void;
  activeContent: string;
}

type MenuItemProps = {
  item: string;
  isFocused: boolean;
  onFocus: () => void;
  activeContent: string;
  onClick: (menuItem: any) => void;
}

const MenuItem = ({ item, isFocused, onFocus, activeContent, onClick }: MenuItemProps) => {
  const itemTextClass = activeContent === item ? 'item-text active-item' : 'item-text'

  return (
    <div className='menu-item-container'>
      <div className='pointer-container'>
        {isFocused && (<img src={pointer_animated} alt='-->' />)}
      </div>
      <button onFocus={onFocus} onPointerOver={onFocus} onClick={() => onClick(item)}>
        <div className={itemTextClass}>{item}</div>
      </button>
    </div>
  );
}

const Menu = ({ menuItems, onItemSelect, activeContent }: MenuProps) => {
  const [ focusIndex, setFocusIndex ] = useState(0);
  const setPointerOnActiveContent = () => setFocusIndex(menuItems.indexOf(activeContent))

  return (
    <div
      className='menu-container'
      onMouseLeave={setPointerOnActiveContent}
      onBlur={setPointerOnActiveContent}
    >
      <Card>
        {menuItems.map((item, idx) => (
          <MenuItem
            key={item}
            item={item}
            isFocused={focusIndex === idx}
            onFocus={() => setFocusIndex(idx)}
            activeContent={activeContent}
            onClick={onItemSelect}
          />
        ))}
      </Card>
    </div>
  )
}

export default Menu
import React, { useState } from 'react'

import Card from './Card';

import pointer_animated from '../../assets/pointer_animated.gif';
import '../../styles/ff-theme/menu.scss'
import { MENU_ITEMS } from '../constants';

type MenuProps = {
  onItemSelect: (menuItem: MENU_ITEMS) => void;
  activeContent: MENU_ITEMS;
}

type MenuItemProps = {
  item: MENU_ITEMS;
  isFocused: boolean;
  onFocus: () => void;
  activeContent: MENU_ITEMS;
  onClick: (menuItem: MENU_ITEMS) => void;
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

const Menu = ({ onItemSelect, activeContent }: MenuProps) => {
  const [ focusIndex, setFocusIndex ] = useState(0);
  const menuItems = Object.values(MENU_ITEMS);
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
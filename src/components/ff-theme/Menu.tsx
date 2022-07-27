import React, { useState } from 'react'

import Card from './Card';

import pointer_animated from '../../assets/pointer_animated.gif';
import '../../styles/ff-theme/menu.scss'
import { MENU_ITEMS } from '../constants';

type MenuProps = {
  onItemSelect: (menuItem: MENU_ITEMS) => void
}

type MenuItemProps = {
  item: MENU_ITEMS;
  isFocused: boolean;
  onFocus: () => void;
  onClick: (menuItem: MENU_ITEMS) => void;
}

const MenuItem = ({ item, isFocused, onFocus, onClick }: MenuItemProps) => (
  <div className='menu-item-container'>
    <div className='pointer-container'>
      {isFocused && (<img src={pointer_animated} alt='-->' />)}
    </div>
    <button onFocus={onFocus} onPointerOver={onFocus} onClick={() => onClick(item)}>
      <div className='item-text'>{item}</div>
    </button>
  </div>
);

const Menu = ({ onItemSelect }: MenuProps) => {
  const [ focusIndex, setFocusIndex ] = useState(0);
  const onFocus = (index: number) => setFocusIndex(index);
  const menuItems = Object.values(MENU_ITEMS);

  return (
    <div className='menu-container'>
      <Card>
        {menuItems.map((item, idx) => (
          <MenuItem
            item={item}
            isFocused={focusIndex === idx}
            onFocus={() => onFocus(idx)}
            onClick={onItemSelect}
          />
        ))}
      </Card>
    </div>
  )
}

export default Menu
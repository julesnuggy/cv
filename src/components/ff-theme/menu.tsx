import React from 'react'
import Card from './card';

import '../../styles/ff-theme/menu.scss'

type MenuProps = {
  items: string[]
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className='menu-container'>
      <Card>
        {items.map(item => (
          <div className='menu-item'>{item}</div>
        ))}
      </Card>
    </div>
  )
}

export default Menu
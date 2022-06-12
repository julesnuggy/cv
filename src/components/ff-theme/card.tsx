import React, {ReactNode} from 'react'

import '../../styles/ff-theme/card.scss';

type Props = {
  children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='ff-card'>
      <div className='ff-card-item'>
        {children}
      </div>
    </div>
  )
}

export default Card;

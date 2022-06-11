import React, {ReactNode} from 'react'

import '../../styles/ff-theme/card.scss';

type Props = {
  isTitle?: boolean;
  children?: ReactNode;
}

const Card = ({ isTitle = false, children }: Props) => {
  return (
    <div className={`ff-card ${isTitle && 'title'}`}>
      <div className='ff-card-item'>
        {children}
      </div>
    </div>
  )
}

export default Card;

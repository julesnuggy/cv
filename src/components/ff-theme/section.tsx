import React, {ReactNode} from 'react'
import Card from './card';

import '../../styles/ff-theme/section.scss'

type Props = {
  title: string;
  children?: ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <div className='section-container'>
      <Card>
        <div className='title-container'>
          <Card>
              {title}
          </Card>
        </div>
        {children}
      </Card>
    </div>
  )
}

export default Section;

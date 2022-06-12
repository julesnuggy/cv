import React, {ReactNode} from 'react'
import Card from './card';

import '../../styles/ff-theme/section.scss'

type Props = {
  title: string;
  children?: ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <Card>
      <div className='title-container'>
        <Card>
            {title}
        </Card>
      </div>
      {children}
    </Card>
  )
}

export default Section;

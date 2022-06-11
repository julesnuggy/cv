import React from 'react'
import Card from './card';

type Props = {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
      <Card isTitle>
        {title}
      </Card>
  )
}

export default SectionTitle;

import React from 'react';

type LinkRendererProps = {
  href: string;
  children: React.ReactChildren;
}
const LinkRenderer = ({ href, children }: LinkRendererProps) => {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default LinkRenderer;

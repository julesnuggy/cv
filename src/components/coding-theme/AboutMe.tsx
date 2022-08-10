import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';

import data from '../../data/basicData.json';

import '../../App.scss';

type aboutMeProps = {
  screenSize: number;
}

type TagListProps = {
  title: string;
  data: string[];
}

const TagList = ({ title, data }: TagListProps) => (
  <div className="tag-wrapper">
    <div className="tag">{`<${title}>`}</div>
    <div className="indented-text">
      <ul>
        {data.map(value => (<li key={value}>{value}</li>))}
      </ul>
    </div>
    <div className="tag">{`</${title}>`}</div>
  </div>
)

const AboutMe = ({screenSize}: aboutMeProps) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const truncateContents = (element: Element) => {
    setIsTruncated(true);
    element.classList.add('truncated');
  };

  const expandContents = (element: Element) => {
    setIsTruncated(false);
    element.classList.remove('truncated');
  };

  useEffect(() => {
    const indentedText = document.getElementsByClassName('indented-text')[0];
    if (screenSize <= 480) {
      truncateContents(indentedText);
    } else {
      expandContents(indentedText);
    }
  },[screenSize]);

  const truncateExpandContents = () => {
    const indentedText = document.getElementsByClassName('indented-text')[0];
    indentedText.classList.contains('truncated') ?
      expandContents(indentedText) :
      truncateContents(indentedText);
  };

  return (
  <div className="about-me code-block dark-theme" onClick={truncateExpandContents}>
    <div className="tag">{'<AboutMe>'}</div>
    <div className="indented-tag">
      <div className="tag">{'<Bio>'}
        <span style={{float: 'right'}}>
          {isTruncated ?
            <FontAwesomeIcon icon={['far', 'plus-square']} className="expand-truncate-icon"/> :
            <FontAwesomeIcon icon={['far', 'minus-square']} className="expand-truncate-icon"/>
          }
        </span>
      </div>
      <ReactMarkdown className="indented-text" source={data.bio} />
      <div className="tag">{'</Bio>'}</div>
      <div className="tag-container">
        <TagList title="CoreValues" data={data.coreValues} />
        <TagList title="PersonalityTrains" data={data.personalityTraits} />
        <TagList title="CodingPrinciples" data={data.codingPrinciples} />
      </div>
    </div>
    <div className="tag">{'</AboutMe>'}</div>
  </div>
)};

export default AboutMe;

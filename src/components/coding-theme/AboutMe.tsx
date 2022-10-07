import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';

import data from '../../data/basicData.json';

import '../../styles/coding-theme/aboutMe.scss';

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

  const getAboutMeSections = () => {
    const indentedText = document.getElementsByClassName('indented-text')[0];
    const tagWrapper = Array.from(document.getElementsByClassName('tag-wrapper'));
    return tagWrapper.concat(indentedText);
  }

  useEffect(() => {
    const elements = getAboutMeSections()

    if (screenSize <= 769) { // $tablet-width
      setIsTruncated(true);
      elements.map(element => element.classList.add('truncated'))
    } else {
      setIsTruncated(false);
      elements.map(element => element.classList.remove('truncated'))
    }
  },[screenSize]);

  const truncateExpandContents = () => {
    const elements = getAboutMeSections()
    setIsTruncated(!isTruncated);
    elements.map(element => element.classList.toggle('truncated'))
  };

  return (
  <div className="about-me code-block dark-theme">
    <div className="tag">
      {'<AboutMe>'}
      <button className="sizeButton" onClick={truncateExpandContents}>
          {isTruncated ?
            <FontAwesomeIcon size="lg" icon={['far', 'plus-square']} className="expand-truncate-icon"/> :
            <FontAwesomeIcon size="lg" icon={['far', 'minus-square']} className="expand-truncate-icon"/>
          }
        </button>
    </div>
    <div className="indented-tag">
      <div className="tag">{'<Bio>'}</div>
      <ReactMarkdown className="indented-text" source={data.bio} />
      <div className="tag">{'</Bio>'}</div>
      <div className="tag-container">
        <TagList title="CoreValues" data={data.coreValues} />
        <TagList title="CodingPrinciples" data={data.codingPrinciples} />
        <TagList title="MethodsModels" data={data.methodsModels} />
        <TagList title="FavouriteTech" data={data.favouriteTech} />
      </div>
    </div>
    <div className="tag">{'</AboutMe>'}</div>
  </div>
)};

export default AboutMe;

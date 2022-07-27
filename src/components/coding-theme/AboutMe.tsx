import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../App.scss';

type aboutMeProps = {
  screenSize: number;
}

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
    <div className="tag">{'<AboutMe>'}
      <span style={{float: 'right'}}>
        {isTruncated ?
          <FontAwesomeIcon icon={['far', 'plus-square']} className="expand-truncate-icon"/> :
          <FontAwesomeIcon icon={['far', 'minus-square']} className="expand-truncate-icon"/>
        }
      </span>
    </div>
    <div className="indented-text">
      I love being a software developer because I enjoy problem solving, working in a trusting and collaborative
      environment, and bringing ideas into reality through elegant code. In 2018, I changed my career as a change
      management consultant to become a software developer by joining Makers Academy. There, I learnt to code in just 4
      months, and started my first job only 1 month after graduating.
      My experience on a wide variety of projects has expanded and bolstered my knowledge of programming best practices,
      architectures, design patterns, and principles. I bring many skills from my consultancy background, including:
      customer engagement, project management, workshop facilitation, business & data analytics, and ideation.

    </div>
    <div className="tag">{'</AboutMe>'}</div>
    <div className="tag-container">
      <div className="tag-wrapper">
        <div className="tag">{'<CoreValues>'}</div>
        <div className="indented-text">
          <li>Communication</li>
          <li>Open Mindedness</li>
          <li>Equity & Diversity</li>
          <li>Courage to Experiment</li>
        </div>
        <div className="tag">{'</CoreValues>'}</div>
      </div>
      <div className="tag-wrapper">
        <div className="tag">{'<PersonalityTraits>'}</div>
        <div className="indented-text">
          <li>Flexible & Adaptable</li>
          <li>Focused & Determined</li>
          <li>Problem Solver</li>
          <li>Proactive</li>
        </div>
        <div className="tag">{'</PersonalityTraits>'}</div>
      </div>
      <div className="tag-wrapper">
        <div className="tag">{'<CodingPrinciples>'}</div>
        <div className="indented-text">
          <li>Commit Often, Perfect Later</li>
          <li>Robustness Through Tests</li>
          <li>Code Reviews Help Everyone</li>
          <li>Pairing Powers Productivity</li>
        </div>
        <div className="tag">{'</CodingPrinciples>'}</div>
      </div>
    </div>
  </div>
)};

export default AboutMe;

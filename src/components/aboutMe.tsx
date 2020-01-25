import React, { useEffect, useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.scss';

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
  },[]);

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
      environment, and bringing ideas into reality through elegant code. I began my professional career
      as a change management consultant but in 2018 I decided I wanted a different career path. I had some very basic
      experience of coding during my management consultant career - mostly writing procedural code in VBA for Excel to
      automate long, repetitive and complex data manipulation and analysis tasks. Though crude and not object-oriented
      (often consisting of functions which were hundreds of lines long...), I found that I most enjoyed these sorts of
      projects. After much deliberation, I put that career aside and applied to Makers Academy to learn to code in just
      4 months, and started my first job as a software developer just 1 month after graduating.
    </div>
    <div className="tag">{'</AboutMe>'}</div>
    <div className="tag">{'<CoreValues>'}</div>
    <div className="indented-text">
      <li>Communication</li>
      <li>Open Mindedness</li>
      <li>Equality & Diversity</li>
      <li>Courage to Experiment</li>
    </div>
    <div className="tag">{'</CoreValues>'}</div>
    <div className="tag">{'<Traits>'}</div>
    <div className="indented-text">
      <li>Flexible & Adaptable</li>
      <li>Focused & Determined</li>
      <li>Problem Solver</li>
      <li>Proactive</li>
    </div>
    <div className="tag">{'</Traits>'}</div>
  </div>
)};

export default AboutMe;

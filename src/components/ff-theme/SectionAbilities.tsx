import React from 'react';

import Section from './Section';
import glowing_star from '../../assets/glowing_star.gif';
import empty_star from '../../assets/star_yellow_border.png';

import '../../styles/ff-theme/sectionAbilities.scss';

type Ability = {
  name: string;
  rating: number;
}

type AbilitiesProps = {
  title: string;
  abilities: Ability[]
}

type StarRatingProps = {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const starRating = Array(5)
  starRating.fill(<img className="star-rating" src={empty_star} alt="*"/>)
  starRating.fill(<img className="star-rating" src={glowing_star} alt="*"/>, 0, rating)

  return (
    <div className="star-rating-container">
      {starRating}
    </div>
  )
}

const SectionAbilities = ({ title, abilities }: AbilitiesProps) => {
  return (
    <Section title={title}>
      {abilities.map(ability => (
        <div className="ability-container">
          <div className="ability-name">
            {ability.name}
          </div>
          <div className="ability-rating">
            <StarRating rating={ability.rating} />
          </div>
        </div>
      ))}
    </Section>
    )
}

export default SectionAbilities;

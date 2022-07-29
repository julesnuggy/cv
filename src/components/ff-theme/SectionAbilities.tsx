import React from 'react';

import Section from './Section';

import '../../styles/ff-theme/sectionAbilities.scss';

type Ability = {
  name: string;
  rating: number;
}

type AbilitiesProps = {
  title: string;
  abilities: Ability[]
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
            {ability.rating}
          </div>
        </div>
      ))}
    </Section>
    )
}

export default SectionAbilities;

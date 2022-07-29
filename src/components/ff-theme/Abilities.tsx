import React from 'react';

import data from '../../data/abilitiesData.json';
import SectionAbilities from './SectionAbilities';

const Abilities = () => {
  const languagesData = data.filter(data => data.type === "Language")
  const frameworksData = data.filter(data => data.type === "Framework")
  const databaseData = data.filter(data => data.type === "Database")
  return (
    <>
      <SectionAbilities abilities={languagesData} title="Languages" />
      <SectionAbilities abilities={frameworksData} title="Frameworks" />
      <SectionAbilities abilities={databaseData} title="Databases" />
    </>
  )
}

export default Abilities;

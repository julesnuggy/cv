import React from 'react'

import SectionExperience from './SectionExperience';
import profile_photo from '../../assets/profile_photo.jpg';
import data from '../../data/experienceData.json';
import { ExperienceData } from '../../data/experienceData';

type HistoryProps = {
  activeEmployerMenuItem: string;
}

type HistoryItemProps = {
  data: ExperienceData;
};

const HistoryItem = ({ data }: HistoryItemProps ) => (
  <SectionExperience
    title={data.employer}
    avatar_src={profile_photo}
    summary_items={[
      {title: 'Role', value: 'Software Engineer'},
      {title: 'From', value: data.from},
      {title: 'To', value: data.to},
    ]}
    experience_data={[
      {title: 'Summary', description: data.summary},
      ...data.projects.map(project => ({
        title: project.name,
        description: project.description,
        techStack: project.techStack,
      })),
    ]}
  />
)

const History = ( { activeEmployerMenuItem }: HistoryProps) => {
  const activeEmployerData = data.filter(d => d.employer === activeEmployerMenuItem)[0]
  return (
    <>
      <HistoryItem data={activeEmployerData} />
    </>
  )
}

export default History;

import React from 'react'

import SectionDetailed from './sectionDetailed';
import profile_photo from '../../assets/profile_photo.jpg';
import data from '../../data/experienceData.json';
import { ExperienceData } from '../../data/experienceData';

type HistoryItemProps = {
  data: ExperienceData;
};

const HistoryItem = ({ data }: HistoryItemProps ) => (
  <SectionDetailed
    section={data.employer}
    avatar_src={profile_photo}
    summary_items={[
      {title: 'Role', value: 'Software Engineer'},
      {title: 'From', value: data.from},
      {title: 'To', value: data.to}
    ]}
    detailed_data={[
      {title: 'Summary', value: data.summary},
      ...data.projects.map(project => ({title: project.name, value: project.description})),
    ]} />
)

const History = () => {
  return (
    <>
      {data.map(exp => <HistoryItem data={exp}/>)}
    </>
  )
}

export default History;

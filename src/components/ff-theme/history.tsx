import React from 'react'

import SectionDetailed from './sectionDetailed';
import profile_photo from '../../assets/profile_photo.jpg';

const History = () => {
  return (
    <>
      <SectionDetailed
      section="Pollen"
      avatar_src={profile_photo}
      summary_items={[
        {title: 'Role', value: 'Software Engineer'},
        {title: 'From', value: '2021'},
        {title: 'To', value: '2022'}
      ]}
      detailed_data={[
        {title: 'Summary', value: 'yudyfhsiz dhfsdifhsdiufhsdifhsifdhsdfoigsdfhgisdfhgiosdfgh dsiufg g fdsgjdsfuigj sdofgsdf gdfgn sdoifgjnsdo fgj sdoifigsd jfgjds ofgjsd ofgjsoidifjg fdjgsoidfgjsdo fgjsdofig jdfog jsdfogjsdfog jsdfogj sdofgjsdofgjsd fogj sodfgj sdoifgj fj ogjs odfgjsodifgjsdofig jsdofgjs odfjgsodif gjsodfi sodfi'},
        {title: 'Project 1', value: 'yudyfhsiz dhfsdifhsdiufhsdifhsifdhsdfoigsdfhgisdfhgiosdfgh dsiufg g fdsgjdsfuigj sdofgsdf gdfgn sdoifgjnsdo fgj sdoifigsd jfgjds ofgjsd ofgjsoidifjg fdjgsoidfgjsdo fgjsdofig jdfog jsdfogjsdfog jsdfogj sdofgjsdofgjsd fogj sodfgj sdoifgj fj ogjs odfgjsodifgjsdofig jsdofgjs odfjgsodif gjsodfi sodfi'}
      ]} />
      <SectionDetailed
        section="Softwire"
        avatar_src={profile_photo}
        summary_items={[
          {title: 'Role', value: 'Software Engineer'},
          {title: 'From', value: '2018'},
          {title: 'To', value: '2021'}
        ]}
        detailed_data={[
          {title: 'Summary', value: 'yudyfhsiz dhfsdifhsdiufhsdifhsifdhsdfoigsdfhgisdfhgiosdfgh dsiufg g fdsgjdsfuigj sdofgsdf gdfgn sdoifgjnsdo fgj sdoifigsd jfgjds ofgjsd ofgjsoidifjg fdjgsoidfgjsdo fgjsdofig jdfog jsdfogjsdfog jsdfogj sdofgjsdofgjsd fogj sodfgj sdoifgj fj ogjs odfgjsodifgjsdofig jsdofgjs odfjgsodif gjsodfi sodfi'},
          {title: 'Project 1', value: 'yudyfhsiz dhfsdifhsdiufhsdifhsifdhsdfoigsdfhgisdfhgiosdfgh dsiufg g fdsgjdsfuigj sdofgsdf gdfgn sdoifgjnsdo fgj sdoifigsd jfgjds ofgjsd ofgjsoidifjg fdjgsoidfgjsdo fgjsdofig jdfog jsdfogjsdfog jsdfogj sdofgjsdofgjsd fogj sodfgj sdoifgj fj ogjs odfgjsodifgjsdofig jsdofgjs odfjgsodif gjsodfi sodfi'}
        ]} />
    </>
  )
}

export default History;

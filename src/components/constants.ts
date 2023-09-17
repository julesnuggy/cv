import a_levels from '../assets/logos/avatars/a_levels.png'
import boolean_uk from '../assets/logos/avatars/boolean_uk.jpg'
import career_break from '../assets/logos/avatars/career_break.png'
import consultancy from '../assets/logos/avatars/management_consultancy.png';
import makers from '../assets/logos/avatars/makers_academy.png';
import noris_technologies from '../assets/logos/avatars/noris_technologies.jpg';
import pollen from '../assets/logos/avatars/pollen.jpg';
import softwire from '../assets/logos/avatars/softwire.png';
import university from '../assets/logos/avatars/university.jpeg';

export const BASE_URL = '/'
export const CODING_THEME_URL = '/theme/coding'
export const FF_THEME_URL = `/theme/ff`

export enum THEME {
  CODING = 'coding',
  FF = 'ff'
}

export enum MAIN_MENU_ITEMS {
  STATUS = 'Status',
  ABILITIES = 'Abilities',
  QUESTS = 'Quests',
  LORE = 'Lore',
}

interface ExperienceAvatarsType {
  [name: string]: any
}

export const EXPERIENCE_AVATARS: ExperienceAvatarsType = {
  'Boolean UK': boolean_uk,
  'Noris Technologies': noris_technologies,
  'Career Break': career_break,
  Pollen: pollen,
  Softwire: softwire,
  'Makers Academy': makers,
  'Management Consultancy': consultancy,
  University: university,
  'A-Levels': a_levels,
}

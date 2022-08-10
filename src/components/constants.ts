import pollen from '../assets/logos/avatars/pollen.jpg';
import softwire from '../assets/logos/avatars/softwire.png';
import makers from '../assets/logos/avatars/makers_academy.png';
import consultancy from '../assets/logos/avatars/management_consultancy.png';
import university from '../assets/logos/avatars/university.jpeg';
import a_levels from '../assets/logos/avatars/a_levels.png'

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
  Pollen: pollen,
  Softwire: softwire,
  'Makers Academy': makers,
  'Management Consultancy': consultancy,
  University: university,
  'A-Levels': a_levels,
}
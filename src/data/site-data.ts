import MenuItem from '../types/MenuItem'
import i18next from '../i18n'

export const menuItems: MenuItem[] = [
  {
    url: '/cv',
    name: i18next.t('resume'),
    subItems: [
      {
        name: i18next.t('in_french'),
        url: '/cv-french',
      },
      {
        name: i18next.t('in_english'),
        url: '/cv-english',
      },
    ],
  },
  {
    name: i18next.t('all_projects'),
    url: '/projects',
  },
  {
    name: i18next.t('bio'),
    url: '/bio',
  },
  {
    name: i18next.t('contact'),
    url: '/contact',
  },
]

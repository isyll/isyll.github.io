import MenuItem from '../types/MenuItem'

export const menuItems: MenuItem[] = [
  {
    url: '/cv',
    name: 'Curriculum Vitæ',
    subItems: [
      {
        name: 'En français',
        url: '/cv-french',
      },
      {
        name: 'En Anglais',
        url: '/cv-english',
      },
    ],
  },
]

export interface Project {
  slug: string
  name: string
  type: string
  description: string
  illustrations: string[]
  days: number
  githubUrl: string
  startDate: string
  endDate: string
  techs: string[]
}

const projects: Project[] = [
  {
    slug: 'wave-clone',
    name: 'Wave Clone',
    type: 'Mobile App',
    description: 'A clone of the famous money transfer app Wave.',
    illustrations: ['/images/wave-clone.png'],
    days: 43,
    githubUrl: 'https://github.com/isyll/wave',
    startDate: 'May 2024',
    endDate: 'August 2024',
    techs: ['Flutter', 'Dart'],
  },
  {
    slug: 'my-portfolio',
    name: 'My portfolio',
    type: 'Single Page App',
    description: 'My portfolio website.',
    illustrations: [],
    days: 15,
    githubUrl: 'https://github.com/isyll/isyll.github.io',
    startDate: 'September 2024',
    endDate: 'September 2024',
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'vlsm-calculator',
    name: 'VLSM Calculator',
    type: 'Single Page App',
    description:
      'A tool for efficient IP address allocation using Variable Length Subnet Masking (VLSM).',
    illustrations: [],
    days: 4,
    githubUrl: 'https://github.com/isyll/vlsmcalculator',
    startDate: 'October 2024',
    endDate: 'November 2024',
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]

export default projects

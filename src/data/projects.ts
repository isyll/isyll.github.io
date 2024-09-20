export interface Project {
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
    name: 'Wave Clone',
    type: 'Mobile app',
    description: 'Clone of the famous money transfer app Wave.',
    illustrations: ['/images/wave-clone.png'],
    days: 43,
    githubUrl: 'https://github.com/isyll/wave',
    startDate: 'May 2024',
    endDate: 'August 2024',
    techs: ['Flutter', 'Dart'],
  },
  {
    name: 'My portfolio',
    type: 'Single Page App',
    description: 'My portfolio website.',
    illustrations: [],
    days: 5,
    githubUrl: 'https://github.com/isyll/isyll.github.io',
    startDate: 'September 2024',
    endDate: 'September 2024',
    techs: ['React', 'TypeScript'],
  },
]

export default projects

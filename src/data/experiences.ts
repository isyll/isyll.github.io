export interface Experience {
  name: string
  description: string
  startDate: string
  endDate: string
  company: string
  location: string
  workMode: string
  contract: string
  duration: string
  techs: string[]
}

const experiences: Experience[] = [
  {
    name: 'Full-stack Developer',
    description:
      "Working on great applications mostly for the group's employees using microservices architecture and REST APIs.",
    startDate: 'October 2023',
    endDate: 'March 2024',
    duration: '6 months',
    company: 'Groupe SONATEL',
    workMode: 'On site',
    location: 'Dakar, Senegal',
    contract: 'Internship',
    techs: ['Symfony', 'Laravel', 'Angular'],
  },
  {
    name: 'React Developer',
    description:
      'Creating amazing and high-performance e-commerce websites based on React technologies.',
    startDate: 'December 2024',
    endDate: 'February 2024',
    duration: '3 months',
    company: 'KATI360',
    workMode: 'Remote work',
    location: 'Dakar, Senegal',
    contract: 'Internship',
    techs: ['React', 'Express.js', 'Redux'],
  },
  {
    name: 'Web Developer',
    description:
      'Working on modern websites based on Next.js and CMS like Wordpress.',
    startDate: 'May 2024',
    endDate: 'November 2024',
    duration: '10 months',
    company: 'Dscale.io',
    workMode: 'Remote work',
    location: 'Dubai, UAE',
    contract: 'Freelance',
    techs: ['Next.js', 'React', 'PHP'],
  },
]

export default experiences
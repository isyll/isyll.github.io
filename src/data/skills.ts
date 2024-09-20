export interface Skill {
  category: string
  skills: string[]
}

const skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Java'],
  },
  {
    category: 'Mobile Development',
    skills: ['Flutter'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot'],
  },
  {
    category: 'Markup & Style',
    skills: ['HTML', 'CSS', 'Sass'],
  },
  {
    category: 'Frameworks',
    skills: ['Next.js', 'Angular', 'Symfony', 'Laravel'],
  },
]

export default skills

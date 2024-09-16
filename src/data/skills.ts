export interface Skill {
  category: string
  skills: {
    name: string
    imgUrl: string
    logoPrimaryColor: string
    dark?: {
      imgUrl: string
      logoPrimaryColor: string
    }
  }[]
}

const skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'TypeScript',
        imgUrl: '/logos/typescript.png',
        logoPrimaryColor: '#3178c6',
      },
      {
        name: 'JavaScript',
        imgUrl: '/logos/javascript.png',
        logoPrimaryColor: '#f5de19',
      },
      {
        name: 'Java',
        imgUrl: '/logos/java.png',
        logoPrimaryColor: '#cb2d2e',
      },
    ],
  },
  {
    category: 'Mobile Development',
    skills: [
      {
        name: 'Flutter',
        imgUrl: '/logos/flutter.png',
        logoPrimaryColor: '#5fc9f8',
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        name: 'Spring Boot',
        imgUrl: '/logos/spring-boot.png',
        logoPrimaryColor: '#6db33f',
      },
    ],
  },
  {
    category: 'Markup & Style',
    skills: [
      {
        name: 'HTML',
        imgUrl: '/logos/html5.png',
        logoPrimaryColor: '#e44d26',
      },
      {
        name: 'CSS',
        imgUrl: '/logos/css3.png',
        logoPrimaryColor: '#214ce5',
      },
      {
        name: 'Sass',
        imgUrl: '/logos/sass.png',
        logoPrimaryColor: '#cd679a',
      },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      {
        name: 'Next.js',
        imgUrl: '/logos/nextjs-light.png',
        logoPrimaryColor: '#000000',
        dark: {
          imgUrl: '/logos/nextjs-dark.png',
          logoPrimaryColor: '#000000',
        },
      },
      {
        name: 'Angular',
        imgUrl: '/logos/angular.png',
        logoPrimaryColor: '#f50e48',
      },
      {
        name: 'Symfony',
        imgUrl: '/logos/symfony_black.png',
        logoPrimaryColor: '#000000',
        dark: {
          imgUrl: '/logos/symfony_white.png',
          logoPrimaryColor: '#ffffff',
        },
      },
      {
        name: 'Laravel',
        imgUrl: '/logos/laravel.png',
        logoPrimaryColor: '#ff2d20',
      },
    ],
  },
]

export default skills

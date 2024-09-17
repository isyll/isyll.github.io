interface Project {
  name: string
  type: string
  description: string
  illustrations: string[]
  days: number
  githubUrl: string
  postUrl?: string
  integrationCode?: string
  startDate: string
  endDate: string
  techs: {
    name: string
    imgUrl: string
    dark?: {
      imgUrl: string
    }
  }[]
}

const projects: Project[] = [
  {
    name: 'Wave Clone',
    type: 'Mobile app',
    description: 'Clone of the famous money transfer app Wave',
    illustrations: ['/images/wave-clone.png'],
    days: 43,
    githubUrl: 'https://github.com/isyll/wave',
    postUrl:
      'https://www.linkedin.com/posts/ibrahima-sylla-9931a61ba_voici-un-clone-de-lapplication-wave-que-activity-7234729651116339200-0fbQ?utm_source=share&utm_medium=member_desktop',
    integrationCode:
      '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234728173530198017?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Post intégré"></iframe>',
    startDate: 'May 2024',
    endDate: 'August 2024',
    techs: [
      {
        name: 'Dart',
        imgUrl: '/logos/dart.png',
      },
      {
        name: 'Flutter',
        imgUrl: '/logos/flutter.png',
      },
    ],
  },
  {
    name: 'My portfolio',
    type: 'Single Page App',
    description: 'My portfolio website',
    illustrations: [],
    days: 5,
    githubUrl: 'https://github.com/isyll/isyll.github.io',
    startDate: 'September 2024',
    endDate: 'September 2024',
    techs: [
      {
        name: 'React',
        imgUrl: '/logos/react.png',
      },
      {
        name: 'TypeScript',
        imgUrl: '/logos/typescript.png',
      },
    ],
  },
]

export default projects

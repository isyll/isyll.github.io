interface CarouselData {
  name: string
  imgUrl: string
  dark?: {
    imgUrl: string
  }
}

const carouselData: CarouselData[] = [
  {
    name: 'Flutter',
    imgUrl: '/logos/flutter.png',
  },
  {
    name: 'Nextjs',
    imgUrl: '/logos/nextjs-light.png',
    dark: {
      imgUrl: '/logos/nextjs-dark.png',
    },
  },
  {
    name: 'Angular',
    imgUrl: '/logos/angular.png',
  },
  {
    name: 'HTML5',
    imgUrl: '/logos/html5.png',
  },
  {
    name: 'CSS3',
    imgUrl: '/logos/css3.png',
  },
  {
    name: 'TypeScript',
    imgUrl: '/logos/typescript.png',
  },
  {
    name: 'JavaScript',
    imgUrl: '/logos/javascript.png',
  },
  {
    name: 'React',
    imgUrl: '/logos/react.png',
  },
  {
    name: 'Java',
    imgUrl: '/logos/java.png',
  },
  {
    name: 'Spring boot',
    imgUrl: '/logos/spring-boot.png',
  },
  {
    name: 'Laravel',
    imgUrl: '/logos/laravel.png',
  },
  {
    name: 'Symfony',
    imgUrl: '/logos/symfony_black.png',
    dark: {
      imgUrl: '/logos/symfony_white.png',
    },
  },
  {
    name: 'Sass',
    imgUrl: '/logos/sass.png',
  },
  {
    name: 'Dart',
    imgUrl: '/logos/dart.png',
  },
]

export default carouselData

export interface Asset {
  name: string
  url: string
  primaryColor: string
  dark?: {
    url: string
    primaryColor: string
  }
}

export const getAsset = (name: string): Asset | null =>
  assets.find((asset) => asset.name == name) ?? null

const assets: Asset[] = [
  {
    name: 'noImg',
    url: '/no-img.svg',
    primaryColor: 'grey',
  },
  {
    name: 'Spring Boot',
    url: '/logos/spring-boot.png',
    primaryColor: '#6db33f',
  },
  {
    name: 'Flutter',
    url: '/logos/flutter.png',
    primaryColor: '#5fc9f8',
  },
  {
    name: 'Dart',
    url: '/logos/dart.png',
    primaryColor: '#2cb7f6',
  },
  {
    name: 'TypeScript',
    url: '/logos/typescript.png',
    primaryColor: '#3178c6',
  },
  {
    name: 'React',
    url: '/logos/react.png',
    primaryColor: '#00d8ff',
  },
  {
    name: 'JavaScript',
    url: '/logos/javascript.png',
    primaryColor: '#f5de19',
  },
  {
    name: 'Java',
    url: '/logos/java.png',
    primaryColor: '#cb2d2e',
  },
  {
    name: 'HTML',
    url: '/logos/html5.png',
    primaryColor: '#e44d26',
  },
  {
    name: 'CSS',
    url: '/logos/css3.png',
    primaryColor: '#214ce5',
  },
  {
    name: 'Sass',
    url: '/logos/sass.png',
    primaryColor: '#cd679a',
  },
  {
    name: 'Next.js',
    url: '/logos/nextjs-light.png',
    primaryColor: '#000000',
    dark: {
      url: '/logos/nextjs-dark.png',
      primaryColor: '#000000',
    },
  },
  {
    name: 'Angular',
    url: '/logos/angular.png',
    primaryColor: '#f50e48',
  },
  {
    name: 'Symfony',
    url: '/logos/symfony_black.png',
    primaryColor: '#000000',
    dark: {
      url: '/logos/symfony_white.png',
      primaryColor: '#ffffff',
    },
  },
  {
    name: 'Laravel',
    url: '/logos/laravel.png',
    primaryColor: '#ff2d20',
  },
]

export default assets

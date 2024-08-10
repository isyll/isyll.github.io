/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import tailwindcssIcon from '../logo-assets/tailwindcss.svg'
import cssIcon from '../logo-assets/css-icon.svg'
import htmlIcon from '../logo-assets/html-icon.svg'
import jsIcon from '../logo-assets/js-icon.svg'
import nodeIcon from '../logo-assets/node-icon.svg'
import reactIcon from '../logo-assets/react-icon.svg'
import sassIcon from '../logo-assets/sass-icon.svg'
import mongoIcon from '../logo-assets/mongodb.svg'
import typescriptIcon from '../logo-assets/typescript-icon.svg'
import angularIcon from '../logo-assets/angular.svg'
import mysqlIcon from '../logo-assets/mysql-icon.svg'
import javaIcon from '../logo-assets/java.svg'
import vsCodeIcon from '../logo-assets/vscode-icon.svg'

function AnimatedBg() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <div className='fixed inset-0 z-[-9999]'>
      <div className='w-full h-full flex justify-center items-center'>
        <Particles options={options} init={particlesInit} />
      </div>
    </div>
  )
}

export default AnimatedBg

const particleImage = [
  htmlIcon,
  cssIcon,
  sassIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  typescriptIcon,
  tailwindcssIcon,
  mongoIcon,
  angularIcon,
  mysqlIcon,
  javaIcon,
  vsCodeIcon,
]

const options: any = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onDiv: {
        elementId: 'repulse-div',
        enable: false,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 2,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 2,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    lineLinked: {
      blink: false,
      color: '#000',
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'out',
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      limit: 20,
      value: 15,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.2,
        speed: 1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    rotate: {
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
      direction: 'random',
      random: true,
      value: 0,
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '400',
      },
      image: particleImage.map((img) => ({ src: img, width: 20, height: 20 })),
      polygon: {
        sides: 5,
      },
      stroke: {
        color: '#000000',
        width: 0,
      },
      type: 'image',
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 16,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: '#ffffff',
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    url: '',
  },
  background: {
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
}

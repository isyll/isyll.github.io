/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

function AnimatedBg() {
  const options: any = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.75,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  }

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <div className='fixed inset-0 z-[-9999]'>
      <div className='w-full h-full flex justify-center items-center'>
        <Particles options={options} init={particlesInit} />
        {/* {images.map((image, index) => (
          <div className='x'>
            <img
              className='y'
              width={20}
              height={20}
              key={index}
              src={image}
              alt=''
            />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default AnimatedBg

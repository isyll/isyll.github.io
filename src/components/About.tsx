import ScrollAnimation from 'react-animate-on-scroll'

export function About() {
  const images = [
    '/logos/angular.png',
    '/logos/java.png',
    '/logos/laravel.png',
    '/logos/nextjs.png',
    '/logos/react.png',
    '/logos/spring.png',
    '/logos/symfony.png',
    '/logos/tailwind.png',
    '/logos/ts.png',
  ]

  return (
    <>
      <div className='pt-3' id='about'>
        <div className='my-32 md:mx-28 mx-6 flex justify-center md:justify-between items-center overflow-hidden flex-wrap'>
          <div className='w-full md:w-[500px]'>
            <h1 className='mb-4 text-xxl'>About Me</h1>
            {items.map((item, index) => (
              <ScrollAnimation
                key={index}
                animateIn='fadeInLeft'
                delay={0.1 * index * 1000}
              >
                <div className='text-wrap py-2'>{item}</div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animateIn='fadeInRight' delay={0.2 * 1000}>
            <img
              src='/ibou.png'
              alt=''
              className='rounded-full border border-[#6b6b6b] border-opacity-70 md:w-[400px] w-[350px] mt-16 md:mt-0'
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className='mb-10 md:mx-28 mx-6'>
        <h1 className='text-xl'>My Skills</h1>
        <div className='pt-4 flex gap-2 items-center overflow-hidden flex-wrap py-4'>
          {images.map((src, index) => (
            <div
              key={index}
              className='pe-3 hover:scale-150 transition-transform duration-300'
            >
              <img src={src} width={40} className='cursor-pointer z-30' />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const items = [
  `
  I am both a full stack web developer and a Flutter mobile developer. I
          discovered programming on my own on the internet in a self-taught way.
          Then, even though I started my university education in a completely
          different field, I ended up finding my way back to programming. I
          obtained a degree in Computer Network Administration and a certificate
          in web/mobile development.
  `,
  `
  I graduated from Orange Digital Center and the Polytechnic Institute
          of Dakar in the fields of network administration and web/mobile
          development.
  `,
  `
  My goal is to participate in creating a new, better world through
          digital tools, by solving existing problems through innovation.
  `,
]

import { motion } from 'framer-motion'

export default function Skills() {
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
    <div id='skills' className='pt-3'>
      <div className='my-20 mx-28 '>
        <h1 className='mb-8 text-xxl'>My Skills</h1>
        <div className='pt-8 flex justify-between items-center overflow-hidden flex-wrap'>
          {images.map((src, index) => (
            <div key={index} className='px-3'>
              <motion.img
                src={src}
                width={75}
                animate={{
                  y: [0, -30, 0],
                }}
                transition={{
                  delay: Math.random(),
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                className='cursor-pointer z-30'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function About() {
  const delay = (value: number): Variants => ({
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: value },
      },
      hidden: { opacity: 0, x: -200 },
    }),
    delayImg = (value: number): Variants => ({
      visible: {
        opacity: 0.7,
        x: 0,
        transition: { duration: 0.6, delay: value },
      },
      hidden: { opacity: 0, x: 200 },
    })

  const controlsImg = useAnimation()
  const [refImg, inViewImg] = useInView()
  const controls1 = useAnimation()
  const [ref1, inView1] = useInView()
  const controls2 = useAnimation()
  const [ref2, inView2] = useInView()
  const controls3 = useAnimation()
  const [ref3, inView3] = useInView()

  useEffect(() => {
    controls1.start(inView1 ? 'visible' : 'hidden')
    controls2.start(inView2 ? 'visible' : 'hidden')
    controls3.start(inView3 ? 'visible' : 'hidden')
    controlsImg.start(inViewImg ? 'visible' : 'hidden')
  }, [
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    inViewImg,
    controlsImg,
  ])

  const values = [
    {
      ref: ref1,
      inView: inView1,
      controls: controls1,
      variants: delay(0),
    },
    {
      ref: ref2,
      inView: inView2,
      controls: controls2,
      variants: delay(0.2),
    },
    {
      ref: ref3,
      inView: inView3,
      controls: controls3,
      variants: delay(0.4),
    },
  ]

  return (
    <div className='pt-3' id='about'>
      <div className='my-32 mx-28 flex justify-between items-center overflow-hidden flex-wrap'>
        <div className='w-full md:w-[500px]'>
          <h1 className='mb-4 text-xxl'>About Me</h1>
          {items.map((item, index) => (
            <motion.p
              ref={values[index].ref}
              variants={values[index].variants}
              animate={values[index].controls}
              key={index}
              className='mb-5 text-lg'
            >
              {item}
            </motion.p>
          ))}
        </div>
        <motion.img
          ref={refImg}
          variants={delayImg(0.3)}
          animate={controlsImg}
          src='/ibou.png'
          width={400}
          alt=''
          className='rounded-full border border-[#6b6b6b] border-opacity-70'
        />
      </div>
    </div>
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

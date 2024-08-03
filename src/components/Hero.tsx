import { useAnimation, motion, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const duration = 0.8
  const imgVariants: Variants = {
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: duration, ease: 'easeInOut' },
      },
      hidden: { opacity: 0, x: 400, transition: { ease: 'easeInOut' } },
    },
    lineVariants: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration, ease: 'easeInOut' },
      },
      hidden: { opacity: 0, y: 80, transition: { ease: 'easeInOut' } },
    }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  const c1Controls = useAnimation()
  const c1Variants = {
    ...lineVariants,
    visible: {
      ...lineVariants.visible,
      transition: { duration: duration, delay: 0.1 },
    },
  }
  const [c1Ref, c1InView] = useInView()
  const c2Controls = useAnimation()
  const c2Variants = {
    ...lineVariants,
    visible: {
      ...lineVariants.visible,
      transition: { duration: duration, delay: 0.18 },
    },
  }
  const [c2Ref, c2InView] = useInView()
  const c3Controls = useAnimation()
  const c3Variants = {
    ...lineVariants,
    visible: {
      ...lineVariants.visible,
      transition: { duration: duration, delay: 0.35 },
    },
  }
  const [c3Ref, c3InView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      c1Controls.start('visible')
      c2Controls.start('visible')
      c3Controls.start('visible')
    } else {
      controls.start('hidden')
      c1Controls.start('hidden')
      c2Controls.start('hidden')
      c3Controls.start('hidden')
    }
  }, [
    controls,
    inView,
    c1Controls,
    c1InView,
    c2Controls,
    c2InView,
    c3Controls,
    c3InView,
  ])

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 overflow-hidden mt-10 md:mt-0'>
      <h1 className='md:text-[78px] text-[52px] leading-none font-bold flex flex-col gap-2'>
        <motion.div
          ref={c1Ref}
          animate={c1Controls}
          initial='hidden'
          variants={c1Variants}
        >
          <span className='text-primary'>Ibrahima Sylla</span> —
        </motion.div>
        <motion.div
          ref={c2Ref}
          animate={c2Controls}
          initial='hidden'
          variants={c2Variants}
        >
          Web Developer
        </motion.div>
        <motion.div
          ref={c3Ref}
          animate={c3Controls}
          initial='hidden'
          variants={c3Variants}
        >
          Flutter Engineer
        </motion.div>
      </h1>
      <motion.img
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={imgVariants}
        src='/coder-illustration.svg'
        alt='Coder illustration'
        width={460}
      />
    </div>
  )
}

export default Hero

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 overflow-x-hidden'>
      <h1 className='md:text-[74px] text-[52px] leading-none font-bold flex flex-col gap-2 text-nowrap'>
        {/* <ScrollAnimation animateIn='fadeInUpBig'>
          <span className='text-primary'>Ibrahima Sylla</span> —
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUpBig' delay={0.2 * 1000}>
          Web Developer
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUpBig' delay={0.4 * 1000}>
          Flutter Engineer
        </ScrollAnimation> */}

        <div>
          <span className='text-primary'>Ibrahima Sylla</span> —
        </div>
        <div>Web Developer</div>
        <div>Flutter Engineer</div>
      </h1>
      {/* <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}> */}
      <img
        src='/coder-illustration.svg'
        alt='Coder illustration'
        className=' brightness-90 w-[290px] md:w-[450px]'
      />
      {/* </ScrollAnimation> */}
    </div>
  )
}

export default Hero

import ScrollAnimation from 'react-animate-on-scroll'

function Hero() {
  return (
    <div
      id='hero'
      className='flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 overflow-hidden mt-10 md:mt-0'
    >
      <h1 className='md:text-[76px] text-[52px] leading-none font-bold flex flex-col gap-2 text-nowrap'>
        <ScrollAnimation animateIn='fadeInUp'>
          <div>
            <span className='text-primary'>Ibrahima Sylla</span> —
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
          <div>Web Developer</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
          <div>Flutter Engineer</div>
        </ScrollAnimation>
      </h1>
      <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
        <img
          src='/coder-illustration.svg'
          alt='Coder illustration'
          width={455}
        />
      </ScrollAnimation>
    </div>
  )
}

export default Hero

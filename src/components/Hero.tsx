import ScrollAnimation from 'react-animate-on-scroll'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 overflow-hidden'>
      <h1 className="font-['Poppins'] leading-none font-bold flex flex-col gap-4 text-nowrap my-20 md:pt-0">
        <div className='font-extrabold text-[80px]'>Hi, I'm Ibrahima</div>
        <div className=' text-[28px] mt-4 font-medium'>
          I'm a <span className=' text-primary'>Full Stack Developer</span>
        </div>
        <div className=' font-light text-wrap w-[400px] leading-5'>
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online (incase
          you've got an empty canvas layin' around 🎨). Let's connect!
        </div>
        {/* <ScrollAnimation animateIn='fadeInUp'>
          <span className='text-primary'>Ibrahima Sylla</span> —
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
          Web Developer
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
          Flutter Engineer
        </ScrollAnimation> */}

        {/* <div>
          <span className='text-primary'>Ibrahima Sylla</span> —
        </div>
        <div>Web Developer</div>
        <div>Flutter Engineer</div> */}
      </h1>
      {/* <ScrollAnimation animateIn='fadeInRight' delay={0.5 * 1000}>
        <img
          src='/coder-illustration.svg'
          alt='Coder illustration'
          className=' brightness-90 w-[340px] md:w-[450px]'
        />
      </ScrollAnimation> */}
    </div>
  )
}

export default Hero

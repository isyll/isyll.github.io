import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:gap-14'>
      <section className='py-24 flex items-center justify-center ps-8'>
        <div className='flex flex-col justify-center gap-3 md:text-start'>
          <h1 className='bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent font-bold text-5xl'>
            Ibrahima Sylla
          </h1>
          <p className='md:text-5xl text-4xl font-bold'>{t('full_stack')}</p>
          <p className='md:text-5xl text-4xl font-bold'>
            {t('flutter_engineer')}
          </p>
          <p className='text-xl font-semibold text-[#98989f]'>
            {t('love_programming')}
          </p>
        </div>
      </section>
      <section className='flex justify-center items-center relative md:h-[400px] md:w-[500px] h-[300px] w-[350px] pt-8'>
        <div className='linear-bg top-10 absolute rounded-full overflow-clip'></div>
        <img
          src='/hero.png'
          alt='Ibrahima Sylla'
          className='overflow-clip absolute top-0 left-0 bg-none md:w-[450px] w-[400px]'
        />
      </section>
    </div>
  )
}

export default Hero

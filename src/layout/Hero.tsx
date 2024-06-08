import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <section className='py-24 flex items-center justify-center ps-8'>
        <div className='flex flex-col gap-3 text-start'>
          <h1 className='bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent font-bold text-6xl'>
            Ibrahima Sylla
          </h1>
          <p className='text-6xl font-bold'>{t('full_stack')}</p>
          <p className='text-6xl font-bold'>{t('flutter_engineer')}</p>
          <p className='text-xl font-semibold text-[#98989f]'>
            {t('love_programming')}
          </p>
        </div>
      </section>
      <section className='flex justify-center items-center relative h-[400px] w-[500px] pt-8'>
        <div className='linear-bg top-10 absolute rounded-full overflow-clip'></div>
        <img
          src='/hero.png'
          alt='Ibrahima Sylla'
          className='overflow-clip absolute top-0 left-0 bg-none w-[500px] md:w-[800px]'
        />
      </section>
    </div>
  )
}

export default Hero

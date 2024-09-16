import classes from '../data/classes'
import texts from '../data/texts'
import socialLinks from '../data/social-links'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import carouselData from '@/data/carousel-data'
import clsx from 'clsx'
import { Carousel } from '@/components/ui/carousel'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div
      className={clsx(
        'flex md:flex-row flex-col items-center justify-center md:justify-between h-full gap-14 md:gap-20',
        classes.rootPadding,
      )}
    >
      <div className='flex flex-col md:items-start items-center gap-5 text-center md:text-start'>
        <h1 className='md:text-[72px] text-[60px] font-[900] leading-none'>
          Ibrahima Sylla,
        </h1>
        <p className='text-primary-light dark:text-primary-dark font-light'>
          {texts.bio}
        </p>
        <div className='flex gap-4'>
          {socialLinks.map((social, index) => (
            <a href={social.link} title={social.name} key={index}>
              <social.icon
                size={24}
                className='fill-primary-light dark:fill-primary-dark'
              />
            </a>
          ))}
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className='relative flex items-center max-w-[300px]'
      >
        <CarouselContent>
          {carouselData.map((data, index) => {
            const hasDark = data.dark !== undefined
            const width = 100
            const style = 'flex-col items-center gap-3'

            return (
              <CarouselItem key={index} className='flex justify-center'>
                <div
                  className={clsx(
                    style,
                    'flex',
                    hasDark ? 'flex dark:hidden' : '',
                  )}
                >
                  <img src={data.imgUrl} alt={data.name} width={width} />
                  <h4>{data.name}</h4>
                </div>
                {hasDark && (
                  <div className={clsx(style, 'hidden dark:flex')}>
                    <img
                      src={data.dark!.imgUrl}
                      alt={data.name}
                      width={width}
                    />
                    <h4>{data.name}</h4>
                  </div>
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className='absolute w-full flex justify-between'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

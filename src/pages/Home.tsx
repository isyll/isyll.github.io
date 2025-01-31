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
import { Carousel } from '@/components/ui/carousel'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Heading1 from '@/components/custom/Heading1'
import { getAsset } from '@/data/assets'
import { cn } from '@/lib/utils'

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div
      className={cn(
        'flex md:flex-row flex-col items-center justify-center md:justify-between h-full gap-14 md:gap-20 my-5 md:my-0',
        classes.rootPadding,
      )}
    >
      <div className='flex flex-col md:items-start items-center gap-5 text-center md:text-start'>
        <Heading1>Ibrahima Sylla,</Heading1>
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
            const asset = getAsset(data)!
            if (asset == null) {
              console.log(data)
            }
            const hasDark = asset.dark !== undefined
            const width = 100
            const style = 'flex-col items-center gap-3'

            return (
              <CarouselItem key={index} className='flex justify-center'>
                <div
                  className={cn(
                    style,
                    'flex',
                    hasDark ? 'flex dark:hidden' : '',
                  )}
                >
                  <img src={asset.url} alt={asset.name} width={width} />
                  <h4>{asset.name}</h4>
                </div>
                {hasDark && (
                  <div className={cn(style, 'hidden dark:flex')}>
                    <img src={asset.dark!.url} alt={asset.name} width={width} />
                    <h4>{asset.name}</h4>
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

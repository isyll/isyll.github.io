import Heading1 from '@/components/custom/Heading1'
import SearchInput from '@/components/custom/SearchInput'
import { getAsset } from '@/data/assets'
import classes from '@/data/classes'
import experiences, { Experience } from '@/data/experiences'
import useSearch from '@/hooks/useSearch'
import { cn, getRandomItem } from '@/lib/utils'
import { useMemo } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { FiClock } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'
import { Bolt } from 'lucide-react'
import { PiBuildings } from 'react-icons/pi'
import { FaNetworkWired } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'
import { Navigate, useParams } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Experiences() {
  const { slug } = useParams()

  if (slug) {
    return <ExperiencePage slug={slug} />
  }

  return <ExperiencesList />
}

type ExperiencePageProps = {
  slug: string
}

function ExperiencePage({ slug }: ExperiencePageProps) {
  const exp = experiences.find((item) => item.slug === slug)!

  if (!exp) {
    return <Navigate to='/' replace />
  }

  return <div>name: {exp.name}</div>
}

function ExperiencesList() {
  const { searchValue, handleSearch } = useSearch('')

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Experiences</Heading1>
      <SearchInput
        placeholder='Search...'
        onChange={handleSearch}
        value={searchValue}
      />
      <div className='w-full relative flex flex-col gap-10 items-center'>
        <div className='hidden md:flex absolute -z-10 top-0 bottom-0 w-[0.5px] bg-primary-dark dark:bg-primary-light' />
        {experiences
          .filter((item) => {
            const value = searchValue.trim().toLocaleLowerCase()

            if (value.length > 0) {
              return (
                item.name.toLocaleLowerCase().includes(value) ||
                item.company.toLocaleLowerCase().includes(value)
              )
            }

            return true
          })
          .map((exp, index) => {
            const start = index % 2 === 0

            return (
              <div
                key={index}
                className={cn('w-full flex gap-1 items-center px-2 md:px-0', {
                  'flex-row-reverse': !start,
                })}
              >
                <ExpCard exp={exp} className='flex-1' />
                <div className='p-3 bg-white dark:bg-black hidden md:inline'>
                  <Bolt
                    className='text-primary-light dark:text-primary-dark'
                    size={16}
                  />
                </div>
                <div className='flex-1 hidden md:flex' />
              </div>
            )
          })}
      </div>
    </div>
  )
}

interface ExpCardProps {
  exp: Experience
  className?: string
}

function ExpCard({ exp, className }: ExpCardProps) {
  const mainTech = exp.techs[0]
  const asset = useMemo(
    () => getAsset(mainTech) ?? getAsset('noImg')!,
    [mainTech],
  )
  const img = getAsset('noImg')!
  const line = (
    <div className='h-[0.5px] w-full bg-primary-dark dark:bg-primary-light dark:brightness-150' />
  )

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor={
        ['#000000', '#ffffff'].includes(asset.primaryColor)
          ? getRandomItem(['red', 'blue', 'green', 'yellow', 'brown', 'pink'])
          : asset.primaryColor
      }
      glarePosition='all'
      scale={1}
      transitionSpeed={1000}
      className={className}
    >
      <div
        // href={`/#/experiences/${exp.slug}`}
        className={cn(
          'flex flex-col border border-primary-dark dark:border-primary-light rounded-lg h-[400px] p-6 cursor-default bg-white dark:bg-black hover:brightness-100 hover:dark:brightness-200',
        )}
      >
        <div className='flex items-start gap-4 h-full'>
          <img src={img.url} alt={img.name} width={52} />
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>{exp.name}</h3>
            <div className='flex gap-2 flex-wrap mt-2'>
              {[
                {
                  icon: <IoLocationOutline size={14} />,
                  text: exp.location,
                },
                {
                  icon: <PiBuildings size={14} />,
                  text: exp.contract,
                },
                {
                  icon: <FaNetworkWired size={14} />,
                  text: exp.workMode,
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex gap-1 items-center border border-primary-dark dark:border-primary-light rounded-full bg-transparent hover:bg-primary-dark hover:dark:bg-primary-light p-1 px-2 text-[10px] transition-colors'
                  >
                    {item.icon}
                    {item.text}
                  </div>
                )
              })}
            </div>
            <div className='flex gap-1 items-center mt-4'>
              <MdOutlineDateRange />
              <div className='w-1' />
              {exp.startDate} &ndash; {exp.endDate}
            </div>
            {line}
            <div className='flex gap-1 items-center'>
              <FiClock />
              <div className='w-1' />
              {exp.duration}
            </div>
            {line}
            <div className='my-4'>{exp.description}</div>
            <div className='flex gap-4'>
              {exp.techs.map((tech, index) => {
                const asset = getAsset(tech)
                return asset ? (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          key={index}
                          className='flex justify-center items-center cursor-pointer p-1 border border-primary-dark dark:border-primary-light rounded-xl'
                        >
                          <img src={asset.url} width={28} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

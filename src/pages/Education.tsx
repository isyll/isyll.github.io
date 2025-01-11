import Heading1 from '@/components/custom/Heading1'
import SearchInput from '@/components/custom/SearchInput'
import { getAsset } from '@/data/assets'
import classes from '@/data/classes'
import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'
import { IoLocationOutline } from 'react-icons/io5'
import Tilt from 'react-parallax-tilt'
import { Bolt, Clock } from 'lucide-react'
import education, { Education } from '@/data/education'
import useTheme from '@/hooks/useTheme'
import { Fragment, useMemo } from 'react'

export default function EducationPage() {
  const { searchValue, handleSearch } = useSearch('')

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Education</Heading1>
      <SearchInput
        placeholder='Search...'
        onChange={handleSearch}
        value={searchValue}
      />
      <div className='w-full relative flex flex-col gap-10 items-center'>
        <div className='hidden md:flex absolute -z-10 top-0 bottom-0 w-[0.5px] bg-primary-dark dark:bg-primary-light' />
        {education
          .filter((item) => {
            const value = searchValue.trim().toLocaleLowerCase()

            if (value.length > 0) {
              return item.name.toLocaleLowerCase().includes(value)
            }

            return true
          })
          .map((education, index) => {
            const start = index % 2 === 0

            return (
              <div
                key={index}
                className={cn('w-full flex gap-1 items-center px-2 md:px-0', {
                  'flex-row-reverse': !start,
                })}
              >
                <EducationCard education={education} className='flex-1' />
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

interface EducationCardProps {
  education: Education
  className?: string
}

function EducationCard({ education, className }: EducationCardProps) {
  const img = getAsset('noImg')!
  const line = (
    <div className='h-[0.5px] w-full bg-primary-dark dark:bg-primary-light dark:brightness-150' />
  )
  const theme = useTheme()
  const infos = useMemo(
    () => [
      {
        icon: <IoLocationOutline size={14} />,
        text: education.location,
      },
      {
        icon: <Clock size={14} />,
        text: education.duration,
      },
    ],
    [education],
  )

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor={theme === 'light' ? '#222' : '#888'}
      glarePosition='all'
      scale={1}
      transitionSpeed={1000}
      className={className}
    >
      <div className='flex flex-col border border-primary-dark dark:border-primary-light rounded-xl h-[500px] p-6 cursor-default bg-white dark:bg-black hover:brightness-100 hover:dark:brightness-200'>
        <div className='flex flex-col gap-6 h-full'>
          <img src={img.url} alt={img.name} width={52} />
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-xl'>{education.name}</h3>
            <h3 className='text-sm'>{education.school.toUpperCase()}</h3>
            <div className='flex flex-col gap-2 mt-2'>
              {line}
              {infos.map((item, index) => (
                <Fragment>
                  <div key={index} className='flex gap-1 items-center p-1 px-2'>
                    {item.icon}
                    {item.text}
                  </div>
                  {line}
                </Fragment>
              ))}
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {education.techs.map((tech, index) => (
                <div
                  key={index}
                  className='rounded-full text-sm px-3 py-1 border border-primary-dark dark:border-primary-light'
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

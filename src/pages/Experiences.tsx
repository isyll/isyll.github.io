import Heading1 from '@/components/custom/Heading1'
import SearchInput from '@/components/custom/SearchInput'
import { getAsset } from '@/data/assets'
import classes from '@/data/classes'
import experiences, { Experience } from '@/data/experiences'
import useSearch from '@/hooks/useSearch'
import { cn, getRandomItem } from '@/lib/utils'
import { useMemo } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import Tilt from 'react-parallax-tilt'

export default function Experiences() {
  const { searchValue, handleSearch } = useSearch('')

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Experiences</Heading1>
      <SearchInput
        placeholder='Search...'
        onChange={handleSearch}
        value={searchValue}
      />
      <div className='w-full flex flex-col'>
        {experiences.map((exp, index) => (
          <ExpCard
            key={index}
            exp={exp}
            className={cn('w-[48%]', {
              'ms-auto': (index + 1) % 2 === 0,
            })}
          />
        ))}
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
        className={cn(
          'flex flex-col border border-primary-dark dark:border-primary-light rounded-lg h-[350px] p-6 cursor-pointer bg-white dark:bg-black hover:brightness-100 hover:dark:brightness-200',
        )}
      >
        <div className='flex items-start gap-4 h-full'>
          <img src={img.url} alt={img.name} width={52} />
          <div className='flex flex-col'>
            <h3 className='font-bold text-lg'>{exp.name}</h3>
            <div className='flex gap-2'>
              <div className='flex gap-1 items-center border border-primary-dark dark:border-primary-light rounded-xl bg-transparent hover:bg-primary-dark hover:dark:bg-primary-light p-2 text-[10px] transition-colors'>
                <IoLocationOutline size={14} />
                {exp.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

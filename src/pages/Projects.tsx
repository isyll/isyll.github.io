import Heading1 from '@/components/custom/Heading1'
import SearchInput from '@/components/custom/SearchInput'
import { getAsset } from '@/data/assets'
import classes from '@/data/classes'
import projects, { Project } from '@/data/projects'
import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'
import { useMemo, useState } from 'react'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { FaLinkSlash } from 'react-icons/fa6'
import { GoClock } from 'react-icons/go'

const projectTechs = new Set<string>(
  projects.map((project) => project.techs.map((tech) => tech.name)).flat(),
)

export default function Projects() {
  const { searchValue, handleSearch } = useSearch('')
  const [selectedTechs, setSelectedTechs] = useState(new Set<string>())
  const toggleSelectedTechs = (tech: string) => {
    setSelectedTechs((prevSelectedTechs) => {
      const newSelectedTechs = new Set(prevSelectedTechs)

      if (newSelectedTechs.has(tech)) {
        newSelectedTechs.delete(tech)
      } else {
        newSelectedTechs.add(tech)
      }
      return newSelectedTechs
    })
  }

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Projects</Heading1>
      <SearchInput
        placeholder='Search...'
        value={searchValue}
        onChange={handleSearch}
      />
      <div className='flex self-start gap-4 flex-wrap'>
        {Array.from(projectTechs).map((tech, index) => {
          const isSelected = selectedTechs.has(tech)

          return (
            <div
              key={index}
              className={cn(
                'border rounded-2xl px-3 py-2 text-[12px] text-primary-light dark:text-primary-dark dark:border-secondary-dark cursor-pointer transition-all',
                isSelected
                  ? 'dark:bg-[#3a3a3a] bg-[#c9c9c9] hover:brightness-90 hover:dark:brightness-125'
                  : 'hover:dark:bg-primary-light hover:bg-primary-dark',
              )}
              onClick={() => toggleSelectedTechs(tech)}
            >
              {tech}
            </div>
          )
        })}
      </div>
      <div className='w-full grid grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} className='' />
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  className?: string
}

function ProjectCard({ project, className }: ProjectCardProps) {
  const mainTech = useMemo(() => {
    return project.techs.find((tech) => tech.main !== undefined && tech.main)
  }, [project.techs])

  return (
    <div
      className={cn(
        'flex flex-col border border-primary-dark dark:border-primary-light rounded-lg h-[500px] p-6',
        className,
      )}
    >
      <div className='flex flex-col gap-4'>
        <img
          src={mainTech?.imgUrl}
          alt={mainTech?.name ?? getAsset('noImg')!}
          width={36}
        />
        <div className='flex justify-between'>
          <h3 className='font-bold text-lg'>{project.name}</h3>
          <a
            href={project.githubUrl}
            target='_blank'
            className='border border-primary-dark dark:border-primary-light rounded-xl bg-transparent hover:bg-primary-dark hover:dark:bg-primary-light px-3 py-2 transition-colors'
          >
            <FaLinkSlash />
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <hr className='border border-primary-dark dark:border-primary-light brightness-150' />
          <div className='flex gap-2'>
            <AiOutlineDeploymentUnit size={20} />
            <span className='text-primary-light dark:text-primary-dark text-sm'>
              {project.type}
            </span>
          </div>
          <hr className='border border-primary-dark dark:border-primary-light brightness-150' />
          <div className='flex gap-2'>
            <GoClock size={20} />
            <span className='text-primary-light dark:text-primary-dark text-sm'>
              {`${project.days} ${project.days > 1 ? 'days' : 'day'}`}
            </span>
          </div>
        </div>
        <p className='py-6 text-[14px]'>{project.description}</p>
      </div>
    </div>
  )
}

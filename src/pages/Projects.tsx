import Heading1 from '@/components/custom/Heading1'
import { Hr } from '@/components/custom/Hr'
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
import Tilt from 'react-parallax-tilt'

const projectTechs = Array.from(
  new Set<string>(projects.map((project) => project.techs).flat()),
)

export default function Projects() {
  const { searchValue, handleSearch } = useSearch('')
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const toggleSelectedTechs = (tech: string) => {
    setSelectedTechs((prevSelectedTechs) => {
      const newSelectedTechs = new Set(prevSelectedTechs)

      if (newSelectedTechs.has(tech)) {
        newSelectedTechs.delete(tech)
      } else {
        newSelectedTechs.add(tech)
      }
      return Array.from(newSelectedTechs)
    })
  }
  const filtered = projects
    .filter((project) =>
      project.techs.some((tech) =>
        selectedTechs.length > 0 ? selectedTechs.includes(tech) : true,
      ),
    )
    .filter((project) =>
      project.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
    )

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Projects</Heading1>
      <SearchInput
        placeholder='Search...'
        value={searchValue}
        onChange={handleSearch}
      />
      <div className='flex self-start gap-4 flex-wrap'>
        {projectTechs.map((tech, index) => {
          const isSelected = selectedTechs.includes(tech)

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
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
        {filtered.map((project, index) => (
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
  const mainTech = project.techs[0]
  const asset = useMemo(() => getAsset(mainTech), [mainTech])

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor={asset.primaryColor}
      glarePosition='all'
      scale={1}
      transitionSpeed={1000}
    >
      <div
        className={cn(
          'flex flex-col border border-primary-dark dark:border-primary-light rounded-lg h-[500px] p-6 cursor-pointer bg-white dark:bg-black hover:brightness-100 hover:dark:brightness-200',
          className,
        )}
      >
        <div className='flex flex-col gap-4 h-full'>
          <img src={asset.url} alt={asset.name} width={36} />
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
            <Hr />
            <div className='flex gap-2'>
              <AiOutlineDeploymentUnit size={20} />
              <span className='text-primary-light dark:text-primary-dark text-sm'>
                {project.type}
              </span>
            </div>
            <Hr />
            <div className='flex gap-2'>
              <GoClock size={20} />
              <span className='text-primary-light dark:text-primary-dark text-sm'>
                {`${project.days} ${project.days > 1 ? 'days' : 'day'}`}
              </span>
            </div>
            <Hr />
          </div>
          <p className='grow py-6 text-[14px]'>{project.description}</p>
          <div className='flex justify-between items-end'>
            {[project.startDate, project.endDate].map((e, index) => (
              <div
                key={index}
                className={cn(
                  'border rounded-2xl px-3 py-2 text-[8px] text-primary-light dark:text-primary-dark dark:border-secondary-dark cursor-pointer transition-all hover:dark:bg-primary-light hover:bg-primary-dark',
                )}
              >
                {e}
              </div>
            ))}
          </div>
          <Hr />
          <div className='flex gap-4'>
            {project.techs.map((tech, index) => {
              const asset = getAsset(tech)

              return (
                <div
                  key={index}
                  className='content-center h-[32px] w-[32px] p-2 border border-primary-dark dark:border-primary-light brightness-75 dark:brightness-150 rounded-lg transition-all hover:dark:bg-primary-light hover:bg-primary-dark'
                >
                  <img
                    src={asset.url}
                    alt={'Spring Boot'}
                    className='opacity-90'
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Tilt>
  )
}

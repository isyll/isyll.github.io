import Heading1 from '@/components/custom/Heading1'
import SearchInput from '@/components/custom/SearchInput'
import classes from '@/data/classes'
import projects, { Project } from '@/data/projects'
import useSearch from '@/hooks/useSearch'
import { cn } from '@/lib/utils'
import { useState } from 'react'

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
      <div className=' grid grid-cols-2'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
  return <div className={cn(className)}>{project.name}</div>
}

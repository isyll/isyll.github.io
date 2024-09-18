import SearchInput from '@/components/custom/SearchInput'
import Heading1 from '@/components/custom/Heading1'
import classes from '@/data/classes'
import skills, { Skill } from '@/data/skills'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import useSearch from '@/hooks/useSearch'

export default function Skills() {
  const { searchValue, handleSearch } = useSearch('')

  let skillsData: Skill[] = skills
  if (searchValue.length > 0) {
    const value = searchValue.trim().toLowerCase()
    skillsData = skills.map((skill) => ({
      ...skill,
      skills: skill.skills.filter((item) =>
        item.name.toLowerCase().includes(value),
      ),
    }))
  }

  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Skills</Heading1>
      <SearchInput
        placeholder='Search...'
        value={searchValue}
        onChange={handleSearch}
      />
      <div className='flex flex-col gap-2 w-full'>
        {skillsData.map(
          (skill, index) =>
            skill.skills.length > 0 && <SkillCard key={index} skill={skill} />,
        )}
      </div>
    </div>
  )
}

interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className=''>
      <div className='flex items-center gap-4 my-3'>
        <div className='horizontal-line w-6'></div>
        <h2 className='text-secondary-dark dark:text-primary-light text-lg brightness-150'>
          {skill.category}
        </h2>
        <div className='horizontal-line grow'></div>
      </div>
      <div className=' grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-0'>
        {skill.skills.map((data, index) => {
          const hasDark = data.dark !== undefined

          const element = (className: string) => (
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1.5 }}
              className={cn(
                'flex-row items-center gap-4 justify-start py-8 px-10 cursor-pointer',
                className,
              )}
            >
              <img src={data.imgUrl} alt={data.name} width={50} />
              <h3>{data.name}</h3>
            </motion.div>
          )

          return (
            <div key={index}>
              {element(cn(hasDark ? 'dark:hidden' : '', 'flex'))}
              {hasDark && element(cn('hidden dark:flex'))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

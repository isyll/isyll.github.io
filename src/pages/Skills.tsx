import Heading1 from '@/components/ui/Heading1'
import classes from '@/data/classes'
import skills, { Skill } from '@/data/skills'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChangeEvent, useState } from 'react'

export default function Skills() {
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

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
    <div
      className={cn(
        classes.rootPadding,
        'flex flex-col gap-6 items-center py-14',
      )}
    >
      <Heading1>Skills</Heading1>
      <input
        type='text'
        className='transition-all duration-200 bg-transparent focus:bg-primary-dark dark:focus:bg-primary-light outline-none border border-primary-light border-opacity-10 focus:border-opacity-100 dark:border-primary-dark rounded-xl px-4 py-3 min-w-[100%]'
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
      <div className='flex items-center gap-4 my-5'>
        <div className='horizontal-line w-6'></div>
        <h2 className='text-primary-dark dark:text-primary-light text-lg brightness-150'>
          {skill.category}
        </h2>
        <div className='horizontal-line grow'></div>
      </div>
      <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
        {skill.skills.map((data, index) => {
          const hasDark = data.dark !== undefined

          return (
            <div key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1.5 }}
                style={{
                  // background: `linear-gradient(to right, ${data.logoPrimaryColor}, )`,
                  backgroundColor: data.logoPrimaryColor,
                }}
                className={cn(
                  hasDark ? 'dark:hidden' : '',
                  ` flex justify-between items-center rounded-xl py-8 px-10 cursor-pointer border border-primary-dark dark:border-primary-light`,
                )}
              >
                <h3>{data.name}</h3>
                <img src={data.imgUrl} alt={data.name} width={36} />
              </motion.div>
              {hasDark && (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1.5 }}
                  style={{
                    // background: `linear-gradient(to right, ${data.logoPrimaryColor}, )`,*
                    backgroundColor: data.logoPrimaryColor,
                  }}
                  className={cn(
                    ` hidden dark:flex justify-between items-center rounded-xl py-8 px-10 cursor-pointer border border-primary-dark dark:border-primary-light`,
                  )}
                >
                  <h3>{data.name}</h3>
                  <img src={data.imgUrl} alt={data.name} width={36} />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

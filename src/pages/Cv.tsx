import Heading1 from '@/components/custom/Heading1'
import classes from '@/data/classes'
import { cn } from '@/lib/utils'
import { File } from 'lucide-react'

export default function Cv() {
  return (
    <div className={cn(classes.rootPadding, classes.content)}>
      <Heading1>Resume</Heading1>
      <div className='flex flex-col gap-6 underline underline-offset-4'>
        <a
          href='/files/Ibrahima_Sylla_french.pdf'
          target='_blank'
          className='flex items-center gap-2 border border-primary-dark dark:border-primary-light rounded-xl'
        >
          <File /> CV in French
        </a>
        <a
          href='/files/Ibrahima_Sylla_english.pdf'
          target='_blank'
          className='flex items-center gap-2 border border-primary-dark dark:border-primary-light rounded-xl'
        >
          <File /> CV in English
        </a>
      </div>
    </div>
  )
}

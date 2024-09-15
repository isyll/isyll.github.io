import clsx from 'clsx'
import classes from '../data/classes'
import texts from '../data/texts'

export default function Home() {
  return (
    <div className={clsx('flex', classes.rootPadding)}>
      <div>
        <h1 className='text-[70px] font-bold'>Ibrahima Sylla</h1>
        <p className='text-primary-light dark:text-primary-dark font-light'>
          {texts.bio}
        </p>
      </div>
      <div></div>
    </div>
  )
}

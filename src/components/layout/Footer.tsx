import { cn } from '@/lib/utils'
import classes from '@/data/classes'

interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  // const asset = useMemo(() => getAsset('React')!, [])
  const textClass =
    'text-primary-light dark:text-primary-dark brightness-125 dark:brightness-75'

  return (
    <footer
      className={cn(
        ' flex justify-center',
        classes.rootPadding,
        'py-4',
        className,
      )}
    >
      {/* <Logo className='brightness-125 dark:brightness-75' />
      <h3 className={cn(textClass, 'flex items-center gap-2')}>
        This site was built with <SpinningImage asset={asset} />
      </h3> */}
      <p className={textClass}>&copy; 2024 Ibrahima Sylla</p>
    </footer>
  )
}

// const SpinningImage = ({ asset }: { asset: Asset }) => {
//   return (
//     <motion.img
//       src={asset.url}
//       alt={asset.name}
//       className='w-8 h-8'
//       animate={{ rotate: 360 }}
//       transition={{
//         repeat: Infinity,
//         duration: 7,
//         ease: 'linear',
//       }}
//     />
//   )
// }

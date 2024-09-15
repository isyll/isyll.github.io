import clsx from 'clsx'
import { MdTerminal } from 'react-icons/md'

interface Props {
  className?: string
  textClass?: string
}

export default function Logo({ className, textClass }: Props) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 font-semibold text-lg',
        className,
      )}
    >
      <MdTerminal size={30} />
      <span className={textClass}>Isyll</span>
    </div>
  )
}

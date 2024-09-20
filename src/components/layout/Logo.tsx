import clsx from 'clsx'
import { MdTerminal } from 'react-icons/md'

interface Props {
  className?: string
  textClass?: string
  hideLogo?: boolean
}

export default function Logo({
  className,
  textClass,
  hideLogo = false,
}: Props) {
  return (
    <a
      href='/'
      className={clsx(
        'flex items-center gap-2 font-semibold text-lg',
        className,
      )}
    >
      {!hideLogo && <MdTerminal size={30} />}
      <span className={textClass}>Isyll</span>
    </a>
  )
}

import clsx from 'clsx'

function Button({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      className={clsx(
        'bg-primary rounded-md px-6 py-3 hover:brightness-125 transition-all duration-300',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button

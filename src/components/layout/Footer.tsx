import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cn(className)}>
      {/* <p>&copy; 2024 Ibrahima Sylla</p> */}
    </footer>
  )
}

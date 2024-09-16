import { ReactNode } from 'react'

export default function Heading1({ children }: { children: ReactNode }) {
  return (
    <h1 className='md:text-[72px] text-[60px] font-[900] leading-none'>
      {children}
    </h1>
  )
}

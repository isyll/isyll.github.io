import { ChangeEvent } from 'react'

interface Props {
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({ placeholder, value, onChange }: Props) {
  return (
    <input
      type='text'
      className='transition-all duration-200 bg-transparent focus:bg-primary-dark dark:focus:bg-primary-light outline-none border border-primary-light focus:border-primary-dark border-opacity-10 focus:border-opacity-100 dark:border-secondary-dark focus:dark:border-[#888] rounded-xl px-4 py-3 min-w-[100%]'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

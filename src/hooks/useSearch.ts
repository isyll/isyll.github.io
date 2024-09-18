import { ChangeEvent, useState } from 'react'

export default function useSearch(value: string) {
  const [searchValue, setSearchValue] = useState(value)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return { searchValue, handleSearch }
}

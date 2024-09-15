import { useState } from 'react'
import { IoSunnySharp } from 'react-icons/io5'
import { MdOutlineDarkMode } from 'react-icons/md'

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button onClick={toggleDarkMode} className='header-btn'>
      {dark ? <MdOutlineDarkMode size={24} /> : <IoSunnySharp size={24} />}
    </button>
  )
}

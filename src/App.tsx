import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import { useDarkMode } from 'usehooks-ts'
import Layout from '@/components/layout/Layout'
import Education from '@/pages/Education'
import Projects from '@/pages/Projects'
import Experiences from '@/pages/Experiences'
import Cv from '@/pages/Cv'
import Skills from '@/pages/Skills'

export default function App() {
  const { isDarkMode } = useDarkMode()
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else document.documentElement.classList.remove('dark')

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/cv' element={<Cv />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

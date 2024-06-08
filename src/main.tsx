import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/blog/Blog.tsx'
import MyProjects from './pages/my-projects/MyProjects.tsx'
import Cv from './pages/cv/Cv.tsx'
import Bio from './pages/bio/Bio.tsx'
import Contact from './pages/contact/Contact.tsx'
import Home from './pages/home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)

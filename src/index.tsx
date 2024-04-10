import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import './i18n'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Bio from './pages/bio/Bio'
import MyProjects from './pages/my-projects/MyProjects'
import Blog from './pages/blog/Blog'
import Cv from './pages/cv/Cv'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

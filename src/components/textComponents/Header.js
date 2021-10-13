import React from 'react'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import '../assets/styles.css'


const Header = ({ openContact, setOpenContact, openAbout, setOpenAbout, openSkills, setOpenSkills, openProjects, setOpenProjects }) => {

  if(openAbout === true){
    return (
      <About openAbout={openAbout} setOpenAbout={setOpenAbout} />
    )
  }

  if(openSkills === true){
    return (
      <Skills openSkills={openSkills} setOpenSkills={setOpenSkills} />
    )
  }

  if(openProjects === true) {
    return (
      <Projects openProjects={openProjects} setOpenProjects={setOpenProjects} />
    )
  }

  if(openContact === true){
    return (
      <Contact openContact={openContact} setOpenContact={setOpenContact} />
    )
  }

  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Stunning.</div>
        <nav>
          <ul>
            <li>
              <p onClick={() => setOpenAbout(!openAbout)}>About</p>
            </li>
            <li>
              <p onClick={() => setOpenSkills(!openSkills)}>Skills</p>
            </li>
            <li>
              <p onClick={() => setOpenProjects(!openProjects)}>Projects</p>
            </li>
            <li className='btn'>
              <p onClick={() => setOpenContact(!openContact)}>Contact</p>
            </li>
          </ul>
        </nav>
        <a className='resetButton' href='/'>Reset</a>
      </div>
    </header>
  )
}

export default Header

/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import navBar from './NavBar.module.css'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  const gotoSection = (event) => {
    event.preventDefault()
    document.body.style.overflow = 'scroll'
    window.scrollTo(window.pageXOffset, 10)
  }
  const handleScroll = () => {
    window.scrollTo(window.pageXOffset, 10)
    document.body.style.overflow = 'scroll'
  }

  window.onscroll = () => {
    const nav = document.getElementById('navBar')
    if (window.pageYOffset >= 10) {
      nav.style.background = '#0000005c'
      setScrolled(true)
    } else {
      setScrolled(false)
      document.body.style.overflow = 'hidden'
      nav.style.background = 'transparent'
    }
  }

  return (
    <div className={scrolled ? navBar.styles : `${navBar.styles} ${navBar.stylesR}`} id="navBar">
      <div className={!scrolled ? navBar.title : navBar.header}>
        <h1>Erick Guerra:</h1>
        <p>Portafolio de proyectos</p>
        <a onClick={handleScroll}>
          <span className={navBar.arrow} />
        </a>
      </div>
      <nav>
        <ul>
          <a href="#about" onClick={gotoSection}>
            Sobre mí
          </a>
          <a href="#skills" onClick={() => { document.body.style.overflow = 'scroll' }}>
            Habilidades
          </a>
          <a href="#projects" onClick={() => { document.body.style.overflow = 'scroll' }}>
            Proyectos
          </a>
          <a href="#contact" onClick={() => { document.body.style.overflow = 'scroll' }}>
            Contacto
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

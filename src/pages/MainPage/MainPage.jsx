import React from 'react'
import mainPage from './MainPage.module.css'
import { NavBar } from '../../components'
import Slider from '../../components/Slider'
import { backend, frontend, projects } from '../../data/data'
import Carousel from '../../components/Carousel/Carousel'

const MainPage = () => (
  <div className={mainPage.styles}>
    <NavBar />
    <div className={mainPage.section} id="about">
      <h1>Sobre mí</h1>
      <div className={mainPage.about}>
        <img src="/21781/portfolio/me.jpg" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>
            {`Soy un joven estudiante con mucho que aprender, pero con mucho entusiasmo.
            Entre mis pasiones se encuentra la música, explorar la naturaleza, admirar el arte, las buenas historias y, por supuesto, la programación.
            Me encanta resolver problemas mediante código y retar mis habilidades cada vez que pueda.`}
          </p>
          <a href="https://www.canva.com/design/DAFXfFHPi9Y/idKeMFyGkNdWVwCyWAM0WQ/view?utm_content=DAFXfFHPi9Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            Conoce más de mí
          </a>
        </div>
      </div>
    </div>
    <div className={`${mainPage.section} ${mainPage.skills}`} id="skills">
      <h1 style={{ gridColumn: 'span 2' }}>Habilidades</h1>
      <Slider elements={frontend} />
      <Slider elements={backend} />
    </div>
    <div className={mainPage.section} id="projects">
      <h1>Proyectos</h1>
      <Carousel elements={projects} />
    </div>
    <div className={`${mainPage.footer} ${mainPage.section}`} id="contact">
      <h1>Sigamos en contacto!</h1>
      <div className={mainPage.socialMedia}>
        <a href="https://github.com/erickguerra22">
          <img src="/21781/portfolio/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/erick-guerra-02a80b204/?original_referer=">
          <img src="/21781/portfolio/linkedin.svg" />
        </a>
        <a href="mailto:erickguerra2201@gmail.com?Subject=Te%20contacto%20desde%20tu%20portafolio!">
          <img src="/21781/portfolio/email.svg" />
        </a>
      </div>
    </div>
  </div>
)

export default MainPage

/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import carousel from './Carousel.module.css'

const Carousel = ({ elements }) => {
  const [currentObjects, setCurrentObjects] = useState([elements[0], elements[1], elements[2]])
  const lastElement = elements.length - 1

  const handleChange = async (direction) => {
    setCurrentObjects((old) => {
      const next = elements.indexOf(old[2]) !== lastElement ? elements.indexOf(old[2]) + 1 : 0
      const prev = elements.indexOf(old[0]) !== 0 ? elements.indexOf(old[0]) - 1 : lastElement
      if (direction === -1) return [elements[prev], old[0], old[1]]
      return [old[1], old[2], elements[next]]
    })
  }

  return (
    <div className={carousel.styles}>
      {currentObjects.map((el, index) => {
        const key = `slideno-${index}`
        return (
          <div
            key={key}
            className={index === 1 ? `${carousel.element} ${carousel.main}` : `${carousel.element} ${carousel.back}`}
          >
            <img src={el.img} />
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <div className={carousel.links}>
              <a href={el.link} target="_blank" rel="noreferrer">Visitar</a>
              <a href={el.git} target="_blank" rel="noreferrer">
                <img src="/21781/portfolio/github.svg" />
              </a>
            </div>
          </div>
        )
      })}
      <div className={carousel.controlers}>
        <span onClick={() => handleChange(-1)}>{'<'}</span>
        <span onClick={() => handleChange(1)}>{'>'}</span>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default Carousel

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import slider from './Slider.module.css'

const Slider = ({ elements }) => {
  const [currentObject, setCurrentObject] = useState(elements[0])

  // eslint-disable-next-line no-promise-executor-return
  const delay = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

  return (
    <div className={slider.styles}>
      {elements.map((el, index) => {
        const key = `slideno-${index}`
        return (
          <div
            key={key}
            className={el === currentObject ? slider.slide : `${slider.slide} ${slider.hiddenSlide}`}
            id={`slide-${index}`}
          >
            <img src={el.img} />
            <div className={slider.info}>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
            </div>
          </div>
        )
      })}
      <div className={slider.dots}>
        {elements.map((el, index) => {
          const key = `dot-${index}`
          return (
            <span
              key={key}
              onClick={async () => {
                const oldSlide = document.getElementById(`slide-${elements.indexOf(currentObject)}`)
                oldSlide.classList.add(`${slider.hideSlide}`)
                await delay(0.2)
                oldSlide.classList.remove(`${slider.hideSlide}`)
                setCurrentObject(elements[index])
              }}
              style={{ background: `${el === currentObject ? 'black' : ''}` }}
            />
          )
        })}
      </div>
    </div>
  )
}

Slider.defaultProps = {

}

Slider.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default Slider

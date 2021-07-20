import React, {useState} from 'react'
import { Info } from './Info'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft,} from 'react-icons/fa'
import './display.css'

const Displayinfo = ({slides}) => {
  const [slideIndex, updateSlideIndex] = useState(0)
   const length = slides.length

const nextSlide = () => {
  updateSlideIndex(slideIndex === length -1 ? 0: slideIndex + 1)
}
const prevSlide = () => {
  updateSlideIndex(slideIndex === 0 ? length-1: slideIndex - 1)
}
   if(!Array.isArray(slides) || slides.length <= 0){
     return <> </>
   }

  
  return (
    <section className="slider">
    <FaArrowAltCircleLeft className="left" onClick={prevSlide} />
    <FaArrowAltCircleRight className="right" onClick={nextSlide}/>
    <div classname="foo">
      <div className="cover" style ={{background: `url(${slides[slideIndex].image}) center/cover`}}>
      <h3>{slides[slideIndex].title}</h3>
      <p>{slides[slideIndex].text} </p>
      </div>
    </div>
    
    

    </section>
  )
}

export default Displayinfo

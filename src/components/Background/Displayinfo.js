import React, {useState} from 'react'
import { Info } from './Info'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft,} from 'react-icons/fa'
import './display.css'

const Displayinfo = ({slides}) => {
  const [img, imgUpdate] = useState(0)
   const length = slides.length

const nextSlide = () => {
  imgUpdate(img === length -1 ? 0: img + 1)
}
const prevSlide = () => {
  imgUpdate(img === 0 ? length-1: img - 1)
}
   if(!Array.isArray(slides) || slides.length <=0){
     return null
   }

  
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right" onClick={nextSlide}/>
    {Info.map((slide,index) => {
      return(
        <div className={index === img ? 'slide-active' : 'slide'} key={index}>
          {index === img && (<img src={slide.image} alt="about me" className="image"/>)}
        
        
        </div>
      )
    })}
    </section>
  )
}

export default Displayinfo

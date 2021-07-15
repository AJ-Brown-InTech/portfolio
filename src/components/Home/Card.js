import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import './Cards.css'
import {Link} from 'react-router-dom'


export default function Card(props){
  const [isFlipped, setFlipped] = useState(false)
  const handleClick = () => {
    setFlipped(!isFlipped)
  } 



  return(
  
        <Link to={props.cardData.link}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="front"  onMouseOver={handleClick} style={{backgroundColor: `SlateBlue`}}>
              {props.cardData.front}
            </div>
            <div className="back" onMouseOver={handleClick}>
             {props.cardData.back}
            </div>
            </ReactCardFlip>
        </Link>
 
  )
}
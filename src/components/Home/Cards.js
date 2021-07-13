import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

export default function Cards(){
  
  const CardFlip = () => {
  const [isFlipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!isFlipped)
  } 

    return (
      
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            This is the front of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
          <div>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
      
    )
  }
  
}


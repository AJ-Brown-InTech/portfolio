import React from 'react'
import Card from './Card'


export default function Cards(){
 const cardData = [
   {front:"About",   
    back: "Learn about me",
    link: "/about"
  },

   {front:"Background.", 
   back: "Learn about my Experience.",
   link: "/background"
  },
  {front:"Skills",   
    back: "Learn about some of the technologies I use.",
    link: "/skill"
  },
  {front:"Contact",   
    back: "Learn what options you have to contact me.",
    link: "/contact"
  },
 ]

    return (
      <>
      <div className="container">
        <div className="cards">
        
              {cardData.map( x=> <Card key={x.front} cardData={x} /> )}
        
        </div>
      </div>
      </>
    )
  
  
}


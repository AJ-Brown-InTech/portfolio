import React from 'react'
import Card from './Card'



export default function Cards(){
 const cardData = [
   {front:"About",   
    back: "Learn about me",
    link: "/about"
  },

   {front:"Background.", 
   back: "Take a look at my experience",
   link: "/background"
  },
  {front:"Skills",   
    back: "View some of the tools I use.",
    link: "/skill"
  },
  {front:"Contact",   
    back: "Lets Connect",
    link: "/contact"
  },
 ]

    return (
      <>
      <div className="container" >
        <div className="cards">
        {cardData.map( x => <Card key={x.front} cardData={x} /> )}
        </div>
      </div>
      </>
    )
  
  
}


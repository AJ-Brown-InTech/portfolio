import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Cards from './Cards'



export default function Home(){
    return(
      
        <>
          <div className="home" style={{
            backgroundColor: `grey`}}>
            <h1>Home Component</h1>
            <div >
              <Cards/> 
            </div>
            <Link to="/about"><button>Next</button></Link>
          </div>
        </>
    )
}

   
   
  

  
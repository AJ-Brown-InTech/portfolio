import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
// import Cards from './Cards'



export default function Home(){
    return(
      
        <>
          <div className="home" style={{
            backgroundImage: `URL(https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)`}}>
            <h1>Home Component</h1>
            <div className="cards">
              {/* <Cards/> */}
            </div>
            <Link to="/about"><button>Next</button></Link>
          </div>
        </>
    )
}

   
   
  

  
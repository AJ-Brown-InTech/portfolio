import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'

export default function About(){
 return(
  <>
    <div className="about">About Comp
    <Link to="/"><button>Back</button></Link>
     <Link to="/background"><button>Next</button></Link>
    </div>
   
  </>
  )
}
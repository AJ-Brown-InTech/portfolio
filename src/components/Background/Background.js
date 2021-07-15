import React from 'react'
import'./background.css'
import {Link} from 'react-router-dom'

export default function Background(){
 return(
  <>
    <div className="background">Background Comp
    <Link to="/about"><button>Back</button></Link>
     <Link to="/skill"><button>Next</button></Link>
    <a href="https://drive.google.com/file/d/1vU9ftsl50yItiCn-vT9zHvBrOi9Xn65M/view?usp=sharing" target="_blank"> Money </a>
    </div>
   
  </>
  )
}
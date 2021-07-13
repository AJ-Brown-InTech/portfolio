import React from 'react'
import'./background.css'
import {Link} from 'react-router-dom'

export default function Background(){
 return(
  <>
    <div className="background" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80)`
    }}>Background Comp
    <Link to="/about"><button>Back</button></Link>
     <Link to="/skill"><button>Next</button></Link>
    <a href="https://drive.google.com/file/d/1vU9ftsl50yItiCn-vT9zHvBrOi9Xn65M/view?usp=sharing" target="_blank"> Money </a>
    </div>
   
  </>
  )
}
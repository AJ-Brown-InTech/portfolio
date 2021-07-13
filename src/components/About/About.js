import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'

export default function About(){
 return(
  <>
    <div className="about" style={{
      backgroundImage: `URL(https://images.unsplash.com/photo-1608447714925-599deeb5a682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80)`
    }}>About Comp
    <Link to="/"><button>Back</button></Link>
     <Link to="/background"><button>Next</button></Link>
    </div>
   
  </>
  )
}
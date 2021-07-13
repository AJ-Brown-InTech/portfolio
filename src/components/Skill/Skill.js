import React from 'react'
import './skill.css'
import {Link} from 'react-router-dom'

export default function Skill(){
 
  return(

    <div className="skill" style={{
      backgroundImage: `url(https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
    }}>Skill Comp
<Link to="/background"><button>Back</button></Link>
     <Link to="/contact"><button>Next</button></Link>

    </div>
    
   

   )
}
import React from 'react'
import'./background.css'
import {Link} from 'react-router-dom'
import Displayinfo from './Displayinfo'
import { Info } from './Info'




export default function Background(){
 return(
  <>
    <div className="background">
    <h2>Background </h2>
     
    <Displayinfo slides={Info}/>
    </div>
  
  </>
  )
}
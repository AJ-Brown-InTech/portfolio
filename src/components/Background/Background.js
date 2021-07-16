import React from 'react'
import'./background.css'
import {Link} from 'react-router-dom'
import Displayinfo from './Displayinfo'
import { Info } from './Info'


export default function Background(){
 return(
  <>
    <div className="background">
    <Displayinfo slides={Info}/>
    </div>
   
  </>
  )
}
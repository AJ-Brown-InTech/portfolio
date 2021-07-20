import React from 'react'
import'./background.css'
import {Link} from 'react-router-dom'
import Displayinfo from './Displayinfo'
import { Info } from './Info'
import{AnimatePresence, motion} from 'framer-motion'



export default function Background(){
 return(
  <>
    <motion.div className="background" initial={{scaleY: 0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration: .5}}>
    <h2>Background </h2>
     
    <Displayinfo slides={Info}/>
    </motion.div>
  
  </>
  )
}
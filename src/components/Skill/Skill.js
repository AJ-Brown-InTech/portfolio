import React from 'react'
import './skill.css'
import Tools from './Tools'
import{AnimatePresence, motion} from 'framer-motion'

export default function Skill(){
 
  return(

    <motion.div initial={{scaleY: 0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration: .5}} className="skill">
      <h2>Skills </h2>

<Tools/>
    </motion.div>
    
   

   )
}
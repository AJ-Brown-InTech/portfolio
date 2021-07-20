import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'
import{AnimatePresence, motion} from 'framer-motion'
import me from '../About/me.JPG'


export default function About(){
 return(
  <>
    <motion.div initial={{scaleY: 0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration: .5}}>
    <h2>About </h2>
    <p className="about">
    <img className="me" src={me} alt="Me"/>
      <h4>I'm AJ, a Front-End Developer!</h4>
      
      I design and develop innovative solutions using readable code. It wasn't always like this though. I started my professional career in the military and quickly transitioned over to mortgage banking and management.
      A little under two years ago I found my fascination for technology and started building technical skills starting with a simple "pwd" command in a terminal. 
       I'm looking to join a team who also has a passion for technology, design and just computers in general. I want to leverage my corporate background, knowledge, and ambition curating new ideas and be a team-player to a dynamic organization. 
    </p>
    
    
    </motion.div>
   
  </>
  )
}
import React from 'react'
import { IconName } from 'react-icons/io'
import {motion} from 'framer-motion'
import './icon.css'

export default function Icon(){
  return(    
<>
            
 <div className='bottom'> 
 
           <ul className="icon .footer" >
   <motion.li className='E' whileHover={{scale: 1.15,
             textShadow: "0px 0px 9px white",}} ><a href="mailto:ajalantbrown@outlook.com " target="_blank" alt="Email"><ion-icon name="mail-outline" size="large" /></a></motion.li>
   <motion.li className='L' whileHover={{scale: 1.15,
             textShadow: "0px 0px 9px white",}}><a target="_blank" href="https://www.linkedin.com/in/ajtbrown/ " alt="LinkedIn"><ion-icon name="logo-linkedin" size="large" /></a></motion.li>
   <motion.li className='G' whileHover={{scale: 1.15,
             textShadow: "0px 0px 9px white",}}><a target="_blank" href=" https://github.com/AJ-Brown-InTech " alt="GitHub"><ion-icon name="logo-github" size="large" /></a></motion.li>
    <motion.li className='G' whileHover={{scale: 1.15,
             textShadow: "0px 0px 9px white",}}><a target="_blank" href=" https://drive.google.com/file/d/1ZGCSctMI-JC6jCZ4BAgS7WaWBcTkw_Hz/view?usp=sharing" alt="Resume"><ion-icon name="newspaper-outline" size="large" /></a></motion.li>
             
           </ul>
 </div>
</>
    
  )
}
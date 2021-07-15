import React from 'react'
import { IconName } from 'react-icons/io'
import {motion} from 'framer-motion'
import './icon.css'

export default function Icon(){
  return(    
<>
            
  
  
          <motion.ul className="icon .footer" whileHover={{scale: 1.15,
            textShadow: "0px 0px 9px white",}}>
  <h4>Get In Touch</h4>
  <li><a href="mailto:ajalantbrown@outlook.com " target="_blank" alt="Email"><ion-icon name="mail-outline" size="small" /></a></li>
  <li><a target="_blank" href="https://www.linkedin.com/in/ajtbrown/ " alt="LinkedIn"><ion-icon name="logo-linkedin" size="small" /></a></li>
  <li><a target="_blank" href=" https://github.com/AJ-Brown-InTech " alt="GitHub"><ion-icon name="logo-github" size="small" /></a></li>
          </motion.ul>
</>
    
  )
}
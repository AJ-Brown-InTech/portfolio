import React from 'react'
import './contact.css'
import Form from './Form'
import{AnimatePresence, motion} from 'framer-motion'


export default function Contact(){
  
 return (

    <motion.div initial={{scaleY: 0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration: .5}} className="contact" >
      <h2>Contact </h2>
      <Form/>
      <h2>Lets Connect</h2>
    </motion.div>
   
  
  )
}
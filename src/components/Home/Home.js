import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Cards from './Cards'
import Typist from 'react-typist'
import {motion} from 'framer-motion'



export default function Home(){
    return(
      
        
          <motion.div className="home" 
             //initial={{opacity: .01}}
             //animate={{opacity: 1}}
           // transition={{delay: 1, duration: 1 }}
            >
            <Typist.Delay ms={500} >
              <h2>Hey, I'm AJ. <br/ > A Front-end Engineer.</h2>
              </Typist.Delay>
              <br/ >
              <Cards/> 
              <br/ >
              <Typist.Delay ms={1000}><h2>Feel free to look around.</h2>             
              </Typist.Delay>
          </motion.div>
        
    )
}

   
   
  

  
import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Cards from './Cards'
import Typist from 'react-typist'
import {motion} from 'framer-motion'



export default function Home(){
    return(
      
        
          <motion.div className="home" 
             initial={{opacity: .1}}
             animate={{opacity: 1}}
             transition={{delay: .3, duration: .7 }}
            >
            <Typist>
              <h2 >Hey, I'm AJ.</h2>
              </Typist>
              <br/ >
              <Cards/> 
              <br/ >
              <Typist><h2 >Feel free to look around.</h2>             
              </Typist>
          </motion.div>
        
    )
}

   
   
  

  
import React from 'react'
import {motion} from 'framer-motion'
import Tool from './tool.css'

export default function showSkill({toolData}){
    return (
        
    
        // <motion.main className ="tool" >
        <div className="data"style={{backgroundColor: 'whitesmoke'}}>
        <img className="img" style={{backgroundColor: 'whitesmoke'}} src={toolData.image}  alt="Programming Tool"/>
        <h2>{toolData.tool}</h2>
        </div>
        // </motion.main>


    

    )

}
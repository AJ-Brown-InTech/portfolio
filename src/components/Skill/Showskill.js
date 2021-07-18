import React from 'react'
import {motion} from 'framer-motion'
import Tool from './tool.css'
import {framer} from 'framer-motion'

export default function showSkill({toolData}){
    return (
        
    
            
            <motion.div className="sub">
            
                <motion.div className="data"style={{backgroundColor: 'whitesmoke'}} whileHover={{scale: .9,
                 textShadow: "0px 0px 9px white",}}>
                <img className="img" style={{backgroundColor: 'whitesmoke'}} src={toolData.image}  alt="Programming Tool"/>
                <h3 className="words">{toolData.tool}</h3>
                </motion.div>
            </motion.div>
    
        


    

    )

}
import React from 'react'



export default function Tools() {
  
  const toolData = [
    {tool: 'HTML5'},
    {tool: 'CSS3'},
    {tool: 'Javascript'},
    {tool: 'React'},
    {tool: 'Node.js'},
    {tool: 'Express'},
    {tool: 'Git'},
    {tool: 'Linux'},
    {tool: 'Windows 10'},
    {tool: 'JSX'},
    {tool: 'Bootstrap'},
    {tool: 'Github'},  
    ]
     
      return(
        <div className="container" >
        <div className="cards">
        {toolData.map(x => <main key={x.tool} toolData={x} />)}
        </div>
        </div>
      )
    
  
}


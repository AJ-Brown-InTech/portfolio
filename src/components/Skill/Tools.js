import React from 'react'
import Showskill from './Showskill'

const toolData = [
  {tool: 'HTML5',
image: 'https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png'},
  {tool: 'CSS3',
image:'https://www.thecrazyprogrammer.com/wp-content/uploads/2017/11/CSS3.jpg'},
  {tool: 'Javascript',
image:'https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png'},
  {tool: 'React',
image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'},
  {tool: 'Node.js',
image:'https://miro.medium.com/max/400/1*JmhL1ebyzd7mhlcacz-b9g.jpeg'},
  {tool: 'Express',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdFh48euBGCbIFpKUW3fGizMWiNsSWmXf_Q&usqp=CAU'},
  {tool: 'Git',
image:'https://www.fullstackpython.com/img/logos/git.png'},
  {tool: 'Linux',
image:'https://www.debian.org/Pics/debian-logo-1024x576.png'},
  {tool: 'Windows 10',
image: 'https://redislabs.com/wp-content/uploads/2020/06/blog-featured-image-windows-10-1200x1000-1.jpg'},
  {tool: 'JSX',
  image:'https://i.morioh.com/200626/3c53255f.jpg'},
  {tool: 'Bootstrap',
image:'https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png'},
  {tool: 'Github',
image:'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png'},  
  ]

export default function Tools() {
  
       return (

        
        <div className="sum">
        {toolData.map(x => <Showskill key={x.tool} toolData={x}/>)}
        </div>
        

      )
    
  
}


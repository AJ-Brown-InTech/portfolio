import React from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select' 
import Icon from '../Icon/icon'





import './navbar.css'


export default function Navbar(){
 
  const history = useHistory()

  const options = [

    {value: "/home", label: "Home"},
    {value: "/about", label: "About"},
    {value: "/background", label: "Background"},
    {value: "/skill", label: "Skills"},
    {value: "/contact", label: "Contact"},

  ]
 
  
  return (
 
<div className="nav">
  
  <Select className="select" placeholder='Menu' options={options} onChange={({value}) => {history.push(value)}}/> 
  <div className="divvy">
    <a className="resume" href="https://drive.google.com/file/d/1vU9ftsl50yItiCn-vT9zHvBrOi9Xn65M/view?usp=sharing" target="_blank"> Resume </a>
    </div>
  <Icon/>
</div>

  )
}
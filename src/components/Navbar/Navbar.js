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
 
  <Icon/>
</div>

  )
}
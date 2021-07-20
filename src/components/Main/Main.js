import React from 'react'
import About from '../About/About'
import Background from '../Background/Background'
import Skill from '../Skill/Skill'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { AnimatePresence, motion } from 'framer-motion'


import './main.css'
import {Switch, Route, BrowserRouter as Router, Redirect, useLocation} from 'react-router-dom'


export default function Main() {
  const location = useLocation()
  
  return (
<div style={{backgroundColor: 'BlanchedAlmond'}}>
  
      <Router>
        <main>
          <Navbar/>
          <AnimatePresence exitBeforeEnter>
          <Switch >
          <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/background'>
              <Background/>
            </Route>
            <Route path='/skill'>
              <Skill/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Redirect to='/home'/>
          </Switch>
          </AnimatePresence>
        </main>
      </Router>
</div>

  )
}

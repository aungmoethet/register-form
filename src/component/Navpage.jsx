import React from 'react'

import {Routes, Route , } from 'react-router-dom';
import Tutorial from './Tutorial';
import Home from '../home/Home';
import Pagetutorial from './Pagetutorial';
const Navpage = () => {
  return (
    <div>
         
                       <Routes>
                            <Route exact path='/' element = {<Home/>} />
                            <Route path='/tutorial' element = {<Pagetutorial/>}/>
                            
                       </Routes>
          
    </div>
  )
}

export default Navpage

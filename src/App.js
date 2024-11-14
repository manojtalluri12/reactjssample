import React from 'react'
import Header from './Header/header.js'
import Home from './Header/Home.js'
import About from './Header/About.js'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <Header/>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App

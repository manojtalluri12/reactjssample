import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Navbar'>
      <div className='navleft'>
        <NavLink to='/' className='navname'>DO NOW</NavLink>
      </div>
      <div className='navright'>
        <NavLink to="/" className='nav'>Home</NavLink>
        <NavLink to="/aboutus" className='nav'>Courses</NavLink>
      </div>
     
    </div>
  )
}

export default Header

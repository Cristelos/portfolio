import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
        <nav className='header_nav'>
        <NavLink to="/"><img src='/assets/logo-web.png' alt='Logo Patricia Fernández Ruibal' className='header_logo' /></NavLink>
          <div className='header_links'>
            <NavLink to="/" className='header_link'>Home</NavLink>
            <NavLink to="/about" className='header_link'>About</NavLink>
            <NavLink to="/services" className='header_link'>Services</NavLink>
            <NavLink to="/portfolio" className='header_link'>Portfolio</NavLink>
          </div>
        </nav>
    </>
  )
}

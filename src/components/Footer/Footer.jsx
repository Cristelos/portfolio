import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
       <div className='footer_details'>
        <div className='footer_links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
          </div>
          <div className='footer_rrss'>
                <p><strong>Sígueme en mis RRSS →</strong></p>
                <a href='https://github.com/Cristelos' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-github-60.png' alt='Logo github' /></a>
                <a href='https://www.linkedin.com/in/patricia-fernandez-ruibal/' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-linkedin-50.png' alt='Logo github' /></a>
          </div>
       </div>
       <p className='footer_txt'> &copy; {year} Patricia Fernández Ruibal</p>
      </footer>
    </>
  )
}

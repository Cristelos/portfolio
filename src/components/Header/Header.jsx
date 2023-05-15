import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  return (
    <>
        <header className='header'>
            <nav className='header_nav'>
                <NavLink to="/" className='header_link'>Home</NavLink>
            </nav>
            <div className='header_box'>
              <div>
                <h1 className='header_title'>Patricia Fernández<br/>Full Stack Developer</h1>
              </div>
              <div>
                <img src='https://i.pinimg.com/564x/6c/44/88/6c4488a59965a558800c4bc5f48ebe6a.jpg' alt='foto perfil'/>
              </div>
            </div>
        </header>
    </>
  )
}

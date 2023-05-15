import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  return (
    <>
        <header className='header'>
            <nav className='header_nav'>
                <NavLink to="/">Home</NavLink>
            </nav>
        </header>
    </>
  )
}

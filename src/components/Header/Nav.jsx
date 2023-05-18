import React, {useState} from "react";
import { NavLink } from 'react-router-dom'

export const Nav = () => {


  //start burgermenu

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }
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
          <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
          </div>
          <div className={menu_class}>
            <NavLink to="/" className='header_link'>Home</NavLink>
            <NavLink to="/about" className='header_link'>About</NavLink>
            <NavLink to="/services" className='header_link'>Services</NavLink>
            <NavLink to="/portfolio" className='header_link'>Portfolio</NavLink>
          </div>
        </nav>
    </>
  )
}

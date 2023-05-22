import React from 'react'
import './Header.scss'
import { Nav } from './Nav'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <>
      <header className='header'>
        <Nav/>
        <div className='header_box'>
          <motion.div className='header_little-box'
            initial={{ 
              x: -100,
              opacity: 0
              }}
            transition={{
              ease: "easeOut",
              duration: 2
            }}
            animate={{
              x:0,
              opacity: 100
              }}
          >
            <h1 className='header_title'>Patricia Fernández<br /><span className='header_subtitle'>Full Stack Developer</span></h1>
            <p>¡Bienvenido/s! Soy una desarrolladora full stack y diseñadora web. Da una vuelta por mi página web y descúbre todo lo que puedo hacer por ti.</p>
            <div className='header_btn'>
              <a href='mailto:patriciafernandezruibal@gmail.com'><button href='mailto:patriciafernandezruibal@gmail.com' className='header_btn1'>Hablemos <svg width="28px" height="28px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><g clipPath="url(#send-diagonal_svg__clip0_2476_13290)" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"></path></g><defs><clipPath id="send-diagonal_svg__clip0_2476_13290"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg></button></a>
              <NavLink to='/portfolio'><button className='header_btn2'>Portfolio <svg width="28px" height="28px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 3h-6m6 0l-9 9m9-9v6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path></svg></button></NavLink>
            </div>
            <div className='header_rrss'>
              <p><strong>Sígueme en mis RRSS →</strong></p>
              <a href='https://github.com/Cristelos' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-github-60.png' alt='Logo github' /></a>
              <a href='https://www.linkedin.com/in/patricia-fernandez-ruibal/' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-linkedin-50.png' alt='Logo github' /></a>
            </div>
          </motion.div>
          <motion.div className='header_little-box'
          initial={{ 
            x: 100,
            opacity: 0
            }}
            transition={{
              ease: "easeOut",
              duration: 2
            }}
            animate={{
              x:0,
              opacity:100
              }}
          >
            <img src='/assets/img-portada.png' alt='foto portada' className='header_img' />
          </motion.div>
        </div>
      </header>
    </>
  )
}

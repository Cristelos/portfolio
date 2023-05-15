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
              <div className='header_little-box'>
                <h1 className='header_title'>Patricia Fernández<br/>Full Stack Developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus turpis quis nibh convallis, sed congue leo porta. </p>
                <div className='header_btn'>
                  <a href='mailto:patriciafernandezruibal@gmail.com'><button  href='mailto:patriciafernandezruibal@gmail.com' className='header_btn1'>Hablemos <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><g clip-path="url(#send-diagonal_svg__clip0_2476_13290)" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"></path></g><defs><clipPath id="send-diagonal_svg__clip0_2476_13290"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg></button></a>
                  <a href='http://patriciafernandezruibal.com/' target="_blank" rel="noopener noreferrer"><button className='header_btn2'>Portfolio <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 3h-6m6 0l-9 9m9-9v6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path></svg></button></a>
                </div>
                <div className='header_rrss'>
                <p><strong>Sígueme en mis RRSS →</strong></p>
                <a href='https://github.com/Cristelos' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-github-60.png' alt='Logo github'/></a>
                <a href='https://www.linkedin.com/in/patricia-fernandez-ruibal/' target="_blank" rel="noopener noreferrer"><img src='/assets/icons8-linkedin-50.png' alt='Logo github'/></a>
                </div>
              </div>
              <div className='header_little-box'>
                <img src='https://i.pinimg.com/564x/6c/44/88/6c4488a59965a558800c4bc5f48ebe6a.jpg' alt='foto perfil' className='header_img'/>
              </div>
            </div>
        </header>
    </>
  )
}

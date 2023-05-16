import React from 'react'
import './Skills.scss'
import { NavLink } from 'react-router-dom'

export const Skills = () => {
  return (
    <>
        <section className='skills'>
            <div className='skills_box'>
              <div className='skills_box1'>
                <h3 className='skills_title'>Servicios/<br/>Skills</h3>
                <p>Mis habilidades incluyen tanto el diseño de tu proyecto, como su puesta en marcha.</p>
              </div>
              <div className='skills_box2'>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-código-48.png' alt='Icono programación' className='skills_icons'/>
                    <h3>Desarrollo de aplicaciones web y móvil: </h3>
                  </div>
                  <p>Construyo aplicaciones web y móviles cautivadoras y funcionales, utilizando tecnologías modernas para brindar experiencias excepcionales en ambas plataformas.</p>
                  <NavLink to='/services'><button className='skills_btn'><svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 19L19 6m0 0v12.48M19 6H6.52" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></NavLink>
                </div>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-macbook-pictures-48.png' alt='Icono diseño' className='skills_icons'/>
                    <h3>Diseño de experiencia de usuario (UX/UI):</h3>
                  </div>
                  <p>Creo interfaces intuitivas y atractivas que brindan una experiencia de usuario excepcional.</p>
                  <NavLink to='/services'><button className='skills_btn'><svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 19L19 6m0 0v12.48M19 6H6.52" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></NavLink>
                </div>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-plantilla-48.png' alt='Icono optimización' className='skills_icons'/>
                    <h3>Optimización de rendimiento y escalabilidad:</h3>
                  </div>
                  <p>Mejoro el rendimiento y la escalabilidad de aplicaciones web existentes, asegurando que funcionen de manera rápida y eficiente incluso en momentos de alta demanda.</p>
                  <NavLink to='/services'><button className='skills_btn'><svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 19L19 6m0 0v12.48M19 6H6.52" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></NavLink>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

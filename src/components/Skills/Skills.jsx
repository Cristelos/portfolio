import React from 'react'
import './Skills.scss'

export const Skills = () => {
  return (
    <>
        <section className='skills'>
            <div className='skills_box'>
              <div className='skills_box1'>
                <h3 className='skills_title'>Servicios/<br/>Skills</h3>
                <p>Mi formación incluye tanto el diseño de tu proyecto, como su puesta en marcha.</p>
              </div>
              <div className='skills_box2'>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-código-48.png' alt='Icono programación' className='skills_icons'/>
                    <h4>Desarrollo de aplicaciones web y móvil: </h4>
                  </div>
                  <p>Construyo aplicaciones web y móviles cautivadoras y funcionales, utilizando tecnologías modernas para brindar experiencias excepcionales en ambas plataformas.</p>
                </div>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-macbook-pictures-48.png' alt='Icono diseño' className='skills_icons'/>
                    <h4>Diseño de experiencia de usuario (UX/UI):</h4>
                  </div>
                  <p>Creo interfaces intuitivas y atractivas que brindan una experiencia de usuario excepcional.</p>
                </div>
                <div className='skills_details'>
                  <div className='skills_mix'>
                    <img src='/assets/icons8-plantilla-48.png' alt='Icono optimización' className='skills_icons'/>
                    <h4>Optimización de rendimiento y escalabilidad:</h4>
                  </div>
                  <p>Mejoro el rendimiento y la escalabilidad de aplicaciones web existentes, asegurando que funcionen de manera rápida y eficiente incluso en momentos de alta demanda.</p>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

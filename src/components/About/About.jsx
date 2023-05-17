import React from 'react'
import './About.scss'

export const About = () => {
  return (
    <>
        <section className='about'>
            <div className='about_boxs'>
                <div className='about_box'>
                    <h3 className='about_title'>Sobre mí/<br/>About me</h3>
                    <p className='skills_text1'>Mis habilidades incluyen tanto el diseño de tu proyecto, como su puesta en marcha.</p>
                    <div className='about_icons'>
                            <img src='/assets/HTML5_logo_black.svg.png' alt='Logo Html5' className='about_icon'/>
                            <img src='/assets/css3-logo-png-transparent.png' alt='Logo Css3' className='about_icon'/>
                            <img src='/assets/JavaScript.png' alt='Logo JavaScript' className='about_icon'/>
                            <img src='/assets/icons8-angularjs-96.png' alt='Logo Angularjs' className='about_icon'/>
                            <img src='/assets/React.webp' alt='Logo Reactjs' className='about_icon'/>
                            <img src='/assets/Sql_data_base_with_logo.png' alt='Logo Sql' className='about_icon'/>
                            <img src='/assets/MongoDB-Logo.png' alt='Logo Mongodb' className='about_icon'/>
                            <img src='/assets/1280px-Node.js_logo.svg.png' alt='Logo Nodejs' className='about_icon'/>
                            <img src='/assets/php-1-logo-png-transparent.png' alt='Logo PHP' className='about_icon'/>
                    </div>
                </div>
                <div className='about_box'>
                    <div className='about_details'>
                    <div className='about_mix'>
                        <p className='about_number'>1</p>
                        <h3>Desarrollo de aplicaciones web y móvil: </h3>
                    </div>
                    <p className='about_text2'>Construyo aplicaciones web y móviles cautivadoras y funcionales, utilizando tecnologías modernas para brindar experiencias excepcionales en ambas plataformas.</p>
                   
                    </div>
                    <div className='about_details'>
                    <div className='about_mix'>
                    <p className='about_number'>2</p>
                        <h3>Diseño de experiencia de usuario (UX/UI):</h3>
                    </div>
                    <p className='about_text2'>Creo interfaces intuitivas y atractivas que brindan una experiencia de usuario excepcional.</p>
                    
                    </div>
                    <div className='about_details'>
                    <div className='about_mix'>
                    <p className='about_number'>3</p>
                        <h3>Optimización de rendimiento y escalabilidad:</h3>
                    </div>
                    <p className='about_text2'>Mejoro el rendimiento y la escalabilidad de aplicaciones web existentes, asegurando que funcionen de manera rápida y eficiente incluso en momentos de alta demanda.</p>
                    
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

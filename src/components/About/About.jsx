import React from 'react'
import './About.scss'

export const About = () => {
  return (
    <>
        <section className='about'>
            <div className='about_boxs'>
                <div className='about_box'>
                    <h3 className='about_title'>Sobre mí/<br/>About me</h3>
                    <p className='skills_text1'>¡Hola!<br/> Soy Patricia Fernández Ruibal, apasionada desarrolladora Full Stack y diseñadora UX/UI. Con formación tanto en bellas artes como en full stack developer, me dedico a crear experiencias digitales cautivadoras y funcionales.</p>
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
                            <img src='/assets/icons8-git-100.png' alt='Logo Giy' className='about_icon'/>
                    </div>
                </div>
                <div className='about_box'>
                    <div className='about_details'>
                    <div className='about_mix'>
                        <p className='about_number'>1</p>
                        <h3>Trayectoria profesional: </h3>
                    </div>
                    <p className='about_text2'>Mi trayectoria profesional me ha permitido trabajar en diversos proyectos, donde he tenido la oportunidad de desarrollar habilidades técnicas y blandas. Desde la creación de sitios web personalizados hasta el diseño de interfaces intuitivas, mi objetivo principal es proporcionar soluciones digitales de alta calidad que satisfagan las necesidades de mis clientes y los usuarios finales.</p>
                   
                    </div>
                    <div className='about_details'>
                    <div className='about_mix'>
                    <p className='about_number'>2</p>
                        <h3>Trabajo en equipo:</h3>
                    </div>
                    <p className='about_text2'>Soy una apasionada por el trabajo en equipo y valoro la colaboración y la comunicación abierta. Mi enfoque se basa en comprender a fondo las metas y objetivos de cada proyecto, para así poder traducirlos en soluciones creativas y efectivas. Siempre estoy en búsqueda de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.</p>
                    
                    </div>
                    <div className='about_details'>
                    <div className='about_mix'>
                    <p className='about_number'>3</p>
                        <h3>Soft Skills:</h3>
                    </div>
                    <p className='about_text2'>Además de mis habilidades técnicas, soy una persona organizada, proactiva y orientada a resultados. Me gusta enfrentar nuevos desafíos y encontrar soluciones innovadoras para superarlos. También disfruto mantenerme actualizada con las últimas tendencias y tecnologías del mundo del desarrollo web y el diseño UX/UI.</p>
                    
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

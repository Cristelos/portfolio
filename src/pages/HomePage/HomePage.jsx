import React from 'react'
import { Header } from '../../components/Header/Header'
import { Skills } from '../../components/Skills/Skills'
import { Destacados } from '../../components/Destacados/Destacados'
import { Footer } from '../../components/Footer/Footer'
import { Contact } from '../../components/Contact/Contact'
import { About } from '../../components/About/About'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <About/>
        <Destacados/>
        <Contact/>
        <Footer/>
    </>
  )
}

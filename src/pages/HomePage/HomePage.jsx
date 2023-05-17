import React from 'react'
import { Header } from '../../components/Header/Header'
import { Skills } from '../../components/Skills/Skills'
import { Destacados } from '../../components/Destacados/Destacados'
import { Footer } from '../../components/Footer/Footer'
import { Contact } from '../../components/Contact/Contact'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <Destacados/>
        <Contact/>
        <Footer/>
    </>
  )
}

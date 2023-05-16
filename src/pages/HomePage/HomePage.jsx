import React from 'react'
import { Header } from '../../components/Header/Header'
import { Skills } from '../../components/Skills/Skills'
import { Destacados } from '../../components/Destacados/Destacados'
import { Footer } from '../../components/Footer/Footer'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <Destacados/>
        <Footer/>
    </>
  )
}

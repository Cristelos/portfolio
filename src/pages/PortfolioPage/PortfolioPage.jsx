import React from 'react'
import { Nav } from '../../components/Header/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Destacados } from '../../components/Destacados/Destacados'
import { Contact } from '../../components/Contact/Contact'

export const PortfolioPage = () => {
  return (
    <>
      <Nav/>
      <Destacados/>
      <Contact/>
      <Footer/>
    </>
  )
}

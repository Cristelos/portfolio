import React from 'react'
import { Nav } from '../../components/Header/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Skills } from '../../components/Skills/Skills'
import { Contact } from '../../components/Contact/Contact'

export const ServicePage = () => {
  return (
    <>
      <Nav/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

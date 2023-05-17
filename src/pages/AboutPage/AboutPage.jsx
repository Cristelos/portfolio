import React from 'react'
import { Nav } from '../../components/Header/Nav'
import { Footer } from '../../components/Footer/Footer'
import { About } from '../../components/About/About'
import { Contact } from '../../components/Contact/Contact'

export const AboutPage = () => {
  return (
    <>
      <Nav/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

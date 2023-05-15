import React from 'react'
import { Header } from '../../components/Header/Header'
import { Skills } from '../../components/Skills/Skills'
import { Destacados } from '../../components/Destacados/Destacados'
import { ReactTio } from '../../components/ReactTio/ReactTio'
import { Angular } from '../../components/Angular/Angular'
import { NodeTio } from '../../components/NodeTio/NodeTio'
import { Footer } from '../../components/Footer/Footer'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <Destacados/>
        <ReactTio/>
        <Angular/>
        <NodeTio/>
        <Footer/>
    </>
  )
}

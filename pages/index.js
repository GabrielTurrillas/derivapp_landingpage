import { useState } from 'react'
import Head from 'next/head'
import {
  Navbar,
  Hero,
  ImageScreen,
  Footer,
  Sidebar
} from '../components'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <title>Administración de Centros Psicológicas - DerivApp </title>
        <meta name='description' content='¿Problemas para administrar tu centro psicológico?. DerivApp te ayuda con la gestión de pacientes y organizando los recursos de tu centro psicológico.' />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <ImageScreen />
      <Footer />
    </>
  )
}

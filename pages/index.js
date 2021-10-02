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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <ImageScreen />
      <Footer />
    </>
  )
}

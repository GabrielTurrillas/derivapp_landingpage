import Head from 'next/head'
import {
  Navbar,
  Hero,
  ImageScreen,
  Footer
} from '../components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageScreen />
      <Footer />
    </>
  )
}

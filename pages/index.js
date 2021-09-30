import Head from 'next/head'
import {
  Hero,
  ImageScreen,
  Footer
} from '../components'

export default function Home() {
  return (
    <>
      <Hero />
      <ImageScreen />
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import {
  containerMargin,
  backgroundColor
} from '../../styles'
import { ScrollIndicator } from '../'

export default function Hero() {
  const imageDimentions = 300
  return (
    <>
      <Background>
        <Container>
          <ImageContainer>
            <Image src='/hero_image.svg' alt='hero image' width={imageDimentions} height={imageDimentions} />
          </ImageContainer>
          <TitleContainer>
            <H1>Te ayudamos a administrar tu centro psicológico</H1>
          </TitleContainer>
          <SubtitleContainer>
            <H2>Diseñamos software al servicio de tus necesidades</H2>
          </SubtitleContainer>
          <ScrollIndicator />
        </Container>
      </Background>
    </>
  )
}

const Background = styled.div`
  background:${backgroundColor.primary};
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  height:100vh;
`

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  height:100%;
  margin: ${containerMargin.mobileS};
  padding-top:3rem;
`

const ImageContainer = styled.div`
  width:fit-content;
  height:fit-content;
`

const TitleContainer = styled.div`
  text-align:center;
  margin:1rem 0;
`

const SubtitleContainer = styled.div`
  text-align:center;
  margin:0 2rem;
  margin-bottom:1.5rem;
`

const H1 = styled.h1`
  font-family: 'Crimson Text', serif;
  font-size:1.7rem;
`

const H2 = styled.h2`
  font-family: 'Didact Gothic', sans-serif;
  font-size:1rem;
`
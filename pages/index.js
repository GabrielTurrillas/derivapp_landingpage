import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  const imageDimentions = 300
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src='/hero_image.svg' alt='hero image' width={imageDimentions} height={imageDimentions} />
        </ImageContainer>
        <TitleContainer>
          <H1>Te ayudamos a administrar tu centro psicológico</H1>
        </TitleContainer>
        <SubTitleContainer>
          <H2>Diseñamos software al servicio de tus necesidades para maximizar la eficiencia de tus procesos</H2>
        </SubTitleContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#ffedd0;
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100vw;
`
const ImageContainer = styled.div`
  width:fit-content;
  height:fit-content;
`

const TitleContainer = styled.div`

`

const SubTitleContainer = styled.div`

`

const H1 = styled.h1`
  font-family: 'Crimson Text', serif;
  font-size:3.5rem;
`

const H2 = styled.h2`
  font-family: 'Crimson Text', serif;
`
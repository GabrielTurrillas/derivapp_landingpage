import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import {
  containerMargin,
  backgroundColor,
  device
} from '../../styles'
import { ScrollIndicator } from '../'

export default function Hero() {
  const imageDimentions = 300
  return (
    <>
      <Background>
        <Container>
          <ImageArea>
            <Image src='/hero_image.svg' alt='hero image' width={imageDimentions} height={imageDimentions} />
          </ImageArea>
          <TitleArea>
            <H1>Te ayudamos a administrar tu centro psicológico</H1>
          </TitleArea>
          <SubtitleArea>
            <H2>Diseñamos software al servicio de tus necesidades</H2>
          </SubtitleArea>
          <ScrollArea>
            <ScrollIndicator />
          </ScrollArea>
        </Container>
      </Background>
    </>
  )
}

const Background = styled.div`
  background:${backgroundColor.primary};
  width:100%;
  height:100vh;
`

const Container = styled.div`
  display:grid;
  grid-template-areas:'ImageArea'
                      'TitleArea'
                      'SubtitleArea'
                      'ScrollArea';
  height:100%;
  margin: ${containerMargin.mobileS};
  @media ${device.mobileM}{
    margin: ${containerMargin.mobileM};
  }
`

const ImageArea = styled.div`
  grid-area: ImageArea;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  height:100%;
  //background:red;
`

const TitleArea = styled.div`
  grid-area:TitleArea;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  //background:blue;
`

const SubtitleArea = styled.div`
  grid-area:SubtitleArea;
  text-align:center;
  align-items:start;
  justify-content:center;
  margin:0 2rem;
  //background:yellow;
`

const ScrollArea = styled.div`
  grid-area: ScrollArea;
  display: flex;
  justify-content: center;
  //background-color: green;
`

const H1 = styled.h1`
  font-family: 'Crimson Text', serif;
  font-size:1.7rem;
  @media ${device.mobileL} {
    font-size:2.5rem;
  }
  @media ${device.mobileL} {
    font-size:3rem;
  }
`

const H2 = styled.h2`
  font-family: 'Didact Gothic', sans-serif;
  font-size:1rem;
  @media ${device.mobileL} {
    font-size:1.2rem;
  }
  @media ${device.mobileL} {
    font-size:1.4rem;
  }
`
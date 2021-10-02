import styled from 'styled-components';
import Image from 'next/image'
import {
  containerMargin,
  backgroundColor,
  device
} from '../../styles'
import { Button } from '..'

const ImageScreen = () => {
  return (
    <Background>
      <Container>
        <ButtonArea>
          <Button type='primary'>VER DEMO ADMIN</Button>
          <Button type='secondary'>VER DEMO USUARIO</Button>
        </ButtonArea>
        <ImageArea>
          <ImageWrapper>
            <ImageB src='/SiteSS.png' alt='Site Screen Shot' width={800} height={500} />
          </ImageWrapper>
        </ImageArea>
      </Container>
    </Background>
  );
}

export default ImageScreen;

const Background = styled.div`
  background:${backgroundColor.primary};
  width:100%;
  height:fit-content;
`

const Container = styled.div`
  display:grid;
  height:100%;
  margin: ${containerMargin.mobileS};
  grid-template-rows: 1fr 1fr;
  grid-template-areas:'ButtonArea'
                      'ImageArea';
  @media ${device.mobileL} {
    grid-template-rows: 1fr 2fr;
  }
`

const ButtonArea = styled.div`
  grid-area:ButtonArea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`

const ImageArea = styled.div`
  grid-area:ImageArea;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.div`
  height:fit-content;
  width:fit-content;
  `

const ImageB = styled(Image)`
  border-radius: 15px;
  //box-shadow: 0 10px 6px -6px #777;
`

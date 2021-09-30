import styled from 'styled-components';
import Image from 'next/image'
import {
  containerMargin,
  backgroundColor
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
  height:80vh;
`

const Container = styled.div`
  display:grid;
  height:100%;
  margin: ${containerMargin.mobileS};
  grid-template-rows: 1r 2fr;
  grid-template-areas:'ButtonArea'
                      'ImageArea';
`

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageArea = styled.div`
`

const ImageWrapper = styled.div`
  height:fit-content;
  width:fit-content;
`

const ImageB = styled(Image)`
  border-radius: 15px;
`

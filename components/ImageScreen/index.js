import styled from 'styled-components';
import Image from 'next/image'
import {
  containerMargin,
  backgroundColor
} from '../../styles'

const ImageScreen = () => {
  return (
    <Background>
      <Container>
        <ImageContainer>
          <ImageB src='SiteSS.png' alt='Site Screen Shot' width={800} height={500} />
        </ImageContainer>
      </Container>
    </Background>
  );
}

export default ImageScreen;

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

const ImageB = styled(Image)`
  border-radius: 15px;
`

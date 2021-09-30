import styled from 'styled-components';
import { backgroundColor } from '../../styles';

const Footer = () => {
  return (
    <Background>
      <Wave xmlns="http://www.w3.org/2000/svg" viewBox='0 -50 800 600'><path width='100%' fill='#000' fillOpacity='1' d="M 0 300 C 0 450 800 400 800 500 L 800 550 L 0 550 L 0 300 "></path></Wave>
    </Background>
  );
}

export default Footer;

const Background = styled.div`
  display:flex;
  align-items:end;
  height:20vh;
  width:100%;
  background-color: ${backgroundColor.primary};
`

const Wave = styled.svg`
  width:100%;
  background-color: ${backgroundColor.primary};
`
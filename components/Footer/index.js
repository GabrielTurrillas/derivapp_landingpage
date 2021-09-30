import styled from 'styled-components';
import { backgroundColor } from '../../styles';

const Footer = () => {
  return (
    <Background>
      <Svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-1.13,-3.67 C-0.57,156.22 502.25,0.28 501.12,150.28 L501.12,152.27 L-4.52,154.23 Z"></path></Svg>
    </Background>
  );
}

export default Footer;

const Background = styled.div`
  display:flex;
  align-items:end;
  height: 150px;
  width:100%;
  overflow: hidden;
  background-color: ${backgroundColor.primary};
`

const Svg = styled.svg`
  height:100%;
  width:100%;
`

const Path = styled.path`
  stroke: none; 
  fill: #08f;
`
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import {
  widthSize,
  backgroundColor,
  containerMargin,
  device
} from '../../styles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>DerivApp</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display:flex;
  width: 100%;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position:absolute;
  top: 0;
  //box-shadow: 0 8px 8px -4px black;
`;

const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  margin: ${containerMargin.mobileS};
  padding:1rem 0;
  width: 100%;
  @media ${device.mobileM} {
    margin: ${containerMargin.mobileM};
  }
  @media ${device.tablet} {
    margin: ${containerMargin.tablet};
  }
  @media ${device.laptop} {
    margin: ${containerMargin.laptop};
  }
  @media ${device.laptopL} {
    margin: ${containerMargin.laptopL};
  }
  @media ${device.desktop} {
    margin: ${containerMargin.desktop};
  }
`;

const NavLogo = styled.a`
  display: flex;
  justify-self: flex-start;
  color: #000;
  font-family:'Didact Gothic', sans-serif;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-bottom:0.5rem;
`;

const MobileIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
`;
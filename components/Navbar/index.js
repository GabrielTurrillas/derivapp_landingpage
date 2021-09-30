import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import {
  widthSize,
  backgroundColor,
} from '../../styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>DerivApp</NavLogo>
          <MobileIcon>
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
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position:absolute;
  top: 0;
  z-index:999;
  //box-shadow: 0 8px 8px -4px black;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

const NavLogo = styled.a`
  color: #000;
  font-family:'Didact Gothic', sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  padding:0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
`;
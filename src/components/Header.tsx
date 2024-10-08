import styled from 'styled-components';

import { Colors } from 'styles';
import { hexAlpha } from 'styles/Colors';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${hexAlpha(Colors.white, 0.7)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 100px;
  border-bottom: ${Colors.g5} 1px solid;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin-left: auto;
`;

const NavItem = styled.a`
  width: 84px;
  color: ${Colors.g1};
  padding: 4px 0;
  text-align: center;
  font-size: 16px;
  font-family: 'SuiteRegular';
  text-decoration: underline;
  text-decoration-style: double;
  text-decoration-color: #fff;

  &:hover {
    text-decoration-color: #01c9ca;
    transform: scale(1);
    transition: all 1s;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavItem href="#main">MAIN</NavItem>
        <NavItem href="#about">ABOUT</NavItem>
        <NavItem href="#works">WORKS</NavItem>
        <NavItem href="#contact">CONTACT</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

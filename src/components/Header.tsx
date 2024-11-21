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
  z-index: 2;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin-left: auto;
`;

const NavItem = styled.button`
  width: 84px;
  color: ${Colors.g1};
  padding: 4px 0;
  text-align: center;
  font-size: 16px;
  font-family: 'SuiteRegular';
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: double;
  text-decoration-color: #fff;

  &:hover {
    text-decoration-color: #01c9ca;
    transform: scale(1);
    transition: all 1s;
  }
`;

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  mainRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  worksRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  experiencesRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  mainRef,
  aboutRef,
  worksRef,
  skillsRef,
  experiencesRef
}) => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavItem onClick={() => scrollToSection(mainRef)}>MAIN</NavItem>
        <NavItem onClick={() => scrollToSection(aboutRef)}>ABOUT</NavItem>
        <NavItem onClick={() => scrollToSection(worksRef)}>WORKS</NavItem>
        <NavItem onClick={() => scrollToSection(skillsRef)}>SKILLS</NavItem>
        <NavItem onClick={() => scrollToSection(experiencesRef)}>EXPERIENCES</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

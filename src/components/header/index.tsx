import { useState } from 'react';
import { HeaderWrapper, HamburgerButton, Nav, NavItem } from './styles';
import useScrollToSection from 'hooks/useScrollToSection';

interface HeaderProps {
  mainRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  worksRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  experiencesRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  mainRef,
  aboutRef,
  worksRef,
  skillsRef,
  experiencesRef
}) => {
  const scrollToSection = useScrollToSection();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <HeaderWrapper>
      <HamburgerButton onClick={toggleMenu}>{isMenuOpen ? '✖' : '☰'}</HamburgerButton>
      <Nav isOpen={isMenuOpen}>
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

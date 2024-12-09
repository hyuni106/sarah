import styled from 'styled-components';
import { Colors } from 'styles';
import { hexAlpha } from 'styles/Colors';

export const HeaderWrapper = styled.header`
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

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 48px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    right: 16px;
    background: ${Colors.white};
    border: 1px solid ${Colors.g5};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 8px;
    z-index: 10;
  }
`;

export const NavItem = styled.button`
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

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

import styled, { css, keyframes } from 'styled-components';
import { Colors } from 'styles';

// 페이드 인/아웃 애니메이션
const fadeIn = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const OverlayWrapper = styled.div<{ isVisible: boolean }>`
  z-index: 10;
  position: fixed;
  flex-direction: row;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  padding-left: 120px;
  display: flex;
  align-items: center;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s forwards;

  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

export const TypingText = styled.span<{ fadeText: boolean }>`
  display: inline-flex;
  align-items: center;
  font-family: SuiteExtraBold;
  font-size: 60px;
  color: ${Colors.g1};
  margin-bottom: 60px;
  transition:
    opacity 0.3s,
    transform 0.3s;
  opacity: ${({ fadeText }) => (fadeText ? 1 : 0)};
  transform: ${({ fadeText }) => (fadeText ? 'translateY(0)' : 'translateY(8px)')};
`;

export const Circle = styled.div<{ fadeCircle: boolean }>`
  margin-left: 12px;
  height: ${({ fadeCircle }) => (fadeCircle ? '52px' : '0')};
  width: ${({ fadeCircle }) => (fadeCircle ? '12px' : '0')};
  background-color: ${Colors.g1};
  transition: all 0.3s;
  opacity: ${({ fadeCircle }) => (fadeCircle ? 1 : 0)};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  left: 85%;
  background: none;
  border: none;
  color: ${Colors.g1};
  font-size: 32px;
  cursor: pointer;
`;

import styled, { css, keyframes } from 'styled-components';

import { Colors } from 'styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.g6};
  padding: 120px 40px 120px 40px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 80px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 40px;
  padding-bottom: 16px;
`;

const drawCircle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(2deg);
  }
`;

interface CircleSketchHighlightProps {
  $isVisible: boolean;
}

export const CircleSketchHighlight = styled.span<CircleSketchHighlightProps>`
  position: relative;
  z-index: 1;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -0.5em;
    top: -0.1em;
    border-width: 2px;
    border-style: solid;
    border-color: ${Colors.pink};
    width: 100%;
    height: 1em;
    border-radius: 50%;
    z-index: -1;

    ${props =>
      props.$isVisible &&
      css`
        animation: ${drawCircle} 0.7s forwards;
      `}
  }

  &:before {
    transform: rotate(2deg);
    border-right-color: transparent;
  }

  &:after {
    top: 0.1em;
    transform: rotate(-1deg);
    border-left-color: transparent;
    border-top-color: transparent;
    animation-delay: 0.2s;
  }
`;

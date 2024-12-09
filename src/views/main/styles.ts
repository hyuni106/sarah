import styled, { css, keyframes } from 'styled-components';

import { Colors } from 'styles';
import { ReactComponent as Mobile } from 'assets/svgs/img_mobile.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media (max-width: 768px) {
    order: 2;
    align-items: center;
    text-align: center;
    margin-top: 40px;
  }
`;

export const StyledMobile = styled(Mobile)`
  margin-left: 40px;
  width: 320px;

  @media (max-width: 768px) {
    order: 1;
    margin-left: 0;
    width: 240px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Icon = styled.div<{ isVisible: boolean; delay: number }>`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${({ isVisible, delay }) =>
    isVisible
      ? css`
          ${fadeIn} 0.5s ${delay}s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};

  &:hover {
    opacity: 0.9;
  }
`;

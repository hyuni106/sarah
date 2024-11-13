import styled, { keyframes } from 'styled-components';

import { Colors } from 'styles';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 120px 40px;
`;

export const ExperienceItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  &.fade-in {
    animation: ${fadeInAnimation} 1s ease forwards;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 4px;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const DashedLine = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Dot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  background-color: ${Colors.g3};
  border-radius: 50%;
  transform: translateX(-5px);
  z-index: 2;
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  padding: 8px 0 16px 0;
  min-width: 450px;
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 10px;
`;

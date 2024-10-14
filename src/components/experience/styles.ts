import styled from 'styled-components';

import { Colors } from 'styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.g6};
  padding: 120px 40px 120px 40px;
`;

export const ExperienceItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
`;

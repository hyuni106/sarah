import styled from 'styled-components';

import { Colors } from 'styles';
import { hexAlpha } from 'styles/Colors';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.g6};
  padding: 120px 40px 120px 40px;
`;

export const SkillGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  justify-items: center;
  margin-top: 28px;
`;

export const SkillItemContainer = styled.div`
  width: 180px;
  height: 144px;
  background: ${hexAlpha(Colors.white, 0.5)};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from 'styled-components';

import { Colors } from 'styles';
import { hexAlpha } from 'styles/Colors';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.g6};
  padding: 120px 40px;
`;

export const SkillListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin-top: 32px;
`;

export const SkillItemContainer = styled.div`
  flex: 1 1 180px;
  min-width: 180px;
  background: ${hexAlpha(Colors.white, 0.5)};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  padding: 32px;

  @media (min-width: 768px) {
    flex-basis: calc(33.333% - 32px);
  }

  @media (min-width: 1350px) {
    flex-basis: calc(25% - 32px);
  }
`;

export const SkillImgContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SkillImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

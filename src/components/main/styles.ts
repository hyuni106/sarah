import styled from 'styled-components';

import { Colors } from 'styles';
import { ReactComponent as Mobile } from 'assets/svgs/img_mobile.svg';

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

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

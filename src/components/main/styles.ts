import styled from 'styled-components';

import { Colors } from 'styles';
import { ReactComponent as Mobile } from 'assets/svgs/img_mobile.svg';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 0 40px 0 40px;
`;

export const StyledMobile = styled(Mobile)`
  margin-left: 40px;
  width: 320px;
`;

export const ButtonContainer = styled.div`
  flex-direction: row;
  margin: 48px 0 0 0;
`;

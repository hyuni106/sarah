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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
`;

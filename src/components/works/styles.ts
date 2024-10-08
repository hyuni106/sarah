import styled from 'styled-components';

import { Colors } from 'styles';

export const Section = styled.section`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 120px 0 120px 0;
`;

// ProjectCard

export const CardDiv = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.blue3};
`;

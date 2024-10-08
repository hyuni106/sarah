import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { Colors } from 'styles';

export const Section = styled.section`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 120px 0 120px 0;
`;

export const StyledSwiper = styled(Swiper)`
  height: 540px;
  margin-top: 80px;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 8px !important;
    background-color: ${Colors.g4};
  }

  .swiper-pagination-bullet-active {
    background-color: ${Colors.g1};
  }

  .swiper-pagination {
    z-index: 10;
  }
`;

// ProjectCard

export const CardDiv = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.g7};
`;

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

export const ProjectContainer = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${Colors.g7};
  padding: 0 32px;
`;

export const ProjectImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  background-color: ${Colors.blue3};
  border-radius: 30px;
`;

export const ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 40px;
`;

export const ProjectTitleContainer = styled.div`
  flex-direction: row;
`;

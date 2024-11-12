import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { Colors } from 'styles';

export const Section = styled.section`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  padding: 120px 0;
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

  @media (max-width: 768px) {
    height: 600px;

    .swiper-pagination-bullet {
      margin: -8px 8px !important;
    }
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

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 0px;
    flex-direction: column;
    padding: 32px 16px;
    height: 500px;
  }
`;

export const ProjectImage = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 24px;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ProjectTitleContainer = styled.div`
  flex-direction: row;
`;

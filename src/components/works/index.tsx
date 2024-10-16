import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Section, StyledSwiper } from './styles';
import ProjectCard from './ProjectCard';
import { TitleText } from 'components/common';

const Works = () => {
  return (
    <Section>
      <TitleText size="32px" align="center">
        MY WORKS 🧑‍💻
      </TitleText>
      <StyledSwiper
        spaceBetween={100}
        slidesPerView={1.3}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProjectCard />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default Works;

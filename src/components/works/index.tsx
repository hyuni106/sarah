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
        spaceBetween={72}
        slidesPerView={1.3}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </StyledSwiper>
    </Section>
  );
};

export default Works;

import { Swiper, SwiperSlide } from 'swiper/react';

import { Section } from './styles';
import ProjectCard from './ProjectCard';

const Works = () => {
  return (
    <Section>
      MY WORKS 🧑‍💻
      <Swiper
        spaceBetween={72}
        slidesPerView={1.5}
        centeredSlides={true}
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
      </Swiper>
    </Section>
  );
};

export default Works;

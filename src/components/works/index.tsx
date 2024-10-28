import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Section, StyledSwiper } from './styles';
import ProjectCard from './ProjectCard';
import { TitleText } from 'components/common';

const Works = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TitleText size="32px" align="center">
        {t('works_title')}
      </TitleText>
      <StyledSwiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.3,
            spaceBetween: 100,
            centeredSlides: true
          }
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

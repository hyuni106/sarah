import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Section, StyledSwiper } from './styles';
import ProjectCard from './ProjectCard';
import { TitleText } from 'components/common';
import worksData from 'data/works.json';
import { Work } from 'models';
import DescText from './DescText';

const Works = () => {
  const { t } = useTranslation();

  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    setWorks(worksData.projects as Work[]);
  }, []);

  return (
    <Section>
      <TitleText size="32px" align="center" i18nKey={t('works_title')} />
      <DescText />

      <StyledSwiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        modules={[Pagination, Mousewheel]}
        mousewheel={{
          enabled: true,
          releaseOnEdges: true
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.3,
            spaceBetween: 100,
            centeredSlides: true
          }
        }}>
        {works.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard work={item} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default Works;

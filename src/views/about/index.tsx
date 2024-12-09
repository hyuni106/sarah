import { useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import {
  Section,
  ProfileContainer,
  ProfileInfoContainer,
  CircleSketchHighlight,
  ProfileImage
} from './styles';

const AboutMe = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section>
      <TitleText size="32px">{t('about_me')}</TitleText>
      <ProfileContainer>
        <ProfileImage
          src={
            'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdebu5h%2FbtsLbXqrYXu%2F6YMMvt7lKgETw1THRuEamK%2Fimg.jpg'
          }
        />
        <ProfileInfoContainer>
          <BodyText size="20px">{t('about_name')}</BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            {t('about_birth')}
          </BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            {t('about_email')}
          </BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            {t('about_edu')}
          </BodyText>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BodyText size="18px" margin="80px 0 0 0" align="center">
        <Trans
          i18nKey="about_desc"
          components={{
            br: <br />,
            highlight: <CircleSketchHighlight ref={ref} $isVisible={isVisible} as="span" />
          }}
        />
      </BodyText>
    </Section>
  );
};

export default AboutMe;

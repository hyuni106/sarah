import { useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import { Section, ProfileContainer, ProfileInfoContainer, CircleSketchHighlight } from './styles';

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
        <div
          style={{
            width: '200px',
            height: '280px',
            backgroundColor: 'snow',
            border: '1px solid black'
          }}
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

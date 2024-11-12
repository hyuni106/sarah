import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import { Section } from './styles';
import ExperienceItem from './ExperienceItem';
import experiencesData from 'data/experiences.json';
import { Experience as ExperienceType } from 'models';

const Experience = () => {
  const { t } = useTranslation();

  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    setExperiences(experiencesData.experiences);
  }, []);

  return (
    <Section>
      <TitleText size="32px">{t('experience_title')}</TitleText>
      <BodyText size="18px" margin="80px 0" align="center" i18nKey={'experience_desc'} />

      {experiences.map((item, idx) => (
        <ExperienceItem key={idx} experience={item} />
      ))}
    </Section>
  );
};

export default Experience;

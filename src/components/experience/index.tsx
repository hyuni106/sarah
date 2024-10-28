import { useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import { Section } from './styles';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TitleText size="32px">{t('experience_title')}</TitleText>
      <BodyText size="18px" margin="80px 0" align="center">
        {t('experience_desc')}
      </BodyText>

      {TempList.map(item => (
        <ExperienceItem
          key={item.date}
          date={item.date}
          position={item.position}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default Experience;

const TempList = [
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  },
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  },
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  }
];

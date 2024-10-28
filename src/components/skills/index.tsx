import { useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import { Section, SkillListWrapper } from './styles';
import SkillItem from './SkillItem';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TitleText size="32px">{t('skills_title')}</TitleText>

      <BodyText size="20px" margin="80px 0 0 0">
        {t('skills_pro')}
      </BodyText>
      <SkillListWrapper>
        {[...Array(1)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_intermediate')}
      </BodyText>
      <SkillListWrapper>
        {[...Array(2)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_basic')}
      </BodyText>
      <SkillListWrapper>
        {[...Array(1)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_tools')}
      </BodyText>
      <SkillListWrapper>
        {[...Array(3)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>
    </Section>
  );
};

export default Skills;

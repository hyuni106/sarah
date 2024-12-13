import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BodyText, TitleText } from 'components/common';
import { Section, SkillListWrapper } from './styles';
import SkillItem from './SkillItem';
import skillData from 'data/skills.json';
import { Skill } from 'models';

const Skills = () => {
  const { t } = useTranslation();

  const [skills, setSkills] = useState<Skill>();

  useEffect(() => {
    setSkills(skillData);
  }, []);

  return (
    <Section>
      <TitleText size="32px">{t('skills_title')}</TitleText>

      <BodyText size="20px" margin="80px 0 0 0">
        {t('skills_pro')}
      </BodyText>
      <SkillListWrapper>
        {skills?.proficient.map((item, idx) => (
          <SkillItem key={idx} skill={item} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_intermediate')}
      </BodyText>
      <SkillListWrapper>
        {skills?.intermediate.map((item, idx) => (
          <SkillItem key={idx} skill={item} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_basic')}
      </BodyText>
      <SkillListWrapper>
        {skills?.basic.map((item, idx) => (
          <SkillItem key={idx} skill={item} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        {t('skills_tools')}
      </BodyText>
      <SkillListWrapper>
        {skills?.tools.map((item, idx) => (
          <SkillItem key={idx} skill={item} />
        ))}
      </SkillListWrapper>
    </Section>
  );
};

export default Skills;

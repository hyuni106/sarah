import { TitleText } from 'components/common';
import { Section, SkillGrid } from './styles';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Section>
      <TitleText size="32px">SKILLS</TitleText>

      <SkillGrid>
        {[...Array(3)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillGrid>

      <SkillGrid>
        {[...Array(4)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillGrid>

      <SkillGrid>
        {[...Array(3)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillGrid>
    </Section>
  );
};

export default Skills;

import { BodyText, TitleText } from 'components/common';
import { Section, SkillListWrapper } from './styles';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Section>
      <TitleText size="32px">SKILLS</TitleText>

      <BodyText size="20px" margin="80px 0 0 0">
        😆 Proficient (익숙해요)
      </BodyText>
      <SkillListWrapper>
        {[...Array(1)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        😃 Intermediate (어느정도 가능해요)
      </BodyText>
      <SkillListWrapper>
        {[...Array(2)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        🥹 Basic Experience (경험해본 적 있어요)
      </BodyText>
      <SkillListWrapper>
        {[...Array(1)].map((_, index) => (
          <SkillItem key={index} />
        ))}
      </SkillListWrapper>

      <BodyText size="20px" margin="32px 0 0 0">
        🛠️ Collaboration Tools
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

import { Colors } from 'styles';
import {
  ExperienceItemWrapper,
  Dot,
  ExperienceContent,
  DashedLine,
  Line,
  CompanyInfoContainer
} from './styles';
import { BodyText, TitleText } from 'components/common';
import { Experience } from 'models';

interface ExperienceProps {
  experience: Experience;
}

const ExperienceItem = (props: ExperienceProps) => {
  const { experience } = props;

  return (
    <ExperienceItemWrapper>
      <Line>
        <DashedLine>
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke={Colors.g3}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12"
          />
        </DashedLine>
      </Line>

      <Dot />

      <ExperienceContent>
        <BodyText size="20px">{experience.period}</BodyText>
        <CompanyInfoContainer>
          <TitleText size="20px">{experience.company}</TitleText>
          <BodyText size="16px" margin="0 0 0 8px">{`${experience.position}`}</BodyText>
        </CompanyInfoContainer>
        <BodyText size="18px" margin="10px 0 0 0">
          {experience.description}
        </BodyText>
        <BodyText size="14px" margin="10px 0 0 0">
          {experience.additional_info}
        </BodyText>
      </ExperienceContent>
    </ExperienceItemWrapper>
  );
};

export default ExperienceItem;

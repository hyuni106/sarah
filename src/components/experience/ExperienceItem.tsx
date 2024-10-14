import { Colors } from 'styles';
import { ExperienceItemWrapper, Dot, ExperienceContent, DashedLine, Line } from './styles';
import { BodyText, TitleText } from 'components/common';

const ExperienceItem = ({
  date,
  position,
  description
}: {
  date: string;
  position: string;
  description: string;
}) => (
  <ExperienceItemWrapper>
    <Line>
      <DashedLine>
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke={Colors.g3}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12"
        />
      </DashedLine>
    </Line>

    <Dot />

    <ExperienceContent>
      <TitleText size="20px">{position}</TitleText>
      <BodyText size="16px" margin="10px 0 0 0">
        {date}
      </BodyText>
      <BodyText size="18px" margin="10px 0 0 0">
        {description}
      </BodyText>
    </ExperienceContent>
  </ExperienceItemWrapper>
);

export default ExperienceItem;

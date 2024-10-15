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
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="12"
        />
      </DashedLine>
    </Line>

    <Dot />

    <ExperienceContent>
      <BodyText size="20px">{date}</BodyText>
      <TitleText size="20px" margin="10px 0 0 0">
        {position}
      </TitleText>
      <BodyText size="18px" margin="10px 0 0 0">
        {description}
      </BodyText>
    </ExperienceContent>
  </ExperienceItemWrapper>
);

export default ExperienceItem;

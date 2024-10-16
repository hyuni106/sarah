import { BodyText } from 'components/common';
import { SkillItemContainer, SkillImgContainer, SkillImg } from './styles';

const SkillItem = () => {
  return (
    <SkillItemContainer>
      <SkillImgContainer>
        {[...Array(3)].map((_, index) => (
          <SkillImg src={''} key={index} />
        ))}
      </SkillImgContainer>
      <BodyText size="16px" margin="20px 0 0 0">
        DESCRIPTION
        <br />
        DESCRIPTION
        <br />
        DESCRIPTION
      </BodyText>
    </SkillItemContainer>
  );
};

export default SkillItem;

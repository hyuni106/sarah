import { BodyText } from 'components/common';
import { SkillItemContainer, SkillImgContainer, SkillImg } from './styles';
import { SkillDetail } from 'models';

interface SkillItemProps {
  skill: SkillDetail;
}

const SkillItem = (props: SkillItemProps) => {
  const { skill } = props;

  return (
    <SkillItemContainer>
      <SkillImgContainer>
        {skill.img_list.map((item, index) => (
          <SkillImg src={item} key={index} />
        ))}
      </SkillImgContainer>
      {skill.description.map((item, index) => (
        <BodyText key={index} size="16px" margin="8px 0 0 0">
          {item}
        </BodyText>
      ))}
    </SkillItemContainer>
  );
};

export default SkillItem;

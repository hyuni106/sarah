import { useEffect, useRef, useState } from 'react';

import { BodyText } from 'components/common';
import { SkillItemContainer, SkillImgContainer, SkillImg } from './styles';
import { SkillDetail } from 'models';

interface SkillItemProps {
  skill: SkillDetail;
}

const SkillItem = (props: SkillItemProps) => {
  const { skill } = props;

  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    const currentRef = itemRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <SkillItemContainer ref={itemRef} className={isVisible ? 'fade-in' : ''}>
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

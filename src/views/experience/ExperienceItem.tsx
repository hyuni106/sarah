import { useEffect, useRef, useState } from 'react';

import {
  ExperienceItemWrapper,
  Dot,
  ExperienceContent,
  DashedLineWrapper,
  LineConatainer,
  CompanyInfoContainer,
  StyledLine
} from './styles';
import { BodyText, TitleText } from 'components/common';
import { Experience } from 'models';

interface ExperienceProps {
  experience: Experience;
}

const ExperienceItem = (props: ExperienceProps) => {
  const { experience } = props;

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
    <ExperienceItemWrapper ref={itemRef} className={isVisible ? 'fade-in' : ''}>
      <LineConatainer>
        <Dot />
        <DashedLineWrapper>
          <StyledLine x1="2" y1="0" x2="2" y2="100%" />
        </DashedLineWrapper>
      </LineConatainer>

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

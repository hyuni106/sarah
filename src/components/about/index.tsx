import { useState, useRef, useEffect } from 'react';

import { BodyText, TitleText } from 'components/common';
import { Section, ProfileContainer, ProfileInfoContainer, CircleSketchHighlight } from './styles';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section>
      <TitleText size="32px">ABOUT ME 😁</TitleText>
      <ProfileContainer>
        <div
          style={{
            width: '200px',
            height: '280px',
            backgroundColor: 'snow',
            border: '1px solid black'
          }}
        />
        <ProfileInfoContainer>
          <BodyText size="20px">박수현</BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            93.10.06
          </BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            suhyuni1006@gmail.com
          </BodyText>
          <BodyText size="20px" margin="8px 0 0 0">
            성결대학교 컴퓨터공학부 졸업
          </BodyText>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BodyText size="18px" margin="80px 0 0 0" align="center">
        아이디어가 현실이 되는 순간의 기쁨을 느끼며, 사용자에게 더 나은 경험을 제공하기 위해
        끊임없이 고민하는 프론트엔드 개발자입니다.
        <br />
        <br />
        릴리 퓰리쳐의{' '}
        <CircleSketchHighlight ref={ref} $isVisible={isVisible}>
          ‘Despite the forecast, live like it’s spring’
        </CircleSketchHighlight>{' '}
        라는 격언은 저의 다양한 경험과 업무에 임하는 자세를 잘 표현합니다.
        <br />
        코로나, 재정 상황 등 통제 불가능한 상황으로 인해 여러 회사를 이동할 수 밖에 없었지만, 이것을
        발판삼아 언제나 회복력과 긍정적인 시각을 가지고 앞으로 나아갔습니다. 역경 속에서도 해결책을
        찾고 도전을 멈추지 않았습니다.
        <br /> 봄이 새로운 성장을 가져오듯, 저는 모든 기회를 성장의 발판으로 삼고 있습니다. 앞으로
        다양한 동료와 경험을 통해 더 넓은 가능성을 펼칠 수 있는 프론트엔드 개발자로서, 지속적으로
        발전하고 의미 있는 프로젝트에 기여하고자 합니다.
      </BodyText>
    </Section>
  );
};

export default AboutMe;

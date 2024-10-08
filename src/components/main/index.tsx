import { BodyText, TitleText } from 'components/common';
import { Colors } from 'styles';
import { Section, StyledMobile } from './styles';

const Main = () => {
  return (
    <Section id="main">
      <div>
        <TitleText size="22px">Hi👋 I’m Sarah Park! And I am..</TitleText>
        <TitleText size="44px" margin="8px 0 0 0">
          App Frontend Developer🧑‍💻
        </TitleText>
        <BodyText size="18px" margin="24px 0 0 0" color={Colors.g3}>
          안녕하세요! <b>React Native를 활용한 크로스 플랫폼 앱</b> 및 <br />
          안드로이드 앱을 개발하는 5년 차 엔지니어 사라의 포트폴리오 사이트입니다!
        </BodyText>
      </div>
      <StyledMobile />
    </Section>
  );
};

export default Main;

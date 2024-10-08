import { BodyText, TitleText } from 'components/common';
import { Section, ProfileContainer, ProfileInfoContainer } from './styles';

const AboutMe = () => {
  return (
    <Section>
      <TitleText size="32px">ABOUT ME 😁</TitleText>
      <ProfileContainer>
        <div
          style={{
            width: '230px',
            height: '230px',
            borderRadius: '50%',
            backgroundColor: 'snow',
            border: '1px solid black'
          }}
        />
        <ProfileInfoContainer>
          <BodyText size="24px" margin="16px 0 0 0">
            박수현
          </BodyText>
          <BodyText size="24px" margin="16px 0 0 0">
            93.10.06
          </BodyText>
          <BodyText size="24px" margin="16px 0 0 0">
            suhyuni1006@gmail.com
          </BodyText>
          <BodyText size="24px" margin="16px 0 0 0">
            성결대학교 컴퓨터공학부 졸업
          </BodyText>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BodyText size="18px" margin="80px 0 0 0" align="center">
        새로운 기술을 두려워하지 않고 언제나 배우기 위해 노력합니다.
        <br />
        프로젝트와 작성된 코드의 개선점을 찾아 보완하려 노력하며 이는 개인의 성장뿐 아니라 회사의
        발전까지 이루어진다는 것에 이해하고 있습니다.
        <br />
        타인의 피드백을 받아들이고 더욱 나은 개발자가 되기 위해 언제나 노력하고 있습니다.
      </BodyText>
    </Section>
  );
};

export default AboutMe;

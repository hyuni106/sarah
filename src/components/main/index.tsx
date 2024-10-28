import { useTranslation } from 'react-i18next';

import { BodyText, Button, TitleText } from 'components/common';
import { Colors } from 'styles';
import { Section, StyledMobile, ButtonContainer, ContentWrapper } from './styles';

const Main = () => {
  const { t } = useTranslation();

  return (
    <Section id="main">
      <ContentWrapper>
        <TitleText size="22px">{t('main_subtitle_1')}</TitleText>
        <TitleText size="44px" margin="8px 0 0 0">
          {t('main_title_frontend')}
        </TitleText>
        <BodyText size="18px" margin="24px 0 0 0" color={Colors.g3}>
          안녕하세요! <b>React Native를 활용한 크로스 플랫폼 앱</b> 및 <br />
          안드로이드 앱을 개발하는 5년 차 엔지니어 사라의 포트폴리오 사이트입니다!
        </BodyText>

        <ButtonContainer>
          <Button backgroundColor={Colors.g1} color={Colors.white} borderColor={Colors.transparent}>
            알아보기
          </Button>

          <Button
            backgroundColor={Colors.white}
            color={Colors.g1}
            borderColor={Colors.g4}
            margin="0 0 0 16px">
            Contact
          </Button>
        </ButtonContainer>
      </ContentWrapper>
      <StyledMobile />
    </Section>
  );
};

export default Main;

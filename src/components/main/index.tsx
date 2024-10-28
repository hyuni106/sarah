import { useTranslation } from 'react-i18next';

import { BodyText, Button, TitleText } from 'components/common';
import { Colors } from 'styles';
import { Section, StyledMobile, ButtonContainer, ContentWrapper } from './styles';

const Main = () => {
  const { t } = useTranslation();

  return (
    <Section id="main">
      <ContentWrapper>
        <TitleText size="22px">{t('main_subtitle_hi')}</TitleText>
        <TitleText size="44px" margin="8px 0 0 0">
          {t('main_title_frontend')}
        </TitleText>
        <BodyText size="18px" margin="24px 0 0 0" color={Colors.g3}>
          {t('main_description')
            .split('\n')
            .map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
        </BodyText>

        <ButtonContainer>
          <Button backgroundColor={Colors.g1} color={Colors.white} borderColor={Colors.transparent}>
            {t('learn')}
          </Button>

          <Button
            backgroundColor={Colors.white}
            color={Colors.g1}
            borderColor={Colors.g4}
            margin="0 0 0 16px">
            {t('contact')}
          </Button>
        </ButtonContainer>
      </ContentWrapper>
      <StyledMobile />
    </Section>
  );
};

export default Main;

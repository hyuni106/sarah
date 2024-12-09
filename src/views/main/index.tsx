import { useTranslation } from 'react-i18next';

import { BodyText, Button, TitleText } from 'components/common';
import { Colors } from 'styles';
import {
  Section,
  StyledMobile,
  ButtonContainer,
  ContentWrapper,
  IconWrapper,
  Icon
} from './styles';
import { useMemo, useState } from 'react';
import Contacts from './Contacts';

const Main = () => {
  const { t } = useTranslation();

  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const handleContactClick = () => {
    setIsIconsVisible(prev => !prev);
  };

  const renderIcons = useMemo(() => {
    return <Contacts isVisible={isIconsVisible} />;
  }, [isIconsVisible]);

  return (
    <Section id="main">
      <ContentWrapper>
        <TitleText size="22px">{t('main_subtitle_hi')}</TitleText>
        <TitleText size="44px" margin="8px 0 0 0">
          {t('main_title_frontend')}
        </TitleText>
        <BodyText size="18px" margin="24px 0 0 0" color={Colors.g3} i18nKey={'main_description'} />

        <ButtonContainer>
          {/* <Button backgroundColor={Colors.g1} color={Colors.white} borderColor={Colors.transparent}>
            {t('learn')}
          </Button> */}

          <Button
            backgroundColor={Colors.g1}
            color={Colors.white}
            borderColor={Colors.transparent}
            onClick={handleContactClick}>
            {t('contact')}
          </Button>
          {renderIcons}
        </ButtonContainer>
      </ContentWrapper>
      <StyledMobile />
    </Section>
  );
};

export default Main;

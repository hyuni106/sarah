import { useTranslation } from 'react-i18next';
import { BodyText } from 'components/common';
import { LinkText } from './styles';

const DescText = () => {
  const { t } = useTranslation();

  return (
    <BodyText size="18px" margin="80px 0 0 0" align="center">
      {t('works_desc_1')}
      <LinkText
        href="https://mud-cake-94c.notion.site/e64a2a0fd451456e9f3c0c7dd1dc607b?v=af1b0d7004914e50b81c3dd8089e6878&pvs=4"
        target="_blank"
        rel="noopener noreferrer">
        {t('works_here')}
      </LinkText>
      {t('works_desc_2')}
    </BodyText>
  );
};

export default DescText;

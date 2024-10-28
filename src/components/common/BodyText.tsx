import { Trans } from 'react-i18next';
import styled from 'styled-components';
import { Colors } from 'styles';

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
  align?: string;
  i18nKey?: string;
  children?: React.ReactNode;
}

const StyledText = styled.p<Omit<TextProps, 'i18nKey' | 'children'>>`
  font-family: SuiteRegular;
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || Colors.black};
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.align || 'left'};

  @media (max-width: 768px) {
    font-size: ${props => props.size || '14px'};
    text-align: center;
  }
`;

const BodyText = ({ i18nKey, ...styleProps }: TextProps) => {
  return (
    <StyledText {...styleProps}>
      {i18nKey ? (
        <Trans i18nKey={i18nKey} components={{ br: <br />, b: <b /> }} />
      ) : (
        styleProps.children
      )}
    </StyledText>
  );
};

export default BodyText;

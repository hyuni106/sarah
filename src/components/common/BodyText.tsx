import styled from 'styled-components';
import { Colors } from 'styles';

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
  align?: string;
}

const BodyText = styled.p<TextProps>`
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

export default BodyText;

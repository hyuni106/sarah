import styled from 'styled-components';
import { Colors } from 'styles';

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
  align?: string;
}

const TitleText = styled.p<TextProps>`
  font-family: SuiteExtraBold;
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || Colors.black};
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.align || 'left'};
`;

export default TitleText;

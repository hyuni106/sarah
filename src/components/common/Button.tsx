import styled from 'styled-components';
import { Colors } from 'styles';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
  borderColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: SuiteExtraBold;
  background-color: ${props => props.backgroundColor || Colors.white};
  color: ${props => props.color || Colors.white};
  padding: ${props => props.padding || '10px 20px'};
  border: ${props => (props.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  border-radius: ${props => props.borderRadius || '8px'};
  cursor: pointer;
  margin: ${props => props.margin || '0'};
  font-size: 16px;
  min-width: 155px;
  height: 48px;

  &:hover {
    opacity: 0.9;
  }
`;

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  padding,
  borderRadius,
  margin,
  borderColor,
  children,
  onClick
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      padding={padding}
      borderRadius={borderRadius}
      margin={margin}
      borderColor={borderColor}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['label'].includes(prop),
})<ButtonProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Button = ({ label, disabled, backgroundColor, onClick, ...props }: ButtonProps) => (
  <StyledButton
    label={label}
    disabled={disabled}
    backgroundColor={backgroundColor}
    onClick={onClick}
    {...props}
  >
    {label}
  </StyledButton>
);

export default Button;
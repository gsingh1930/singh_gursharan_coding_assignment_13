import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label.withConfig({
  shouldForwardProp: (prop) =>
    !['label', 'name', 'value', 'checked'].includes(prop),
})<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#f8f9fa'};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  cursor: inherit;
`;

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  backgroundColor,
  ...props
}: RadioButtonProps) => (
  <RadioContainer
    label={label}
    name={name}
    value={value}
    checked={checked}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    <StyledInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
    {label}
  </RadioContainer>
);

export default RadioButton;

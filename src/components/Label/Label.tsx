import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !['text'].includes(prop),
})<LabelProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#28a745'};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const Label = ({ text, disabled, backgroundColor, ...props }: LabelProps) => (
  <StyledLabel
    text={text}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    {text}
  </StyledLabel>
);

export default Label;

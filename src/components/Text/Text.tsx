import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['content'].includes(prop),
})<TextProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#f8f9fa'};
  color: ${({ disabled }) => (disabled ? '#6c757d' : '#212529')};
  padding: 10px;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const Text = ({ content, disabled, backgroundColor, ...props }: TextProps) => (
  <StyledText
    content={content}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    {content}
  </StyledText>
);

export default Text;
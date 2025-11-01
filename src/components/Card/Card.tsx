import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !['title', 'content'].includes(prop),
})<CardProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#ffffff'};
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #212529;
`;

const CardContent = styled.p`
  margin: 0;
  color: #495057;
`;

const Card = ({
  title,
  content,
  disabled,
  backgroundColor,
  ...props
}: CardProps) => (
  <StyledCard
    title={title}
    content={content}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </StyledCard>
);

export default Card;

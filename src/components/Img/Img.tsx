import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Img = ({ src, alt, disabled, backgroundColor, ...props }: ImgProps) => (
  <StyledImg
    src={src}
    alt={alt}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  />
);

export default Img;
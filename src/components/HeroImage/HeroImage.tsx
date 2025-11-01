import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['src', 'alt', 'title'].includes(prop),
})<HeroImageProps>`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#000'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroImage = ({
  src,
  alt,
  title,
  disabled,
  backgroundColor,
  ...props
}: HeroImageProps) => (
  <HeroContainer
    src={src}
    alt={alt}
    title={title}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    <HeroImg src={src} alt={alt} />
    <HeroTitle>{title}</HeroTitle>
  </HeroContainer>
);

export default HeroImage;

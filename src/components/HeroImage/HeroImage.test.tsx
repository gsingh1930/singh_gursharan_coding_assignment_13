import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import HeroImage from './HeroImage';

test('renders hero image and is visible', () => {
  render(<HeroImage src="test.jpg" alt="Test" title="Hero" />);
  expect(screen.getByText('Hero')).toBeInTheDocument();
  expect(screen.getByAltText('Test')).toBeInTheDocument();
});

test('hero image changes opacity when disabled', () => {
  const { container } = render(<HeroImage src="test.jpg" alt="Test" title="Hero" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});
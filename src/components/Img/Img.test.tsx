import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Img from './Img';

test('renders image and is visible', () => {
  render(<Img src="test.jpg" alt="Test" />);
  expect(screen.getByAltText('Test')).toBeInTheDocument();
});

test('image changes opacity when disabled', () => {
  const { container } = render(<Img src="test.jpg" alt="Test" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});
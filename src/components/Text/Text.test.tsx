import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Text from './Text';

test('renders text and is visible', () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('text changes opacity when disabled', () => {
  const { container } = render(<Text content="Test" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

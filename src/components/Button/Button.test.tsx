import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './Button';

test('renders button and is visible', () => {
  render(<Button label="myButton" />);
  expect(screen.getByText('myButton')).toBeInTheDocument();
});

test('button changes opacity when disabled', () => {
  const { container } = render(<Button label="Test" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

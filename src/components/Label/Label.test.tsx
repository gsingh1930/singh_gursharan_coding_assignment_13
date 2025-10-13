import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Label from './Label';

test('renders label and is visible', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('label changes opacity when disabled', () => {
  const { container } = render(<Label text="Test" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});
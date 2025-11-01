import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import RadioButton from './RadioButton';

test('renders radio button and is visible', () => {
  render(<RadioButton label="Test" name="test" value="test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByRole('radio')).toBeInTheDocument();
});

test('radio button changes opacity when disabled', () => {
  const { container } = render(
    <RadioButton label="Test" name="test" value="test" disabled />
  );
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

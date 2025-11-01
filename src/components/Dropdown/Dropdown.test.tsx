import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Dropdown from './Dropdown';

test('renders dropdown and is visible', () => {
  render(<Dropdown options={['Test 1', 'Test 2']} />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('dropdown changes opacity when disabled', () => {
  const { container } = render(<Dropdown options={['Test']} disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

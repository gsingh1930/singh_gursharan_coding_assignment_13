import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Card from './Card';

test('renders card and is visible', () => {
  render(<Card title="Test" content="Content" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
});

test('card changes opacity when disabled', () => {
  const { container } = render(
    <Card title="Test" content="Content" disabled />
  );
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

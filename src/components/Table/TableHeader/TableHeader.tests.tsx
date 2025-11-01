import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import TableHeader from './TableHeader';

test('renders table header and is visible', () => {
  render(
    <table>
      <TableHeader headers={['Test1', 'Test2']} />
    </table>
  );
  expect(screen.getByText('Test1')).toBeInTheDocument();
  expect(screen.getByText('Test2')).toBeInTheDocument();
});

test('table header changes opacity when disabled', () => {
  const { container } = render(
    <table>
      <TableHeader headers={['Test']} disabled />
    </table>
  );
  const thead = container.querySelector('thead');
  expect(thead).toHaveStyleRule('opacity', '0.6');
});

import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import TableFooter from './TableFooter';

test('renders table footer and is visible', () => {
  render(
    <table>
      <TableFooter footers={['Footer1', 'Footer2']} />
    </table>
  );
  expect(screen.getByText('Footer1')).toBeInTheDocument();
  expect(screen.getByText('Footer2')).toBeInTheDocument();
});

test('table footer changes opacity when disabled', () => {
  const { container } = render(
    <table>
      <TableFooter footers={['Test']} disabled />
    </table>
  );
  const tfoot = container.querySelector('tfoot');
  expect(tfoot).toHaveStyleRule('opacity', '0.6');
});

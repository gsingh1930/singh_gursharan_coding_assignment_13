import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import TableRow from './TableRow';

test('renders table row and is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Test Data</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByText('Test Data')).toBeInTheDocument();
});

test('table row changes opacity when disabled', () => {
  const { container } = render(
    <table>
      <tbody>
        <TableRow disabled>
          <td>Test</td>
        </TableRow>
      </tbody>
    </table>
  );
  const tr = container.querySelector('tr');
  expect(tr).toHaveStyleRule('opacity', '0.6');
});

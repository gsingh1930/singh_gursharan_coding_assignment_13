import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import TableCell from './TableCell';

test('renders table cell and is visible', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Test Content" />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('table cell changes opacity when disabled', () => {
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Test" disabled />
        </tr>
      </tbody>
    </table>
  );
  const td = container.querySelector('td');
  expect(td).toHaveStyleRule('opacity', '0.6');
});

import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Table from './Table';

test('renders table and is visible', () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('table changes opacity when disabled', () => {
  const { container } = render(
    <Table disabled>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
});

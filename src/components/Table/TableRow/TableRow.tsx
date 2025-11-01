import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#ffffff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  border-bottom: 1px solid #dee2e6;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f8f9fa')};
  }
`;

const TableRow = ({ children, ...props }: TableRowProps) => (
  <StyledTableRow {...props}>{children}</StyledTableRow>
);

export default TableRow;

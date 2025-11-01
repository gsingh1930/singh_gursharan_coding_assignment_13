import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#ffffff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  border: 1px solid #dee2e6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Table = ({ children, ...props }: TableProps) => (
  <StyledTable {...props}>{children}</StyledTable>
);

export default Table;

import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td.withConfig({
  shouldForwardProp: (prop) => !['content'].includes(prop),
})<TableCellProps>`
  padding: 12px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? '#6c757d' : '#212529')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const TableCell = ({
  content,
  disabled,
  backgroundColor,
  ...props
}: TableCellProps) => (
  <StyledTableCell
    content={content}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    {content}
  </StyledTableCell>
);

export default TableCell;

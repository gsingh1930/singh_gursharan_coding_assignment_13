import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot.withConfig({
  shouldForwardProp: (prop) => !['footers'].includes(prop),
})<TableFooterProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#f8f9fa'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  border-top: 2px solid #dee2e6;
`;

const StyledTd = styled.td`
  padding: 12px;
  font-weight: bold;
  color: #495057;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const TableFooter = ({ footers, disabled, backgroundColor, ...props }: TableFooterProps) => (
  <StyledTableFooter
    footers={footers}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    <tr>
      {footers.map((footer, index) => (
        <StyledTd key={index}>{footer}</StyledTd>
      ))}
    </tr>
  </StyledTableFooter>
);

export default TableFooter;
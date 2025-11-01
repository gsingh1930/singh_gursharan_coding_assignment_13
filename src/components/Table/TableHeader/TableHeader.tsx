import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead.withConfig({
  shouldForwardProp: (prop) => !['headers'].includes(prop),
})<TableHeaderProps>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#343a40'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
`;

const StyledTh = styled.th`
  padding: 12px;
  text-align: left;
  color: white;
  border-bottom: 2px solid #dee2e6;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const TableHeader = ({
  headers,
  disabled,
  backgroundColor,
  ...props
}: TableHeaderProps) => (
  <StyledTableHeader
    headers={headers}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  >
    <tr>
      {headers.map((header, index) => (
        <StyledTh key={index}>{header}</StyledTh>
      ))}
    </tr>
  </StyledTableHeader>
);

export default TableHeader;

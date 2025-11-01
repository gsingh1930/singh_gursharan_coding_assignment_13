import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#ffffff'};
  color: ${({ disabled }) => (disabled ? '#6c757d' : '#212529')};
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.3s;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 8px;
  }
`;

const Dropdown = ({
  options,
  placeholder = 'Select...',
  onChange,
  disabled,
  backgroundColor,
}: DropdownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect
      disabled={disabled}
      backgroundColor={backgroundColor}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

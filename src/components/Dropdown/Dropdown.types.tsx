export interface DropdownProps {
  options: string[];
  placeholder?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  backgroundColor?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: string) => void;
}

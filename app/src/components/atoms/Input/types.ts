export interface InputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (key: string) => void;
  placeholder?: string;
}

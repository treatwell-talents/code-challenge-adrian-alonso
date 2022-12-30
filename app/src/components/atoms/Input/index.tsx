import { Input, InputHolder, Label } from "./style";
import { InputProps } from "./types";

export default ({
  label,
  value,
  onChange,
  onKeyDown,
  placeholder,
}: InputProps) => (
  <InputHolder>
    <Label>{label}</Label>
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onKeyDown={(e) => onKeyDown?.(e.key)}
      placeholder={placeholder}
    />
  </InputHolder>
);

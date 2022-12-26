import { Input, InputHolder, Label } from "./style";
import { InputProps } from "./types";

export default ({ label, ...props }: InputProps) => (
  <InputHolder>
    <Label>{label}</Label>
    <Input type="text" {...props} />
  </InputHolder>
);

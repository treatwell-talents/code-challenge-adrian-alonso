import { Button } from "./style";
import { ButtonProps } from "./types";

export default ({ label, type = "button", disabled = false }: ButtonProps) => (
  <Button type={type} disabled={disabled}>
    {label}
  </Button>
);

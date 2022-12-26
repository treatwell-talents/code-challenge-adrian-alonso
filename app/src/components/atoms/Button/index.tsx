import { Button } from "./style";
import { ButtonProps } from "./types";

export default ({ label, ...props }: ButtonProps) => (
  <Button type="button" {...props}>
    {label}
  </Button>
);

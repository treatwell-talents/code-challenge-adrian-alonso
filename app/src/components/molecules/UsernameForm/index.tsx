import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container } from "./style";
import { UsernameFormProps } from "./types";

export default ({ onSubmit }: UsernameFormProps) => (
  <Container>
    <Input label="Username" />
    <Button label="Start the chat" onClick={() => onSubmit?.("pepe")} />
  </Container>
);

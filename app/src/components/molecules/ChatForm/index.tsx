import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container, InputHoldr, ButtonHolder } from "./style";
import ChatFormProps from "./types";

export default ({ onSubmit }: ChatFormProps) => (
  <Container>
    <InputHoldr>
      <Input label="Message" />
    </InputHoldr>
    <ButtonHolder>
      <Button label="Send" onClick={() => onSubmit("PEPE")} />
    </ButtonHolder>
  </Container>
);

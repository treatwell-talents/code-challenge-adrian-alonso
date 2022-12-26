import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container, InputHoldr, ButtonHolder } from "./style";

export default ({}) => (
  <Container>
    <InputHoldr>
      <Input label="Message" />
    </InputHoldr>
    <ButtonHolder>
      <Button label="Send" />
    </ButtonHolder>
  </Container>
);

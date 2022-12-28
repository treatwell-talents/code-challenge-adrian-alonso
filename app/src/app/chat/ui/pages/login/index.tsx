import UsernameForm from "components/molecules/UsernameForm";
import { Form, LoginPage } from "./style";
import { LoginProps } from "./types";

export default ({ login }: LoginProps) => {
  return (
    <LoginPage>
      <Form>
        <UsernameForm onSubmit={(username) => login(username)} />
      </Form>
    </LoginPage>
  );
};

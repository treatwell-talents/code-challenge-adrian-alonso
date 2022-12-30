import UsernameForm from "components/molecules/UsernameForm";
import { Form, LoginPage } from "./style";
import useChat from "app/chat/ui/hooks/useChat.hook";

export default () => {
  const { login } = useChat();
  return (
    <LoginPage>
      <Form>
        <UsernameForm onSubmit={(username) => login(username)} />
      </Form>
    </LoginPage>
  );
};

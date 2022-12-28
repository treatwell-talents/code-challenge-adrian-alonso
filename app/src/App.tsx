import useUser from "app/chat/ui/hooks/useUser.hook";
import Login from "./app/chat/ui/pages/login";
import Chat from "./app/chat/ui/pages/chat";
import useMessages from "app/chat/ui/hooks/useMessages.hook";

function App() {
  const { isLogged, username, login } = useUser();
  const { write, messages } = useMessages(username);

  return !isLogged ? (
    <Login login={login} />
  ) : (
    <Chat write={write} messages={messages} user={username as string} />
  );
}

export default App;

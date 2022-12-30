import Login from "./app/chat/ui/pages/login";
import Chat from "./app/chat/ui/pages/chat";
import useChat from "app/chat/ui/hooks/useChat.hook";

function App() {
  const { isLogged } = useChat();

  return !isLogged ? <Login /> : <Chat />;
}

export default App;

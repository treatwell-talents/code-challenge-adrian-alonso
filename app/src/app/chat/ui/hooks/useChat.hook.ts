import { useContext } from "react";
import { ChatContext } from "app/chat/ui/context/chat.context";

const useChat = () => {
  const { username, messages, login, write } = useContext(ChatContext);

  return {
    isLogged: username !== undefined,
    messages,
    username,
    login,
    write,
  };
};

export default useChat;

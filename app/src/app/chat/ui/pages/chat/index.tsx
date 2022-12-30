import Chat from "components/organisms/Chat";
import useChat from "app/chat/ui/hooks/useChat.hook";

export default () => {
  const { username, messages, write } = useChat();
  return <Chat user={username as string} messages={messages} write={write} />;
};

import Message from "app/chat/domain/message";
import React, { ReactNode } from "react";
import useUser from "app/chat/ui/hooks/useUser.hook";
import useMessages from "app/chat/ui/hooks/useMessages.hook";

export type ChatContextType = {
  username?: string;
  messages: Message[];
  login: (username: string) => void;
  write: (text: string) => void;
};

export const ChatContext = React.createContext<ChatContextType>(
  {} as ChatContextType,
);

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { username, login } = useUser();
  const { messages, write } = useMessages(username);

  return (
    <ChatContext.Provider value={{ messages, username, login, write }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

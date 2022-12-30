import Message from "app/chat/domain/message";

export interface ChatProps {
  user: string;
  messages: Message[];
  write: (message: string) => void;
}

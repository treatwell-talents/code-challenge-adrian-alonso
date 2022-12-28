import Message from "app/chat/domain/message";

export interface ChatProps {
  messages: Message[];
  write: (message: string) => void;
  user: string;
}

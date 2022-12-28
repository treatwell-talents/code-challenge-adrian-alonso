import Message from "app/chat/domain/message";

export interface ChatProps {
  write: (text: string) => void;
  messages: Message[];
}

import Message from "./message";

interface MessageNotificator {
  notifyNewMessage(message: Message): void;
}
export default MessageNotificator;

import Message from "./message";

export type SubscriptionCallback = (message: Message) => void;
interface MessageSubscriber {
  subscribe(callback: SubscriptionCallback): void;
}
export default MessageSubscriber;

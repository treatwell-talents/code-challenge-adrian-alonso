import CreateMessageUseCase from "app/chat/application/create-message/create-message.usecase";
import GetMessagesUseCase from "app/chat/application/get-messages/get-message.usecase";
import Message from "app/chat/domain/message";
import LocalStorageMessageRepository from "app/chat/infrastructure/local-storage-message.repository";
import BroadcastChannelMessageNotificator from "app/chat/infrastructure/broadcast-channel-message.notificator";
import BroadcastChannelMessageSubscriber from "app/chat/infrastructure/broadcast-channel-message.subscriber";
import { useEffect, useState } from "react";

const repository = new LocalStorageMessageRepository();
const notificator = new BroadcastChannelMessageNotificator();
const subscriber = new BroadcastChannelMessageSubscriber();
const fetcher = new GetMessagesUseCase(repository);

const useMessages = (username?: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = () => setMessages(fetcher.execute());

  useEffect(() => fetchMessages(), []);

  useEffect(() => {
    const channel = subscriber.subscribe((message) => {
      if (message.getAuthor() !== username) {
        setMessages((messages) => [...messages, message]);
      }
    });
    return () => channel.close();
  }, [username]);

  const write = (text: string) => {
    const message = Message.create({
      message: text,
      author: username as string,
    });
    setMessages((messages) => [...messages, message]);
    new CreateMessageUseCase(repository, notificator).execute(message);
  };

  return {
    messages,
    write,
  };
};

export default useMessages;

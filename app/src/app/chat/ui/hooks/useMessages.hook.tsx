import CreateMessageUseCase from "app/chat/application/create-message/create-message.usecase";
import GetMessagesUseCase from "app/chat/application/get-messages/get-message.usecase";
import Message from "app/chat/domain/message";
import LocalStorageMessageRepository from "app/chat/infrastructure/local-storage-message.repository";
import { useEffect } from "react";
import { useState } from "react";

const repository = new LocalStorageMessageRepository();

const useMessages = (username?: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(new GetMessagesUseCase(repository).execute());
  }, []);

  const write = (text: string) => {
    const message = Message.create({
      message: text,
      author: username as string,
    });
    setMessages((messages) => [...messages, message]);
    new CreateMessageUseCase(repository).execute(message);
  };

  return {
    messages,
    write,
  };
};

export default useMessages;

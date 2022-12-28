import Message from "app/chat/domain/message";
import MessageRepository from "app/chat/domain/message.repository";
import MessageSerializer, { SerializedMessage } from "./message.serializer";

const LOCAL_STORAGE_KEY = "messages";

export default class LocalStorageMessageRepository
  implements MessageRepository
{
  save(message: Message): void {
    const messages = this.findAll();

    messages.push(message);
    localStorage.setItem(LOCAL_STORAGE_KEY, this.serialize(messages));
  }

  findAll(): Message[] {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!value) {
      return [];
    }

    const objects = JSON.parse(value) as SerializedMessage[];

    return this.unserialize(objects);
  }

  private serialize(messages: Message[]) {
    const objects = messages.map((m) => MessageSerializer.serialize(m));
    return JSON.stringify(objects);
  }

  private unserialize(messages: SerializedMessage[]): Message[] {
    return messages.map((m) => MessageSerializer.unserialize(m));
  }
}

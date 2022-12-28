import Message from "app/chat/domain/message";
import MessageRepository from "app/chat/domain/message.repository";

export default class CreateMessageUseCase {
  constructor(private readonly repository: MessageRepository) {}
  execute(message: Message) {
    this.repository.save(message);
  }
}

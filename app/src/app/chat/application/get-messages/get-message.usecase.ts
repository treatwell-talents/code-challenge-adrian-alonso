import Message from "app/chat/domain/message";
import MessageRepository from "app/chat/domain/message.repository";

export default class GetMessagesUseCase {
  constructor(private readonly repository: MessageRepository) {}
  execute(): Message[] {
    return this.repository.findAll();
  }
}

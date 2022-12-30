import Message from "app/chat/domain/message";
import MessageNotificator from "app/chat/domain/message.notificator";
import MessageRepository from "app/chat/domain/message.repository";

export default class CreateMessageUseCase {
  constructor(
    private readonly repository: MessageRepository,
    private readonly notificator: MessageNotificator,
  ) {}
  execute(message: Message) {
    this.repository.save(message);
    this.notificator.notifyNewMessage(message);
  }
}

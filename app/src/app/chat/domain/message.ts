import uuid from "react-uuid";

interface CreateMessage {
  readonly messageId?: string;
  readonly sended?: Date;
  readonly message: string;
  readonly author: string;
}
class Message {
  private constructor(
    private readonly messageId: string,
    private readonly sended: Date,
    private readonly message: string,
    private readonly author: string,
  ) {
    this.messageId = uuid();
  }

  static create({
    messageId = uuid(),
    sended = new Date(),
    message,
    author,
  }: CreateMessage): Message {
    return new Message(messageId, sended, message, author);
  }

  getMessageId(): string {
    return this.messageId;
  }

  getSended(): Date {
    return this.sended;
  }

  getMessage(): string {
    return this.message;
  }

  getAuthor(): string {
    return this.author;
  }
}

export default Message;

import uuid from "react-uuid";

interface CreateMessage {
  readonly sended?: Date;
  readonly message: string;
  readonly author: string;
}
class Message {
  private readonly messageId: string;

  private constructor(
    private readonly sended: Date,
    private readonly message: string,
    private readonly author: string,
  ) {
    this.messageId = uuid();
  }

  static create({
    sended = new Date(),
    message,
    author,
  }: CreateMessage): Message {
    return new Message(sended, message, author);
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

import Message from "app/chat/domain/message";

export type SerializedMessage = {
  messageId: string;
  message: string;
  sended: string;
  author: string;
};

class MessageSerializer {
  static serialize(message: Message): SerializedMessage {
    return {
      messageId: message.getMessageId(),
      message: message.getMessage(),
      sended: message.getSended().toUTCString(),
      author: message.getAuthor(),
    };
  }

  static unserialize(message: SerializedMessage): Message {
    return Message.create({
      messageId: message.messageId,
      message: message.message,
      sended: new Date(message.sended),
      author: message.author,
    });
  }
}

export default MessageSerializer;

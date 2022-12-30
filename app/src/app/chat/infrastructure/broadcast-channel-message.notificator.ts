import MessageNotificator from "app/chat/domain/message.notificator";
import Message from "app/chat/domain/message";
import MessageSerializer from "./message.serializer";

export default class BroadcastChannelMessageNotificator
  implements MessageNotificator
{
  notifyNewMessage(message: Message): void {
    const channel = new BroadcastChannel("chat");

    channel.postMessage(MessageSerializer.serialize(message));
  }
}

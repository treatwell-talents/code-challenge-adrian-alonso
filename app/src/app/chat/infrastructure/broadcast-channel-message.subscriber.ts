import MessageSubscriber, {
  SubscriptionCallback,
} from "app/chat/domain/message.subscriber";
import MessageSerializer, { SerializedMessage } from "./message.serializer";

export default class BroadcastChannelMessageSubscriber
  implements MessageSubscriber
{
  subscribe(callback: SubscriptionCallback): BroadcastChannel {
    const channel = new BroadcastChannel("chat");

    channel.onmessage = (event) => {
      callback(MessageSerializer.unserialize(event.data as SerializedMessage));
    };

    return channel;
  }
}

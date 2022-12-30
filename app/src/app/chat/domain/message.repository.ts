import Message from "./message";

interface MessageRepository {
  save(message: Message): void;
  findAll(): Message[];
}
export default MessageRepository;

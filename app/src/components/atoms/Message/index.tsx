import {
  Container,
  Hour,
  MessageHolder,
  MessageUsername,
  Message,
  User,
} from "./style";
import { MessageProps } from "./types";

export default ({ date, message, username }: MessageProps) => {
  const formatedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <Container>
      <MessageHolder>
        <MessageUsername>{username}</MessageUsername>
        <Message>
          {message} <Hour>{formatedTime}</Hour>
        </Message>
      </MessageHolder>
      <User>{firstLetter}</User>
    </Container>
  );
};

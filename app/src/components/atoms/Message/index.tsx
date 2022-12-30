import { useEffect, useState } from "react";
import {
  Container,
  Hour,
  MessageHolder,
  MessageUsername,
  Message,
  User,
} from "./style";
import { MessageProps } from "./types";

const RECENT_MESSAGE_TIME = 2000;

export default ({
  date,
  message,
  username,
  direction = "left",
}: MessageProps) => {
  const [isRecent, setRecent] = useState(
    new Date().getTime() - date.getTime() < RECENT_MESSAGE_TIME,
  );
  const formatedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes(),
  ).padStart(2, "0")}`;

  const firstLetter = username.charAt(0).toUpperCase();

  useEffect(() => {
    isRecent && setTimeout(() => setRecent(false), RECENT_MESSAGE_TIME);
  }, [isRecent]);

  return (
    <Container $direction={direction} className={"message"}>
      <MessageHolder
        $color={direction === "left" ? "cyan" : "purple"}
        $isRecent={isRecent}
      >
        <MessageUsername>{username}</MessageUsername>
        <Message>
          {message} <Hour>{formatedTime}</Hour>
        </Message>
      </MessageHolder>
      <User>{firstLetter}</User>
    </Container>
  );
};

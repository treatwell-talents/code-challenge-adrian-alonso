import Chat from "components/organisms/Chat";
import { ChatProps } from "./types";

export default ({ messages, write }: ChatProps) => {
  return (
    <>
      <Chat messages={messages} write={write} />
    </>
  );
};

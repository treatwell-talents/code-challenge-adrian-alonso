import Chat from "components/organisms/Chat";
import { ChatProps } from "./types";

export default ({ messages, user, write }: ChatProps) => (
  <>
    <Chat messages={messages} write={write} user={user} />
  </>
);

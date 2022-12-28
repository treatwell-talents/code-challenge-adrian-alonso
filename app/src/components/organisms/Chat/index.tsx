import Message from "components/atoms/Message";
import { Container, Top, Content, Bottom } from "./style";
import { ChatProps } from "./types";
import ChatForm from "components/molecules/ChatForm";
import Header from "components/molecules/Header";
import { useEffect, useRef } from "react";

export default ({ messages, user, write }: ChatProps) => {
  const ref = useRef(null);

  const scrollToBottom = (behaviour?: ScrollBehavior) => {
    const content = ref.current as unknown as HTMLElement;
    content.scroll({
      behavior: behaviour ?? "auto",
      top: content.scrollHeight,
    });
  };

  const onSubmitChatForm = (text: string) => {
    write(text);
    setTimeout(() => scrollToBottom("smooth"), 100);
  };

  useEffect(() => scrollToBottom(), []);

  return (
    <Container>
      <Top>
        <Header />
      </Top>
      <Content ref={ref}>
        {messages.map((m) => (
          <Message
            direction={m.getAuthor() === user ? "right" : "left"}
            date={m.getSended()}
            message={m.getMessage()}
            username={m.getAuthor()}
            key={`message-${m.getMessageId()}`}
          />
        ))}
      </Content>
      <Bottom>
        <ChatForm onSubmit={onSubmitChatForm} />
      </Bottom>
    </Container>
  );
};

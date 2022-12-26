import Message from "components/atoms/Message";
import { Container, Top, Content, Bottom } from "./style";
import { ChatProps } from "./types";
import ChatForm from "components/molecules/ChatForm";
import Header from "components/molecules/Header";

export default ({ messages }: ChatProps) => (
  <Container>
    <Top>
      <Header />
    </Top>
    <Content>
      {messages.map((m) => (
        <Message
          date={m.getSended()}
          message={m.getMessage()}
          username={m.getAuthor()}
          key={`message-${m.getMessageId()}`}
        />
      ))}
    </Content>
    <Bottom>
      <ChatForm />
    </Bottom>
  </Container>
);

import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container, InputHoldr, ButtonHolder } from "./style";
import ChatFormProps from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";
import useChat from "app/chat/ui/hooks/useChat.hook";
import { useState, useEffect } from "react";

export default ({ onSubmit }: ChatFormProps) => {
  const { messages, username } = useChat();
  const [historyPosition, setHistoryPosition] = useState(-1);

  const myMessages = messages
    .filter((m) => m.getAuthor() === username)
    .reverse();

  const form = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      onSubmit?.(values.message);
      form.resetForm();
    },
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      message: Yup.string().min(1).required(),
    }),
  });

  useEffect(() => {
    const message = myMessages[historyPosition];
    if (message) form.setFieldValue("message", message.getMessage());
  }, [historyPosition]);

  const handleArrowUp = () => {
    if (historyPosition <= myMessages.length)
      setHistoryPosition((position) => position + 1);
  };

  const handleArrowDown = () => {
    if (historyPosition >= -1) setHistoryPosition((position) => position - 1);
  };

  const handleKeyDown = (key: string) => {
    if (key === "ArrowUp") {
      return handleArrowUp();
    }

    if (key === "ArrowDown") {
      return handleArrowDown();
    }

    setHistoryPosition(-1);
  };

  return (
    <Container onSubmit={form.handleSubmit}>
      <InputHoldr>
        <Input
          label="Message"
          value={form.values.message}
          onChange={(value) => form.setFieldValue("message", value)}
          onKeyDown={handleKeyDown}
        />
      </InputHoldr>
      <ButtonHolder>
        <Button type="submit" disabled={!form.isValid} label="Send" />
      </ButtonHolder>
    </Container>
  );
};

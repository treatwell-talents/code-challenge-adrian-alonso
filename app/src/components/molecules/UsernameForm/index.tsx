import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container } from "./style";
import { UsernameFormProps } from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";

export default ({ onSubmit }: UsernameFormProps) => {
  const form = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      onSubmit?.(values.username);
    },
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      username: Yup.string().min(1).required(),
    }),
  });

  return (
    <Container onSubmit={form.handleSubmit}>
      <Input
        label="Username"
        onChange={(value) => form.setFieldValue("username", value)}
        value={form.values.username}
      />
      <Button type="submit" disabled={!form.isValid} label="Start the chat" />
    </Container>
  );
};

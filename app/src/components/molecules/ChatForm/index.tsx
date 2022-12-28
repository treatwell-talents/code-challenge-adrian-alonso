import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Container, InputHoldr, ButtonHolder } from "./style";
import ChatFormProps from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";

export default ({ onSubmit }: ChatFormProps) => {
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

  return (
    <Container onSubmit={form.handleSubmit}>
      <InputHoldr>
        <Input
          label="Message"
          value={form.values.message}
          onChange={(value) => form.setFieldValue("message", value)}
        />
      </InputHoldr>
      <ButtonHolder>
        <Button type="submit" disabled={!form.isValid} label="Send" />
      </ButtonHolder>
    </Container>
  );
};

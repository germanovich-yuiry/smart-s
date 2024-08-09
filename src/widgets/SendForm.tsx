import React, { useEffect } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Button as MuiButton } from "@mui/material";
import TextField from "@mui/material/TextField";

import { IEmailState, sendEmailRequest } from "../slices/emailSlice";
import { IRenderTextFieldProps } from "../types/RenderTextField.type";
import { IData } from "../types/Data.type";
import { validateEmail as validate } from "../helpers/emailValidate";

const StyledTextField = styled(TextField)`
  flex: 1;
  margin-right: 20px;
`;

const renderTextField: React.FC<IRenderTextFieldProps> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <StyledTextField
    {...input}
    label={label}
    variant="outlined"
    error={touched && !!error}
    helperText={touched && error}
    {...custom}
  />
);

const Container = styled.div`
  box-shadow: 1px 1px 4px 1px #00bfff;
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  padding: 28px;
`;

const Space = styled.div`
  width: 20px;
`;
const FormHeader = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const Note = styled.p`
  font-size: 16px;
  opacity: 75%;
  margin-bottom: 36px;
`;

const InputSection = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled(MuiButton)`
  height: 56px;
  display: inline-block;
`;

const Message = styled.p`
  padding-top: 6px;
  padding-left: 8px;
  color: blue;
  font-size: 16px;
`;

const Error = styled.p`
  padding-top: 6px;
  padding-left: 8px;
  color: red;
  font-size: 16px;
`;

interface SendFormProps extends InjectedFormProps {
  reset: () => void;
}

const SendForm: React.FC<SendFormProps> = ({ handleSubmit, reset }) => {
  const dispatch = useDispatch();
  const emailStatus = useSelector(
    (state: { email: IEmailState }) => state.email.status
  );
  const emailError = useSelector(
    (state: { email: IEmailState }) => state.email.error
  );
  const data = useSelector((state: { data: IData }) => state.data);

  const onSubmit = () => {
    dispatch(sendEmailRequest({ userData: data }));
  };

  useEffect(() => {
    if (emailStatus === "succeeded") reset();
  }, [emailStatus, reset]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <Title>Enter Email to send data</Title>
          <Note>Your data is ready! Please enter a valid email to send</Note>
        </FormHeader>

        <InputSection>
          <Field name="email" component={renderTextField} label="Email *" />
          <Space />
          <Button
            type="submit"
            variant="contained"
            style={{ textTransform: "none" }}
          >
            Send
          </Button>
        </InputSection>

        {emailStatus === "loading" && <Message>Sending...</Message>}
        {emailError && <Error>Error: {emailError}</Error>}
        {emailStatus === "succeeded" && (
          <Message>Email sent successfully!</Message>
        )}
      </form>
    </Container>
  );
};

const Form = reduxForm({
  form: "sendForm",
  validate,
})(SendForm);

export default Form;

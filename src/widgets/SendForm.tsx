import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailRequest } from "../slices/emailSlice";
import { useEffect } from "react";

const StyledTextField = styled(TextField)`
  flex: 1;
  margin-right: 20px;
`;

const renderTextField = ({
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

const Space = styled.div`
  width: 20px;
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

const SendForm = ({ handleSubmit, reset }) => {
  const dispatch = useDispatch();
  const emailStatus = useSelector((state) => state.email.status);
  const emailError = useSelector((state) => state.email.error);
  const data = useSelector((state) => state.data.data);

  const onSubmit = (formValues) => {
    dispatch(sendEmailRequest({ userData: data }));
  };

  useEffect(() => {
    if (emailStatus === "succeeded") reset();
  }, [emailStatus]);

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
            className="button"
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

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Form = reduxForm({
  form: "sendForm",
  validate,
})(SendForm);

export default Form;

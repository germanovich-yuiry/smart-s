import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import TextField from "@mui/material/TextField";

const Container = styled.div`
  box-shadow: 1px 1px 4px 1px #00bfff;
  background-color: white;
  border-radius: 12px;

  width: 100%;
  max-width: 400px;
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

const Button = styled(MuiButton)`
  margin-right: 20px;
  box-sizing: border-box;
  height: 48px;
  display: inline-block;
`;

const Input = styled(TextField)`
  display: inline-block;
  width: 100%;
  height: 48px;

  & .MuiInputBase-root {
    height: 100%;
  }
`;

const Space = styled.div`
  display: inline-block;
  width: 20px;
  height: 48px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const renderInput = ({ input, label, meta: { touched, error } }) => (
  <Input
    {...input}
    label={label}
    error={touched && Boolean(error)}
    helperText={touched && error}
    variant="outlined"
  />
);

const SendForm = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (formValues) => {
    console.log("Form Values:", formValues);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <Title>Enter Email to send data</Title>
          <Note>Your data is ready! Please enter a valid email to send</Note>
        </FormHeader>

        <InputSection>
          {" "}
          <Field
            name="email"
            component={renderInput}
            type="email"
            label="Email"
          />
          <Space />
          <Button type="submit" variant="contained" className="button">
            Send
          </Button>
        </InputSection>
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

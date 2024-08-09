import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import TextField from "@mui/material/TextField";
import MultyInput from "../shared/ui/MultyInput";
import Divider from "../shared/ui/Divider";
import { useDispatch } from "react-redux";
import { setData } from "../slices/dataSlice";
import { openModal } from "../slices/modalSlice";

import SaveButton from "../shared/ui/SaveButton";

import { formValidate as validate } from "../helpers/formValidate";

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 38px;
`;

const FormContainer = styled.div`
  width: 98%;
  max-width: 800px;
  height: auto;
  padding: 32px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 1px 4px 1px #00bfff;

  .link {
    color: blue;
    text-decoration: none;
  }

  .block-wrapper {
    margin-bottom: 38px;
  }

  @media screen and (max-width: 640px) {
    .form-header {
      .note {
        font-size: 20px;
        letter-spacing: 0.6px;
        padding-bottom: 12px;
      }
      .note-info {
        font-size: 16px;
        opacity: 75%;
        font-weight: 500;
        margin-bottom: 36px;
      }
    }

    .footer-note {
      font-size: 16px;
      margin-bottom: 12px;
    }

    .text-label {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.4px;
      margin-bottom: 18px;
    }

    .button {
      width: 100%;
    }
  }

  @media screen and (min-width: 640px) {
    .two {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .two-inner {
      display: inline-block;
      width: 100%;
      &:first-child {
        margin-right: 30px;
      }
    }

    .form-header {
      .note {
        font-size: 20px;
        letter-spacing: 0.6px;
        padding-bottom: 12px;
      }
      .note-info {
        font-size: 16px;
        opacity: 75%;
        font-weight: 500;
        margin-bottom: 36px;
      }
    }

    .form-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .footer-note {
      font-size: 16px;
    }

    .text-label {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.4px;
      margin-bottom: 18px;
    }

    .button {
      width: auto;
    }
  }
`;

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <StyledTextField
      {...input}
      label={label}
      variant="outlined"
      error={touched && !!error}
      helperText={touched && error}
      {...custom}
    />
  </div>
);

const renderAreaField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <MultyInput
      {...input}
      label={label}
      variant="outlined"
      error={!!error}
      helperText={touched && error}
      {...custom}
    />
  </div>
);

const Form = ({ handleSubmit, reset }) => {
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log("Form data:", formData);
    dispatch(setData(formData));
    dispatch(openModal());
    reset();
  };

  return (
    <FormContainer>
      <div className="form-header">
        <h3 className="note">Change your private information</h3>
        <p className="note-info">
          Please read our{" "}
          <a
            className="link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            terms of use
          </a>{" "}
          to be informed how we manage your private data.
        </p>
      </div>
      <Divider />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="two">
          <div className="two-inner block-wrapper">
            <p className="text-label" id="firstname">
              Enter your first name
            </p>
            <Field
              name="firstName"
              component={renderTextField}
              label="First name *"
            />
          </div>
          <div className="two-inner block-wrapper">
            <p className="text-label">Enter your email</p>
            <Field name="email" component={renderTextField} label="Email *" />
          </div>
        </div>

        <div className="one">
          <p className="text-label">Bio</p>
          <Field
            name="bio"
            component={renderAreaField}
            label={"Bio"}
            // rows="5"
          />
        </div>
        <Divider />

        <div className="two">
          <div className="two-inner block-wrapper">
            <p className="text-label">Country</p>
            <Field
              name="country"
              component={renderTextField}
              label="Country *"
            />
          </div>
          <div className="two-inner block-wrapper">
            <p className="text-label">City</p>
            <Field name="city" component={renderTextField} label="City *" />
          </div>
        </div>

        <div className="one block-wrapper">
          <p className="text-label">Enter your address</p>
          <Field name="address" component={renderTextField} label="Address *" />
        </div>

        <div className="form-footer">
          <div className="footer-note">
            You may also consider to update your{" "}
            <a
              className="link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              billing information.
            </a>
          </div>
          <SaveButton className="button" />
        </div>
      </form>
    </FormContainer>
  );
};

const NewForm = reduxForm({
  form: "myForm",
  validate,
})(Form);

export default NewForm;

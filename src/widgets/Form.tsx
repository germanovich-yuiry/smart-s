import styled from "styled-components";

import TextField from "@mui/material/TextField";
import { Button as MuiButton } from "@mui/material";
import MultyInput from "../shared/ui/MultyInput";
import Divider from "../shared/ui/Divider";

// Стили для кнопки
const StyledButton = styled(MuiButton)`
  height: 48px;
  width: 100%;
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

    .two {
    }
    .two-inner {
    }
    .one {
    }

    .footer-note {
      font-size: 14px;
      margin-bottom: 12px;
    }

    .text-label {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.4px;
      margin-bottom: 18px;
    }
  }

  @media screen and (min-width: 641px) {
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
    .one {
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

const Form = () => {
  return (
    <FormContainer>
      <div className="form-header">
        <h3 className="note">Change your private information</h3>
        <p className="note-info">
          Please read our{" "}
          <a className="link" href="https://google.com" target="_blank">
            terms of use
          </a>{" "}
          to be informed how we manage your private data.
        </p>
      </div>
      <Divider />

      <form>
        <div className="two">
          <div className="two-inner">
            <p className="text-label" id="firstname">
              Enter your first name
            </p>
            <TextField
              id="firstName"
              label="First name *"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "38px" }}
            />
          </div>
          <div className="two-inner">
            <p className="text-label">Enter your email</p>
            <TextField
              id="email"
              label="Email *"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "38px" }}
            />
          </div>
        </div>

        <div className="one">
          <p className="text-label">Bio</p>
          <MultyInput label={"Bio"} rows="5" />
        </div>
        <Divider />

        <div className="two">
          <div className="two-inner">
            <p className="text-label">Country</p>
            <TextField
              id="country"
              label="Country *"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "38px" }}
            />
          </div>
          <div className="two-inner">
            <p className="text-label">City</p>
            <TextField
              label="City *"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "38px" }}
            />
          </div>
        </div>

        <div className="one">
          <p className="text-label">Enter your address</p>
          <TextField
            label="Address *"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "38px" }}
          />
        </div>

        <div className="form-footer">
          <div className="footer-note">
            You may also consider to update your{" "}
            <a className="link" href="https://google.com" target="_blank">
              billing information.
            </a>
          </div>

          <StyledButton variant="contained" className="button">
            Save
          </StyledButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;

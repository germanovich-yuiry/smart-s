import styled from "styled-components";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MultyInput from "../shared/ui/MultyInput";

const FormContainer = styled.div`
  width: 98%;
  height: auto;
  padding: 32px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 4px 1px #00bfff;

  .blue-color {
    color: blue;
  }

  .divider {
    height: 0.5px;
    background-color: black;
    opacity: 20%;
    margin-bottom: 28px;
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
      font-size: 14px;
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

  @media screen and (min-width: 641px) {
    .name-block {
      display: inline-block;
      width: calc(50% - 20px);
      margin-right: 36px;
    }

    .email-block {
      display: inline-block;
      width: calc(50% - 20px);
    }

    .country-block {
      display: inline-block;
      width: calc(50% - 20px);
      margin-right: 36px;
    }

    .city-block {
      display: inline-block;
      width: calc(50% - 20px);
    }

    .bio-block {
      width: calc(100% - 4px);
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
      font-size: 14px;
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
          Please read our <span className="blue-color">terms of use</span> to be
          informed how we manage your private data.
        </p>
      </div>
      <div className="divider"></div>

      <form>
        <div className="block name-block">
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
        <div className="block email-block">
          <p className="text-label">Enter your email</p>
          <TextField
            id="email"
            label="Email *"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "38px" }}
          />
        </div>
        <div className="bio-block">
          <p className="text-label">Bio</p>

          <MultyInput label={"Bio *"} rows="5" />
        </div>
        <div className="country-block">
          <p className="text-label">Country</p>
          <TextField
            id="country"
            label="Country *"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "38px" }}
          />
        </div>
        <div className="city-block">
          <p className="text-label">City</p>
          <TextField
            label="City *"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "38px" }}
          />
        </div>

        <div className="full-block">
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
            <span className="blue-color">billing information.</span>
          </div>

          <Button
            variant="contained"
            fullWidth
            sx={{ height: "48px" }}
            className="button"
          >
            Save
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;

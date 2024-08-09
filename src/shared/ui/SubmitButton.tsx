import { FC } from "react";

import styled from "styled-components";

import { Button as MuiButton } from "@mui/material";

const StyledButton = styled(MuiButton)`
  height: 56px;
  display: inline-block;
`;

const SubmitButton: FC = () => (
  <StyledButton
    type="submit"
    variant="contained"
    style={{ textTransform: "none" }}
  >
    Send
  </StyledButton>
);

export default SubmitButton;

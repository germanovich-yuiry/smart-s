import { FC } from "react";

import styled from "styled-components";

import { Button as MuiButton } from "@mui/material";

const StyledButton = styled(MuiButton)`
  height: 56px;
  display: inline-block;
`;

const SaveButton: FC<{ className: string }> = ({ className }) => {
  return (
    <StyledButton
      type="submit"
      variant="contained"
      style={{ textTransform: "none" }}
      className={className}
    >
      Save
    </StyledButton>
  );
};

export default SaveButton;

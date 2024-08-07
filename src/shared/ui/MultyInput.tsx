import styled from "styled-components";
import { TextField } from "@mui/material";

const InputContainer = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: blue;
  }
`;

const MultyInput = ({ label, rows }) => {
  return (
    <InputContainer
      label={label}
      multiline
      rows={rows}
      variant="outlined"
      fullWidth
      sx={{ marginBottom: "38px" }}
    />
  );
};

export default MultyInput;

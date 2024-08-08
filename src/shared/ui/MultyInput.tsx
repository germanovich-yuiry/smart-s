import styled from "styled-components";
import { TextField } from "@mui/material";

const InputContainer = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: blue;
  }
`;

const Container = styled.div`
  position: relative;
`;

const MultyInput = ({ label, rows, error, helperText, ...props }) => {
  return (
    <Container>
      <InputContainer
        {...props}
        label={label}
        multiline
        rows={rows}
        variant="outlined"
        fullWidth
        error={error}
        helperText={helperText}
        sx={{ marginBottom: "38px" }}
      />
    </Container>
  );
};

export default MultyInput;

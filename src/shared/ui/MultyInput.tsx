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

const MultyInput = ({ label, rows, error, helperText }) => {
  return (
    <Container>
      <InputContainer
        label={label}
        multiline
        rows={rows}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "38px" }}
      />
      {error && (
        <p
          style={{
            color: "#9b2d30",
            fontSize: "14px",
            position: "absolute",
            bottom: "16px",
            left: "14px",
          }}
        >
          {helperText}
        </p>
      )}
    </Container>
  );
};

export default MultyInput;

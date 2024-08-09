import { FC } from "react";
import styled from "styled-components";
import { TextField, TextFieldProps } from "@mui/material";

const InputContainer = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: blue;
  }
`;

const Container = styled.div`
  position: relative;
`;

interface MultyInputProps
  extends Omit<TextFieldProps, "label" | "multiline" | "rows"> {
  label: string;
  rows?: number;
  error?: boolean;
  helperText?: string | false;
}

const MultyInput: FC<MultyInputProps> = ({
  label,
  rows,
  error,
  helperText,
  ...props
}) => {
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

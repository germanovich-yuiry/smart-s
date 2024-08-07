import React from "react";
import { TextField } from "@mui/material";

const TextAreaWithLabel = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      variant="outlined"
      multiline
      rows={4}
      label={label}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: Boolean(value), // Скрытие лейбла при наличии значения
      }}
      {...props}
    />
  );
};

export default TextAreaWithLabel;

export interface IRenderTextFieldProps {
  input: object;
  label: string;
  meta: { touched: boolean; error?: string };
}

export interface IRenderAreaFieldProps {
  input: object;
  label: string;
  meta: {
    touched: boolean;
    error: string | undefined;
  };
  [key: string]: unknown;
}

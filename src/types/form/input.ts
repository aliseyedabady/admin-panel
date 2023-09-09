import { FieldError } from "../filedError";

export interface InputProps {
  label: string;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: FieldError;
  type?: "text" | "password";
}

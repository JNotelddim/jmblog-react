import { FieldError } from 'react-hook-form';

export interface TextFieldProps {
  label?: string;
  type?: 'text' | 'tel' | 'email' | 'hidden' | 'password' | 'search' | 'url';
  errorText?: string;
  errorType?: FieldError;
  inputProps: unknown; // TODO: what's returned from the `register` react-hook-form fn?
}
export default TextFieldProps;

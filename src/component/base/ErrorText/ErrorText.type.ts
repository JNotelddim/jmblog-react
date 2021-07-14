import { TypographyProps } from '@material-ui/core';
import { FieldError } from 'react-hook-form';

export interface ErrorTextProps extends TypographyProps {
  errorType?: FieldError;
  customMessage?: string;
}

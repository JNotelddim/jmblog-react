import React from 'react';
import { Typography } from '@material-ui/core';

import { ErrorTextProps } from './ErrorText.type';

type StringMap = {
  [key: string]: string;
};

const errorTypeMessageMap: StringMap = {
  required: 'This field is required.',
  // min: '',
  // max: '',
  minLength: 'This value does not meet length requirements.',
  // maxLength: '',
  // pattern: '',
  // validate: '',
  // valueAsNumber: '',
  // valueAsDate: '',
  // value: '',
  // setValueAs: '',
  // shouldUnregister: '',
};

const ErrorText: React.FC<ErrorTextProps> = ({
  errorType,
  customMessage,
  ...props
}) => {
  // TODO: color: red!

  if (!errorType) {
    return null;
  }

  const message =
    customMessage || Object.keys(errorTypeMessageMap).includes(errorType.type)
      ? errorTypeMessageMap[errorType.type as string]
      : '';

  return (
    <Typography variant="body2" {...props}>
      {message}
    </Typography>
  );
};

export default ErrorText;

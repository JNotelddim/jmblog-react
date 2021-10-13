import React from 'react';

import TextField from 'src/component/base/TextField';
import TextFieldProps from 'src/component/base/TextField/TextField.type';
import { StringMap } from 'src/typings';

const errorTypeMessageMap: StringMap = {
  required: 'This field is required.',
  pattern: 'Please enter a valid email.',
};

const EmailField: React.FC<TextFieldProps> = ({
  errorType,
  errorText,
  ...props
}) => {
  // TODO: move this errorMessage logic to a hook for reuse?
  let errorMessage = errorText;
  if (errorType) {
    errorMessage = errorTypeMessageMap[errorType.type];
  }

  return (
    <TextField label="Email" type="email" errorText={errorMessage} {...props} />
  );
};

export default EmailField;

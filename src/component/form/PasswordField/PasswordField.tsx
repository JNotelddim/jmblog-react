import React from 'react';

import TextField from 'src/component/form/TextField';
import TextFieldProps from 'src/component/form/TextField/TextField.type';
import { StringMap } from 'src/typings';

const errorTypeMessageMap: StringMap = {
  required: 'This field is required.',
  minLength: 'Minimum 10 characters.',
  pattern: 'This value does not meet character requirements.', // TODO: elaborate.
  validate: 'These values must match.',
};

const PasswordField: React.FC<TextFieldProps> = ({ errorType, ...props }) => {
  // TODO: move this errorMessage logic to a hook for reuse?
  let errorText;
  if (errorType) {
    errorText = errorTypeMessageMap[errorType.type];
  }

  return (
    <TextField
      label="Password"
      type="password"
      errorText={errorText}
      {...props}
    />
  );
};

export default PasswordField;

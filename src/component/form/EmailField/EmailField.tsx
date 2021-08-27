import React from 'react';

import TextField from 'src/component/form/TextField';
import TextFieldProps from 'src/component/form/TextField/TextField.type';
import { StringMap } from 'src/typings';

const errorTypeMessageMap: StringMap = {
  required: 'This field is required.',
  pattern: 'Please enter a valid email.',
};

const EmailField: React.FC<TextFieldProps> = ({ errorType, ...props }) => {
  // TODO: move this errorMessage logic to a hook for reuse?
  let errorText;
  if (errorType) {
    errorText = errorTypeMessageMap[errorType.type];
  }

  return (
    <TextField label="Email" type="email" errorText={errorText} {...props} />
  );
};

export default EmailField;

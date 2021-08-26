import React from 'react';

import Text from 'src/component/base/Text';
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
  pattern: 'This value does not match the expected pattern.',
  // validate: '',
  // valueAsNumber: '',
  // valueAsDate: '',
  // value: '',
  // setValueAs: '',
  // shouldUnregister: '',
};

const ErrorText: React.FC<ErrorTextProps> = ({
  errorType,
  customMessage = '',
  ...props
}) => {
  if (!errorType) {
    return null;
  }

  let message = customMessage;
  if (Object.keys(errorTypeMessageMap).includes(errorType.type)) {
    message = errorTypeMessageMap[errorType.type];
  }

  return (
    <Text variant="body2" color="error" {...props}>
      {message}
    </Text>
  );
};

export default ErrorText;

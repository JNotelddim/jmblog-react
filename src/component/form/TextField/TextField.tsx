import React from 'react';

import Text from 'src/component/base/Text';
import ErrorText from 'src/component/base/ErrorText';

import TextFieldProps from './TextField.type';
import { StringMap } from 'src/typings';

const errorTypeMessageMap: StringMap = {
  required: 'This field is required.',
  // min: '',
  // max: '',
  minLength: 'This value is not long enough.',
  maxLength: 'This value is too long.',
  pattern: 'This value does not match the expected pattern.',
  // validate: '',
  // valueAsNumber: '',
  // valueAsDate: '',
  // value: '',
  // setValueAs: '',
  // shouldUnregister: '',
};

const TextField = ({
  label,
  type,
  errorType,
  errorText = '',
  inputProps,
}: TextFieldProps) => {
  let errorMessage = errorText;
  if (errorType && Object.keys(errorTypeMessageMap).includes(errorType.type)) {
    errorMessage = errorTypeMessageMap[errorType.type];
  }

  return (
    <>
      <Text variant="h6" mt={2}>
        {label}
      </Text>
      <input type={type} {...inputProps} />
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
};

export default TextField;

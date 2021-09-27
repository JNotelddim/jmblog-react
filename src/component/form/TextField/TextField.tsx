import React from 'react';

// Components
import { Box } from '@material-ui/core';
import Text from 'src/component/base/Text';
import ErrorText from 'src/component/base/ErrorText';
import { Input } from './TextField.style';

// Types
import TextFieldProps from './TextField.type';
import { StringMap } from 'src/typings';

// Consts
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

/**
 * TextField is a wrapped input which includes a label and some error text.
 */
const TextField = ({
  label,
  type,
  errorType,
  errorText = '',
  inputProps,
  className,
}: TextFieldProps) => {
  let errorMessage = errorText;
  if (errorType && Object.keys(errorTypeMessageMap).includes(errorType.type)) {
    errorMessage = errorTypeMessageMap[errorType.type];
  }

  return (
    <Box className={className} mt={2}>
      <Text variant="h6">{label}</Text>
      <Input type={type} {...inputProps} />
      <ErrorText>{errorMessage}</ErrorText>
    </Box>
  );
};

export default TextField;

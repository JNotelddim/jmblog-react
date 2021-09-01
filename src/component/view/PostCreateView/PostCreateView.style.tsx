import { styled } from '@material-ui/core';

import BaseTextField from 'src/component/form/TextField';

export const Form = styled('form')({});

export const TextField = styled(BaseTextField)({
  width: '100%',
});

export const FormFooter = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

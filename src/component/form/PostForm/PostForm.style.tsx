import { styled } from '@material-ui/core';

import BaseTextField from 'src/component/base/TextField';
import WYSIWYGEditor from 'src/component/base/WYSIWYGEditor';

export const Form = styled('form')({});

export const TextField = styled(BaseTextField)(({ theme }) => ({
  width: '100%',
  marginRight: theme.spacing(3),
}));

export const FormFooter = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const Editor = styled(WYSIWYGEditor)(({ theme }) => ({
  margin: theme.spacing(1, 0, 4, 0),
  maxHeight: '750px',
  overflowY: 'auto',
}));

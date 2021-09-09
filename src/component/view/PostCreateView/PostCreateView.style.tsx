import { styled } from '@material-ui/core';

import BaseTextField from 'src/component/form/TextField';
import WYSIWYGEditor from 'src/component/base/WYSIWYGEditor';

export const Form = styled('form')({});

export const TextField = styled(BaseTextField)({
  width: '100%',
});

export const FormFooter = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const Editor = styled(WYSIWYGEditor)(({ theme }) => ({
  margin: theme.spacing(1, 0, 4, 0),
}));

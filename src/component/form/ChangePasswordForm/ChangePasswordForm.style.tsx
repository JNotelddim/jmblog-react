import { styled } from '@material-ui/core';

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
}));

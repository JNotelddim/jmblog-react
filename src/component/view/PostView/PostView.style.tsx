import { styled } from '@material-ui/core';

export const Base = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(16),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

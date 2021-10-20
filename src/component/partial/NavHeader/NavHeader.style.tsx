import { styled, IconButton as MuiIconButton } from '@material-ui/core';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '60px', // stops it from jumping when there is/isn't a button in the header
  // TODO: ensure it stays this size

  padding: theme.spacing(1.5, 3),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.5, 10),
  },
}));

export const IconButton = styled(MuiIconButton)({
  height: '48px',
});

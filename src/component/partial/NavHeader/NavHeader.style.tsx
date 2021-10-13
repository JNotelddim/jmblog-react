import { styled, IconButton as MuiIconButton } from '@material-ui/core';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 10),
  minHeight: '60px', // stops it from jumping when there is/isn't a button in the header
}));

export const IconButton = styled(MuiIconButton)({
  height: '48px',
});

import { styled } from '@material-ui/core';

export const ListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const MenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  margin: theme.spacing(2, 0),
}));

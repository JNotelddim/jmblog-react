// Modules
import { styled, Theme } from '@material-ui/core';

// Types
import { AlertType } from './Snackbar.type';

// Exports

// TODO: customize colors based on type
export const Alert = styled('div')<Theme, { type: AlertType }>(
  ({ theme, type }) => ({
    zIndex: 1,
    border: '1px solid black',
    padding: theme.spacing(1.5, 6),
    background: 'white',
    width: '95%',
    borderRadius: '4px',

    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  })
);

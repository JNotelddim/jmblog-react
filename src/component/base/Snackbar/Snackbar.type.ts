import { SnackbarProps as MuiSnackbarProps } from '@material-ui/core';
import { AlertType } from 'src/typings';

export interface SnackbarProps extends MuiSnackbarProps {
  type: AlertType;
}

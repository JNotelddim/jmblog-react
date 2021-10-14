import { SnackbarProps as MuiSnackbarProps } from '@material-ui/core';

const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const WARNING = 'WARNING';
const INFO = 'INFO';

export type AlertType =
  | typeof ERROR
  | typeof SUCCESS
  | typeof WARNING
  | typeof INFO;

export interface SnackbarProps extends MuiSnackbarProps {
  type: AlertType;
}

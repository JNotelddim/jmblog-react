export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const WARNING = 'WARNING';
export const INFO = 'INFO';

export type AlertType =
  | typeof ERROR
  | typeof SUCCESS
  | typeof WARNING
  | typeof INFO;

export interface Snackbar {
  message: string;
  type?: AlertType;
  timeout?: number;
}

export interface SnackbarState {
  snackbars: Snackbar[];
}

export interface OpenSnackbarProps {
  message: string;
  type?: AlertType;
  timeout?: number;
}

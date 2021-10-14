import { AlertType } from 'src/component/base/Snackbar/Snackbar.type';

export interface Snackbar {
  message: string;
  type?: AlertType;
  timeout?: number;
}

export interface SnackbarState {
  snackbars: Snackbar[];
}

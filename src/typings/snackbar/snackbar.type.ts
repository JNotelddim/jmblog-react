export interface Snackbar {
  message: string;
  timeout?: number;
}

export interface SnackbarState {
  snackbars: Snackbar[];
}

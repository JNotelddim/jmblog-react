import { store } from 'src/redux/store';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, snackbar: SnackbarState}
export type AppDispatch = typeof store.dispatch;

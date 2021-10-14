import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'src/redux/user';
import { snackbarReducer } from 'src/redux/snackbar';

export const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
  },
});

export default store;

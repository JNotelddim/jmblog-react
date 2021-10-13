import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/typings/redux';
import { Snackbar, SnackbarState } from 'src/typings';

const initialState: SnackbarState = {
  snackbars: [
    // TODO: remove sample data
    {
      message: 'Test snackbar',
    },
  ],
};

export const userSlice = createSlice({
  name: 'snackbar',
  initialState: initialState,
  reducers: {
    show: (state, action: PayloadAction<Snackbar>) => {
      state.snackbars.push(action.payload);
    },
    hide: (state) => {
      state.snackbars.pop();
    },
  },
});

export const { show, hide } = userSlice.actions;

export const selectTopSnackbar = (state: RootState) => state;

export default userSlice.reducer;

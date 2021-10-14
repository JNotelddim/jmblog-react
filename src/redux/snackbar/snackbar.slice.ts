// Modules
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { Snackbar, SnackbarState, RootState } from 'src/typings';

// Consts
const initialState: SnackbarState = {
  snackbars: [
    // TODO: remove sample data
    {
      type: 'SUCCESS',
      message: 'Test snackbar',
    },
  ],
};

// Slice
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

// Actions
export const { show, hide } = userSlice.actions;

// Selectors
export const selectTopSnackbar = (state: RootState) =>
  [...state.snackbar.snackbars].pop();

export default userSlice.reducer;

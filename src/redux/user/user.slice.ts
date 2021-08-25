import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserState } from 'src/typings/user';

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUsername = (state: UserState) => state.user?.username;

export default userSlice.reducer;

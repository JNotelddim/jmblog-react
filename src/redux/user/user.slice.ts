import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserState } from 'src/typings/user';

const initialState: UserState = {
  isAuthenticated: false,
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUsername = (state: UserState) => state.user?.username;
export const selectisAuthenticated = (state: UserState) =>
  state.isAuthenticated;

export default userSlice.reducer;

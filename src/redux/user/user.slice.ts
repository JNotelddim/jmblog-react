import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/typings/redux';
import { User, UserState } from 'src/typings/user';

const initialState: UserState = {
  isAuthenticated: false,
  profile: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.profile = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUsername = (state: RootState) =>
  state.user.profile?.username;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;

export default userSlice.reducer;

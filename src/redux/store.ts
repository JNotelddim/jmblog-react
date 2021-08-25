import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'src/redux/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

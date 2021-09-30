/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

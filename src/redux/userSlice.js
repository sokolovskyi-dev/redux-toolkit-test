import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

const persistConfig = {
  key: 'counter',
  storage,
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);

export const { logIn, logOut } = userSlice.actions;

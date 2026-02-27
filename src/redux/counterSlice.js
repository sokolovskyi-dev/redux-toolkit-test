import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'counter',
  storage,
};

export const counterReducer = persistReducer(persistConfig, counterSlice.reducer);

export const { increment } = counterSlice.actions;

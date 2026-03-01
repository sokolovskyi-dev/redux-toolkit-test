import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { status: 'all' },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

const persistConfig = {
  key: 'counter',
  storage,
};

export const filtersReducer = persistReducer(persistConfig, filtersSlice.reducer);

export const { setStatusFilter } = filtersSlice.actions;

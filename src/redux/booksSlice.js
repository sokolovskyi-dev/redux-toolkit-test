import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './operations';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // [fetchBooks.fulfilled]: (state, { payload }) => (state.items = payload),
    // [fetchBooks.pending]: state => (state.isLoading = true),
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

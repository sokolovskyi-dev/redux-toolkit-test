import axios from 'axios';
import { fetchingError, fetchingInProgress, fetchingSuccess } from './booksSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/';

// export const fetchBooks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('books');
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

// First, create the thunk
const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await axios.get('books');
  return books;
});

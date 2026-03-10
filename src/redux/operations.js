import axios from 'axios';
// import { fetchingError, fetchingInProgress, fetchingSuccess } from './booksSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/';

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
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('books');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

import axios from 'axios';
import { fetchingError, fetchingInProgress, fetchingSuccess } from './booksSlice';
axios.defaults.baseURL = 'http://localhost:3001/';

export const fetchBooks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('books');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

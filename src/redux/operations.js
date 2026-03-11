import axios from 'axios';
// import { fetchingError, fetchingInProgress, fetchingSuccess } from './booksSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3000/';

axios.defaults.baseURL = 'https://69b08941c63dd197febc804c.mockapi.io';

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

//AsyncTasks

export const fetchTasks = createAsyncThunk(
  'asyncTasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const asyncToggleCompleted = createAsyncThunk(
  'asyncTasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, { completed: !task.completed });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteAsyncTask = createAsyncThunk('asyncTasks/deleteTask', async (task, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${task.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addAsyncTask = createAsyncThunk('asyncTasks/addTask', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/tasks', { text, completed: false });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

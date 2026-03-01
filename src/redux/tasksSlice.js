import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const task = state.items.find(item => item.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

const persistConfig = {
  key: 'counter',
  storage,
};

export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

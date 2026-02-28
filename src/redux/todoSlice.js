import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [
      {
        id: 1,
        text: 'Learn Redux',
        completed: false,
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items.filter(item => item.id !== action.paylad);
    },
    toggleCompleted: (state, action) => {
      const task = state.items.find(item => item.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

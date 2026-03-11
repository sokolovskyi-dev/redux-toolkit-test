import { createSlice } from '@reduxjs/toolkit';
import { addAsyncTask, asyncToggleCompleted, deleteAsyncTask, fetchTasks } from './operations';

function handlePending(state) {
  state.isLoading = true;
}
function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const asyncTasksSlice = createSlice({
  name: 'asyncTasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)

      .addCase(asyncToggleCompleted.pending, handlePending)
      .addCase(asyncToggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const task = state.items.find(task => task.id === action.payload.id);
        task.completed = action.payload.completed;
      })
      .addCase(asyncToggleCompleted.rejected, handleRejected)

      .addCase(deleteAsyncTask.pending, handlePending)
      .addCase(deleteAsyncTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteAsyncTask.rejected, handleRejected)

      .addCase(addAsyncTask.pending, handlePending)
      .addCase(addAsyncTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // console.log(action.payload);
        state.items.push(action.payload);
      })
      .addCase(addAsyncTask.rejected, handleRejected);
  },
});

export const asyncTasksReducer = asyncTasksSlice.reducer;

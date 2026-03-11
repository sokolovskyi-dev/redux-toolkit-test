import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { counterReducer } from './counterSlice';

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { todoReducer } from './todo';
import { filtersReducer } from './filtersSlice';
import { booksReducer } from './booksSlice';
import { asyncTasksReducer } from './tasksSlice';

export const store = configureStore({
  reducer: {
    asyncTasks: asyncTasksReducer,
    //persist:
    user: userReducer,
    counter: counterReducer,
    tasks: todoReducer,
    filters: filtersReducer,
    books: booksReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

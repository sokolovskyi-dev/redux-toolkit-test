export const getBooks = state => state.books;
export const getStatusFilter = state => state.filter.status;

// async
export const selectIsLoading = state => state.asyncTasks.isLoading;
export const selectTasks = state => state.asyncTasks.items;
export const selectStatusFilter = state => state.filters.status;

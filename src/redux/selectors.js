export const getBooks = state => state.books;
export const getStatusFilter = state => state.filter.status;

// async
export const selectIsLoading = state => state.asyncTasks.isLoading;
export const selectTasks = state => state.asyncTasks.items;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = state => {
  const tasks = selectTasks(state);
  const statusFilter = selectStatusFilter(state);
  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

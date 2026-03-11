import AddForm from '@/components/async-tasks/AddForm';
import AsyncTasksList from '@/components/async-tasks/AsyncTasksList';
import TasksHeader from '@/components/async-tasks/TasksHeader';
import { fetchTasks } from '@/redux/operations';
import { selectIsLoading } from '@/redux/selectors';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';

const override = {
  display: 'block',
  color: 'blue',
  // margin: '0 50px',

  // borderColor: 'red',
};

export function Component() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className="mt-5 rounded border p-5">
      <TasksHeader />
      <AddForm />
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <SyncLoader
            loading={isLoading}
            cssOverride={override}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#6366f1"
          />
        </div>
      )}
      <AsyncTasksList />
    </main>
  );
}

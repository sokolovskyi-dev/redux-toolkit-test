import { selectVisibleTasks } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import AsyncTask from './AsyncTask';

export default function AsyncTasksList() {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className="mt-5">
      {visibleTasks.length > 0 && visibleTasks.map(task => <AsyncTask key={task.id} task={task} />)}
    </ul>
  );
}

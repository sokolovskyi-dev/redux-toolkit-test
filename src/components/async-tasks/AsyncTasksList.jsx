import { selectTasks } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import AsyncTask from './AsyncTask';

export default function AsyncTasksList() {
  const tasks = useSelector(selectTasks);

  return (
    <ul className="mt-5">
      {tasks.length > 0 && tasks.map(task => <AsyncTask key={task.id} task={task} />)}
    </ul>
  );
}

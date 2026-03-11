import { selectTasks } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function CounterTasks() {
  const tasks = useSelector(selectTasks);
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div className="mt-3">
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
}

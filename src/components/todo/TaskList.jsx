import { useSelector } from 'react-redux';
import Task from './Task';

function getVisibleTasks(tasks, filterStatus) {
  switch (filterStatus) {
    case 'active':
      return tasks.filter(task => !task.completed);

    case 'completed':
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
}

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.items);
  const filter = useSelector(state => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, filter);
  return (
    <ul className="mt-8 flex w-md flex-col gap-3">
      {visibleTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

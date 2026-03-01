import { useSelector } from 'react-redux';
import Task from './Task';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.items);
  return (
    <ul className="mt-8 flex w-md flex-col gap-3">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

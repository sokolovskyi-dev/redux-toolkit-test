import { deleteTask, toggleCompleted } from '@/redux/tasksSlice';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

export default function Task({ task }) {
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(toggleCompleted(task.id));
  }

  function handleClick() {
    dispatch(deleteTask(task.id));
  }

  return (
    <li className="flex items-center justify-between border-b border-gray-500/50">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={handleChange} className="peer" />
        <p className="peer-checked:text-gray-400 peer-checked:line-through">{task.text}</p>
      </label>

      <button onClick={handleClick} className="bg-red-500! p-0!">
        <MdClose size={20} />
      </button>
    </li>
  );
}

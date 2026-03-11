import { asyncToggleCompleted, deleteAsyncTask } from '@/redux/operations';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export default function AsyncTask({ task }) {
  const dispatch = useDispatch();
  function handleChange() {
    dispatch(asyncToggleCompleted(task));
  }

  function handleDelete() {
    dispatch(deleteAsyncTask(task));
  }
  return (
    <li className="flex w-1/2 items-center justify-between border-b border-gray-500/80 p-2">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={handleChange} className="peer" />
        <p className="peer-checked:text-gray-400 peer-checked:line-through">{task.text}</p>
      </label>

      <button onClick={handleDelete} className="bg-red-500! p-0!">
        <MdClose size={20} />
      </button>
    </li>
  );
}

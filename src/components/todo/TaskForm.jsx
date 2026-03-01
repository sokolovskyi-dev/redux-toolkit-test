import { addTask } from '@/redux/tasksSlice';
import { useDispatch } from 'react-redux';

export default function TaskForm() {
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value.trim();
    if (text.length) {
      dispatch(
        addTask({
          id: crypto.randomUUID(),
          completed: false,
          text,
        })
      );
    }

    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <input
        className="input-apple mr-5"
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
}

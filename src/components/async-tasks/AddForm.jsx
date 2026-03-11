import { addAsyncTask } from '@/redux/operations';
import { useDispatch } from 'react-redux';

export default function AddForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(addAsyncTask(form.elements.text.value));
    form.reset();
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <input
        className="mr-3 rounded-md border p-2"
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

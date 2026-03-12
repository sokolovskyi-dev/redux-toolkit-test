import { addAsyncTask } from '@/redux/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function AddForm() {
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.text.value === '') {
      toast.error('Enter task text!!!!!!!!');

      return;
    }

    try {
      const newTask = await dispatch(addAsyncTask(form.elements.text.value)).unwrap();
      toast.success(`Task id=${newTask.id} created`);
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
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

import { asyncToggleCompleted, deleteAsyncTask, editTask } from '@/redux/operations';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function AsyncTask({ task }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  function handleChange() {
    dispatch(asyncToggleCompleted(task));
  }

  async function handleDelete() {
    try {
      const deletedTask = await dispatch(deleteAsyncTask(task)).unwrap();
      toast.success(`Task id=${deletedTask.id} deleted`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.currentTarget.elements.editText.value;
    dispatch(editTask({ id: task.id, text }));
    setIsModalOpen(false);
  }
  return (
    <li className="flex w-1/2 items-center justify-between border-b border-gray-500/80 p-2">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={handleChange} className="peer" />
        <p className="peer-checked:text-gray-400 peer-checked:line-through">{task.text}</p>
      </label>
      <div className="flex items-center gap-3">
        <button className="bg-emerald-500! py-1!" onClick={() => setIsModalOpen(true)}>
          Edit
        </button>
        <button onClick={handleDelete} className="bg-red-500! p-0!">
          <MdClose size={20} />
        </button>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="relative w-96 rounded-xl bg-white p-6 text-black outline-none"
          overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <h2 className="text-xl font-bold">Edit task</h2>
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              defaultValue={task.text}
              className="mr-3 rounded-md border p-2"
              type="text"
              name="editText"
            />
            <button className="mr-2 bg-blue-500! p-2! px-3!" type="submit">
              Edit
            </button>
          </form>

          <button
            className="absolute top-1 right-1 bg-red-500! px-2! py-1!"
            onClick={() => setIsModalOpen(false)}
          >
            x
          </button>
        </Modal>
      )}
    </li>
  );
}

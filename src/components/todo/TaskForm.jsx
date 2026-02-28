export default function TaskForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
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

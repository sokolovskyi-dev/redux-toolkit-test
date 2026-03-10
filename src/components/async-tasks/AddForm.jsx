export default function AddForm() {
  return (
    <form className="mt-5">
      <input className="mr-3 border p-2" type="text" placeholder="Enter task text..." />
      <button type="submit">Add</button>
    </form>
  );
}

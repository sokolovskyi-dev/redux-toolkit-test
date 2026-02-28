import StatusFilter from './StatusFilter';
import TaskCounter from './TaskCounter';

export default function AppBar() {
  return (
    <section className="mt-10 flex justify-between">
      <div>
        <h2 className="font-extrabold">Tasks</h2>
        <TaskCounter />
      </div>
      <div>
        {' '}
        <h2 className="font-extrabold">Filter by status</h2>
        <StatusFilter />
      </div>
    </section>
  );
}

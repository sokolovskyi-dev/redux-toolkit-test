import CounterTasks from './CounterTasks';
import Filter from './Filter';

export default function TasksHeader() {
  return (
    <section className="flex justify-between">
      <div>
        <h2 className="font-bold">Tasks</h2>
        <CounterTasks />
      </div>
      <div>
        <h2 className="font-bold">Filter by status</h2>
        <Filter />
      </div>
    </section>
  );
}

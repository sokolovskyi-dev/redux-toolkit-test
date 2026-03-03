import AppBar from '@/components/todo/AppBar';
import TaskForm from '@/components/todo/TaskForm';
import TaskList from '@/components/todo/TaskList';

export function Component() {
  return (
    <main className="mt-5 rounded border p-5">
      <AppBar />
      <TaskForm />
      <TaskList />
    </main>
  );
}
